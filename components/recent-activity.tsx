import React from "react";
import { ActivityItemData } from "@/types/dashboard";
import { ActivityItem } from "./activity-item";

export interface RecentActivityProps {
  activities: ActivityItemData[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <section
      aria-labelledby="recent-activity-heading"
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h2
            id="recent-activity-heading"
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
          >
            Recent Activity
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Real-time audit log of operational and system events
          </p>
        </div>
        <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full dark:bg-zinc-800 dark:text-zinc-400">
          {activities.length} events logged
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </section>
  );
}
