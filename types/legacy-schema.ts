/**
 * Legacy schema definitions maintained for backwards compatibility with
 * external legacy ERP connectors and v1 data sync payloads.
 */

export interface LegacyAuditRecord {
  record_id: number;
  old_identifier: string;
  source_subsystem: string;
  created_at_epoch: number;
  raw_payload: string;
  is_migrated: boolean;
}

export interface LegacyMetricRecord {
  stat_code: string;
  quarter_code: string;
  old_val: number;
  new_val?: number;
  verified_by?: string;
}

export interface LegacySystemNotice {
  notice_id: string;
  effective_date: string;
  channel: "email" | "in_app" | "legacy_webhook";
  body: string;
  dismissible: boolean;
}
