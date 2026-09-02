import React from "react";
import { UserService } from "@/services/user-service";
import { ReportService } from "@/services/report-service";
import { SidebarNav } from "@/components/sidebar-nav";
import { DashboardHeader } from "@/components/dashboard-header";
import { LegacyBadge } from "@/components/legacy-badge";

export default async function ReportsPage() {
  const user = await UserService.getCurrentUser();
  const archivedSummary = await ReportService.getArchivedAuditSummary();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <DashboardHeader user={user} />
      <div className="flex flex-1 w-full max-w-7xl mx-auto">
        <SidebarNav currentPath="/reports" />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Audit Logs & Data Exports
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Historical activity trails and periodic business reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Active Activity Feed Export
                </h3>
                <LegacyBadge label="Active" variant="active" />
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                Export current operational records in RFC-4180 compliant CSV format.
              </p>
              <button
                type="button"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Export Current Feed (CSV)
              </button>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Archived Historical Cold Storage
                </h3>
                <LegacyBadge label="Archived" variant="archived" />
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                Contains {archivedSummary.totalArchived} migrated audit entries dating back to epoch {archivedSummary.oldestEpoch}.
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-400 mb-4">
                Old storage format preserved for regulatory compliance.
              </p>
              <button
                type="button"
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Download Archive Manifest
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
