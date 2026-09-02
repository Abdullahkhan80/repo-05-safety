import React from "react";
import { ActivityItemData } from "@/types/dashboard";
import { formatRelativeTime } from "@/lib/formatters";

export interface ActivityItemProps {
  activity: ActivityItemData;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const getStatusBadge = () => {
    switch (activity.status) {
      case "completed":
        return (
          <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-950/40 dark:text-emerald-400">
            Completed
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-950/40 dark:text-blue-400">
            In Progress
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-950/40 dark:text-amber-400">
            Pending
          </span>
        );
      case "failed":
        return (
          <span className="inline-flex items-center rounded-md bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-600/20 dark:bg-rose-950/40 dark:text-rose-400">
            Failed
          </span>
        );
    }
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 px-4 rounded-lg bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 transition-colors">
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-medium text-xs text-zinc-700 dark:text-zinc-300 shrink-0">
          {activity.actor.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {activity.title}
            </p>
            {activity.title.toLowerCase().includes("old") && (
              <span className="text-[10px] uppercase font-mono px-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                legacy
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {activity.description}
          </p>
          <div className="flex items-center gap-2 mt-1 text-[11px] text-zinc-400 dark:text-zinc-500">
            <span>By {activity.actor.name}</span>
            <span>&middot;</span>
            <span>{formatRelativeTime(activity.timestamp)}</span>
          </div>
        </div>
      </div>
      <div className="self-start sm:self-center shrink-0">
        {getStatusBadge()}
      </div>
    </li>
  );
}
