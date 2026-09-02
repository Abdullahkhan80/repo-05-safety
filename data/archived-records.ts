import { LegacyAuditRecord } from "@/types/legacy-schema";

/**
 * Historical archived records retained for regulatory compliance and audit trails.
 */
export const ARCHIVED_AUDIT_LOGS: LegacyAuditRecord[] = [
  {
    record_id: 10001,
    old_identifier: "legacy-txn-2022-09-001",
    source_subsystem: "billing-v1",
    created_at_epoch: 1662000000,
    raw_payload: "{\"event\":\"legacy_invoice_closed\",\"amount\":12500}",
    is_migrated: true,
  },
  {
    record_id: 10002,
    old_identifier: "legacy-txn-2022-11-042",
    source_subsystem: "crm-v1-archive",
    created_at_epoch: 1667300000,
    raw_payload: "{\"event\":\"account_merged\",\"target\":\"corp-542\"}",
    is_migrated: true,
  },
  {
    record_id: 10003,
    old_identifier: "legacy-txn-2023-01-118",
    source_subsystem: "old-gateway-us-west",
    created_at_epoch: 1673400000,
    raw_payload: "{\"event\":\"gateway_cert_rotation\",\"status\":\"ok\"}",
    is_migrated: true,
  },
];
