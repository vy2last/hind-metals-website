import { z } from 'zod';

// ── File constraints ───────────────────────────────────────────
export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

export const ACCEPTED_EXTENSIONS = '.pdf,.step,.stp,.dwg,.dxf,.zip,.rar,.jpg,.jpeg,.png';

export const ACCEPTED_MIME_TYPES = new Set([
  'application/pdf',
  // STEP / STP — no single official MIME, accept all common variants
  'application/step',
  'application/stp',
  'model/step',
  'model/stp',
  'application/x-step',
  // DWG
  'image/x-dwg',
  'image/vnd.dwg',
  'application/acad',
  'application/x-acad',
  // DXF
  'application/dxf',
  'image/x-dxf',
  // ZIP / RAR
  'application/zip',
  'application/x-zip-compressed',
  'application/x-rar-compressed',
  'application/vnd.rar',
  // Images
  'image/jpeg',
  'image/png',
]);

export function validateFile(file: File): string | null {
  if (file.size > MAX_FILE_BYTES) {
    return `File too large. Maximum size is 10 MB (yours: ${(file.size / 1024 / 1024).toFixed(1)} MB).`;
  }

  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  const allowedExts = ['pdf', 'step', 'stp', 'dwg', 'dxf', 'zip', 'rar', 'jpg', 'jpeg', 'png'];
  if (!allowedExts.includes(ext)) {
    return `File type not supported. Accepted: PDF, STEP, STP, DWG, DXF, ZIP, RAR, JPG, PNG.`;
  }

  return null;
}

// ── Form schema ────────────────────────────────────────────────
export const rfqSchema = z.object({
  company:      z.string().min(1, 'Company name is required').max(200),
  full_name:    z.string().min(1, 'Contact person is required').max(200),
  email:        z.string().min(1, 'Email is required').email('Enter a valid email address'),
  phone:        z.string().min(5, 'Phone number is required').max(50),
  country:      z.string().min(1, 'Country is required').max(100),
  product_name: z.string().optional(),
  material:     z.string().optional(),
  quantity:     z.string().optional(),
  incoterms:    z.string().optional(),
  message:      z.string().optional(),
  // Honeypot — bots fill this, humans don't see it
  website:      z.string().max(0, '').optional(),
});

export type RfqFormValues = z.infer<typeof rfqSchema>;
