-- =============================================================
-- Migration: 001_create_rfqs
-- Description: RFQ table, RLS policies, and storage policies
-- Run this in: Supabase Dashboard → SQL Editor
-- =============================================================

-- ── Table ─────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.rfqs (
  id                  uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at          timestamptz NOT NULL    DEFAULT now(),

  -- Submitter identity
  full_name           text        NOT NULL,
  company             text        NOT NULL,
  email               text        NOT NULL,
  phone               text        NOT NULL,
  country             text        NOT NULL,

  -- Inquiry details
  product_name        text,
  material            text,
  quantity            text,
  message             text,

  -- Attachment (stored in private bucket rfq-attachments)
  attachment_url      text,
  attachment_filename text,

  -- Metadata
  source_domain       text,
  ip_address          text,

  -- Admin workflow
  status              text        NOT NULL DEFAULT 'New',
  notes               text,

  CONSTRAINT rfqs_status_check CHECK (
    status IN ('New', 'In Review', 'Quoted', 'Closed', 'Spam')
  )
);

-- ── Indexes ───────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS rfqs_created_at_idx ON public.rfqs (created_at DESC);
CREATE INDEX IF NOT EXISTS rfqs_status_idx     ON public.rfqs (status);
CREATE INDEX IF NOT EXISTS rfqs_email_idx      ON public.rfqs (email);

-- ── Row Level Security ────────────────────────────────────────

ALTER TABLE public.rfqs ENABLE ROW LEVEL SECURITY;

-- Clean up if re-running
DROP POLICY IF EXISTS "anon_can_insert_rfqs"  ON public.rfqs;
DROP POLICY IF EXISTS "auth_can_select_rfqs"  ON public.rfqs;
DROP POLICY IF EXISTS "auth_can_update_rfqs"  ON public.rfqs;
DROP POLICY IF EXISTS "auth_can_delete_rfqs"  ON public.rfqs;

-- Public form submissions (anon + authenticated)
CREATE POLICY "anon_can_insert_rfqs"
  ON public.rfqs
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Admin read (Phase 2 dashboard)
CREATE POLICY "auth_can_select_rfqs"
  ON public.rfqs
  FOR SELECT
  TO authenticated
  USING (true);

-- Admin status / notes updates
CREATE POLICY "auth_can_update_rfqs"
  ON public.rfqs
  FOR UPDATE
  TO authenticated
  USING (true);

-- Admin delete (spam removal)
CREATE POLICY "auth_can_delete_rfqs"
  ON public.rfqs
  FOR DELETE
  TO authenticated
  USING (true);

-- =============================================================
-- Storage Policies for bucket: rfq-attachments
-- PREREQUISITE: bucket must already exist and be set to PRIVATE
-- =============================================================

DROP POLICY IF EXISTS "anon_can_upload_rfq_attachments"  ON storage.objects;
DROP POLICY IF EXISTS "auth_can_read_rfq_attachments"    ON storage.objects;
DROP POLICY IF EXISTS "auth_can_delete_rfq_attachments"  ON storage.objects;

-- Anyone (form submitter) can upload
CREATE POLICY "anon_can_upload_rfq_attachments"
  ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'rfq-attachments');

-- Only authenticated admins can read/download
CREATE POLICY "auth_can_read_rfq_attachments"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (bucket_id = 'rfq-attachments');

-- Only authenticated admins can delete
CREATE POLICY "auth_can_delete_rfq_attachments"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'rfq-attachments');
