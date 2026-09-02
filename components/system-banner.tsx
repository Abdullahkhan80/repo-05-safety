import React from "react";
import { LegacyBadge } from "./legacy-badge";

export interface SystemBannerProps {
  title?: string;
  description?: string;
}

export function SystemBanner({
  title = "Notice: Legacy V1 Data Migration in Progress",
  description = "Archived audit logs prior to Q3 have been transferred to the cold storage vault. Old export endpoints will be maintained until complete deprecation.",
}: SystemBannerProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-200">
      <div className="flex items-start sm:items-center gap-3">
        <LegacyBadge label="Notice" variant="notice" />
        <div>
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-xs text-amber-800/80 dark:text-amber-300/80 mt-0.5">
            {description}
          </p>
        </div>
      </div>
      <div className="self-end sm:self-center shrink-0">
        <span className="text-xs font-mono bg-amber-100 text-amber-900 px-2 py-1 rounded dark:bg-amber-900/40 dark:text-amber-200">
          Ref: RFC-082
        </span>
      </div>
    </div>
  );
}
