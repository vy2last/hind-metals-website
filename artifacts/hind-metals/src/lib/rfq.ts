import { supabase } from './supabase';
import type { RfqFormValues } from './validation';

// ── Rate limiting (client-side guard against accidental double-submits) ────
const RATE_LIMIT_KEY = 'hm_last_rfq_ts';
const RATE_LIMIT_MS  = 60_000; // 60 seconds

export function checkRateLimit(): { allowed: boolean; secondsLeft: number } {
  const raw = localStorage.getItem(RATE_LIMIT_KEY);
  if (!raw) return { allowed: true, secondsLeft: 0 };
  const elapsed = Date.now() - Number(raw);
  if (elapsed >= RATE_LIMIT_MS) return { allowed: true, secondsLeft: 0 };
  return { allowed: false, secondsLeft: Math.ceil((RATE_LIMIT_MS - elapsed) / 1000) };
}

function markSubmitted() {
  localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
}

// ── Progress stages ────────────────────────────────────────────────────────
export type SubmitStage =
  | { stage: 'idle' }
  | { stage: 'uploading'; percent: number }
  | { stage: 'saving' }
  | { stage: 'done' };

// ── Core submit function ───────────────────────────────────────────────────
export async function submitRfq(
  values: RfqFormValues,
  file: File | null,
  onProgress: (p: SubmitStage) => void,
): Promise<void> {
  let attachment_url: string | null = null;
  let attachment_filename: string | null = null;

  // 1 ─ Upload attachment (if any)
  if (file) {
    onProgress({ stage: 'uploading', percent: 0 });

    const ext    = file.name.split('.').pop() ?? 'bin';
    const now    = new Date();
    const folder = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const path   = `${folder}/${crypto.randomUUID()}.${ext}`;

    // Supabase uses fetch — no native XHR progress.
    // Simulate smooth progress so the user sees activity.
    let pct = 0;
    const ticker = setInterval(() => {
      pct = Math.min(pct + 8, 85);
      onProgress({ stage: 'uploading', percent: pct });
    }, 150);

    const { error: uploadError } = await supabase.storage
      .from('rfq-attachments')
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type || 'application/octet-stream',
      });

    clearInterval(ticker);

    if (uploadError) {
      throw new Error(`File upload failed: ${uploadError.message}`);
    }

    onProgress({ stage: 'uploading', percent: 100 });
    attachment_url      = path;
    attachment_filename = file.name;
  }

  // 2 ─ Combine incoterms into message (no separate column for it)
  const incotermsLine =
    values.incoterms && !values.incoterms.startsWith('Select')
      ? `Preferred Incoterms: ${values.incoterms}\n\n`
      : '';
  const fullMessage = `${incotermsLine}${values.message ?? ''}`.trim() || null;

  // 3 ─ Insert row
  onProgress({ stage: 'saving' });

  const { error: insertError } = await supabase.from('rfqs').insert({
    full_name:          values.full_name,
    company:            values.company,
    email:              values.email,
    phone:              values.phone,
    country:            values.country,
    product_name:       values.product_name  || null,
    material:           values.material      || null,
    quantity:           values.quantity      || null,
    message:            fullMessage,
    attachment_url,
    attachment_filename,
    source_domain:      window.location.hostname,
    ip_address:         null, // not available client-side; Phase 2 edge function can populate
    status:             'New',
  });

  if (insertError) {
    throw new Error(`Could not save your inquiry: ${insertError.message}`);
  }

  markSubmitted();
  onProgress({ stage: 'done' });
}
