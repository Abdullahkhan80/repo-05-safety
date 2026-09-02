import React from "react";
import { MetricCardData } from "@/types/dashboard";
import { MetricCard } from "./metric-card";

export interface SummaryCardsProps {
  metrics: MetricCardData[];
}

export function SummaryCards({ metrics }: SummaryCardsProps) {
  return (
    <section aria-labelledby="summary-heading" className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2
            id="summary-heading"
            className="text-base font-semibold text-zinc-900 dark:text-zinc-100"
          >
            Executive Summary
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Real-time business performance indicators
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} data={metric} />
        ))}
      </div>
    </section>
  );
}
