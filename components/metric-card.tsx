import React from "react";
import { MetricCardData } from "@/types/dashboard";

export interface MetricCardProps {
  data: MetricCardData;
}

export function MetricCard({ data }: MetricCardProps) {
  const isPositive = data.changeType === "positive";
  const isNegative = data.changeType === "negative";

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {data.label}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
              : isNegative
              ? "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400"
              : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          {data.change}
        </span>
      </div>

      <div className="mt-3">
        <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {data.value}
        </div>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          {data.period} &middot; {data.description}
        </p>
      </div>
    </div>
  );
}
