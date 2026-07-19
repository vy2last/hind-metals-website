/**
 * RfqForm — reusable casting inquiry form.
 *
 * Used on /contact (and any future page that embeds a quote form).
 * Matches the site's existing bare-HTML + Tailwind input style exactly.
 */
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation } from 'wouter';
import { Loader2, Paperclip, X, AlertCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  rfqSchema,
  type RfqFormValues,
  validateFile,
  ACCEPTED_EXTENSIONS,
} from '@/lib/validation';
import { submitRfq, checkRateLimit, type SubmitStage } from '@/lib/rfq';

// ── Shared input className ─────────────────────────────────────────────────
const inputCls =
  'w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all';
const errorCls = 'text-xs text-red-600 mt-1 font-medium';
const labelCls = 'text-sm font-bold uppercase tracking-wider text-charcoal';

interface Props {
  /** Pre-select a capability from the URL ?interest= param */
  defaultProductName?: string;
}

export function RfqForm({ defaultProductName = '' }: Props) {
  const [, setLocation] = useLocation();

  // File state (kept outside RHF — FileList isn't serialisable)
  const [file, setFile]           = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Submission progress state
  const [stage, setStage]           = useState<SubmitStage>({ stage: 'idle' });
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues: { product_name: defaultProductName },
  });

  const busy = isSubmitting || stage.stage === 'uploading' || stage.stage === 'saving';

  // ── File selection ───────────────────────────────────────────
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null;
    setFileError(null);
    if (!selected) { setFile(null); return; }
    const err = validateFile(selected);
    if (err) { setFileError(err); setFile(null); return; }
    setFile(selected);
  }

  function clearFile() {
    setFile(null);
    setFileError(null);
    if (fileRef.current) fileRef.current.value = '';
  }

  // ── Submit ───────────────────────────────────────────────────
  async function onSubmit(values: RfqFormValues) {
    setGlobalError(null);

    // Honeypot check — bots fill the hidden "website" field
    if (values.website) {
      // Silently pretend success
      setLocation('/success');
      return;
    }

    // Rate limit
    const rl = checkRateLimit();
    if (!rl.allowed) {
      setGlobalError(
        `Please wait ${rl.secondsLeft} seconds before submitting again.`,
      );
      return;
    }

    try {
      await submitRfq(values, file, (p) => setStage(p));
      setLocation('/success');
    } catch (err) {
      setGlobalError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
      setStage({ stage: 'idle' });
    }
  }

  // ── Upload progress label ────────────────────────────────────
  function stageLabel() {
    if (stage.stage === 'uploading') return `Uploading… ${stage.percent}%`;
    if (stage.stage === 'saving')    return 'Saving inquiry…';
    return 'Submit Casting Inquiry';
  }

  // ── Render ───────────────────────────────────────────────────
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>

      {/* ── Honeypot (hidden from real users) ─────────────────── */}
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <label htmlFor="rfq-website">Leave this blank</label>
        <input id="rfq-website" type="text" autoComplete="off" tabIndex={-1} {...register('website')} />
      </div>

      {/* ── Global error ──────────────────────────────────────── */}
      {globalError && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{globalError}</span>
        </div>
      )}

      {/* ── Row 1: Company / Contact Person ───────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className={labelCls}>Company Name *</label>
          <input type="text" className={inputCls} {...register('company')} />
          {errors.company && <p className={errorCls}>{errors.company.message}</p>}
        </div>
        <div className="space-y-1">
          <label className={labelCls}>Contact Person *</label>
          <input type="text" className={inputCls} {...register('full_name')} />
          {errors.full_name && <p className={errorCls}>{errors.full_name.message}</p>}
        </div>
      </div>

      {/* ── Row 2: Email / Phone ──────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className={labelCls}>Email Address *</label>
          <input type="email" className={inputCls} {...register('email')} />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>
        <div className="space-y-1">
          <label className={labelCls}>Phone / WhatsApp *</label>
          <input type="tel" className={inputCls} {...register('phone')} />
          {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* ── Row 3: Country / Capability ───────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className={labelCls}>Country *</label>
          <input
            type="text"
            placeholder="e.g. UAE, USA, Germany…"
            className={inputCls}
            {...register('country')}
          />
          {errors.country && <p className={errorCls}>{errors.country.message}</p>}
        </div>
        <div className="space-y-1">
          <label className={labelCls}>Capability / Category</label>
          <select className={`${inputCls} appearance-none`} {...register('product_name')}>
            <option value="">Select Category…</option>
            <option>Cast Iron Components</option>
            <option>Aluminium Die Castings (HPDC)</option>
            <option>Pressure Die Casting (Zinc / Magnesium)</option>
            <option>Traditional Sand Casting</option>
            <option>Advanced Machining — VMC / HMC / CNC</option>
            <option>Powder Coating &amp; Surface Finishing</option>
            <option>Earthing &amp; Grounding Equipment</option>
            <option>Construction Equipment Castings</option>
            <option>OEM Precision Castings</option>
            <option>Specialty Alloy Castings</option>
            <option>Other / Multiple</option>
          </select>
        </div>
      </div>

      {/* ── Row 4: Alloy / Quantity ───────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className={labelCls}>Alloy / Grade Required</label>
          <input
            type="text"
            placeholder="e.g. Grey Iron IS 210 Gr. FG 260, ASTM A536…"
            className={inputCls}
            {...register('material')}
          />
        </div>
        <div className="space-y-1">
          <label className={labelCls}>Quantity</label>
          <input
            type="text"
            placeholder="e.g. 500 pieces, 2 MT…"
            className={inputCls}
            {...register('quantity')}
          />
        </div>
      </div>

      {/* ── Row 5: Incoterms ──────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className={labelCls}>Preferred Incoterms</label>
          <select className={`${inputCls} appearance-none`} {...register('incoterms')}>
            <option value="">Select Incoterms…</option>
            <option>FOB – Nhava Sheva (Mumbai)</option>
            <option>CIF – Destination Port</option>
            <option>CFR – Destination Port</option>
            <option>EXW – Jaipur Factory</option>
            <option>Open to Discussion</option>
          </select>
        </div>
        {/* File upload */}
        <div className="space-y-1">
          <label className={labelCls}>
            Attach Drawing / File
            <span className="text-gray-400 font-normal normal-case ml-1">(PDF, STEP, DWG, ZIP… max 10 MB)</span>
          </label>
          {!file ? (
            <label
              className={`${inputCls} flex items-center gap-2 cursor-pointer text-gray-500 hover:border-primary`}
            >
              <Paperclip className="w-4 h-4 shrink-0" />
              <span className="truncate">Choose file…</span>
              <input
                ref={fileRef}
                type="file"
                accept={ACCEPTED_EXTENSIONS}
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          ) : (
            <div className="flex items-center gap-2 bg-white border border-primary px-4 py-3 text-sm text-charcoal">
              <Paperclip className="w-4 h-4 text-primary shrink-0" />
              <span className="truncate flex-1">{file.name}</span>
              <button
                type="button"
                onClick={clearFile}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {fileError && <p className={errorCls}>{fileError}</p>}
        </div>
      </div>

      {/* ── Textarea ──────────────────────────────────────────── */}
      <div className="space-y-1">
        <label className={labelCls}>Casting Requirements &amp; Specifications</label>
        <textarea
          rows={5}
          placeholder="Please describe the component, dimensions/weight, required standards (ASTM/EN/IS/BS), surface finish, and any drawing references or special requirements…"
          className={`${inputCls} resize-none`}
          {...register('message')}
        />
      </div>

      {/* ── Upload progress bar ───────────────────────────────── */}
      {stage.stage === 'uploading' && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500 font-medium">
            <span>Uploading file…</span>
            <span>{stage.percent}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-150 ease-out"
              style={{ width: `${stage.percent}%` }}
            />
          </div>
        </div>
      )}

      {/* ── Submit ────────────────────────────────────────────── */}
      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={busy}>
        {busy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {stageLabel()}
      </Button>
    </form>
  );
}
