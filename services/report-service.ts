import { ARCHIVED_AUDIT_LOGS } from "@/data/archived-records";
import { MOCK_RECENT_ACTIVITIES } from "@/data/mock-activities";

export type ReportFormat = "csv_v2" | "json" | "legacy_tsv";

export interface ReportExportResult {
  filename: string;
  rowCount: number;
  format: ReportFormat;
  generatedAt: string;
}

export class ReportService {
  public static async generateActivityReport(format: ReportFormat = "csv_v2"): Promise<ReportExportResult> {
    const records = [...MOCK_RECENT_ACTIVITIES];
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const extension = format === "legacy_tsv" ? "tsv" : format === "json" ? "json" : "csv";

    return {
      filename: `activity-report-${timestamp}.${extension}`,
      rowCount: records.length,
      format,
      generatedAt: new Date().toISOString(),
    };
  }

  public static async getArchivedAuditSummary(): Promise<{ totalArchived: number; oldestEpoch: number }> {
    const oldest = ARCHIVED_AUDIT_LOGS.reduce((min, cur) => cur.created_at_epoch < min ? cur.created_at_epoch : min, Infinity);
    return {
      totalArchived: ARCHIVED_AUDIT_LOGS.length,
      oldestEpoch: oldest === Infinity ? 0 : oldest,
    };
  }
}
