"use client";

import React, { useState } from "react";

export function QuickActions() {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAction = (name: string) => {
    setFeedback(`Action triggered: ${name}`);
    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          Quick Operations
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Frequently used management tasks
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => handleAction("Generate Snapshot")}
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-left"
        >
          <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
            Generate Snapshot
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">
            Export JSON
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleAction("Refresh Feeds")}
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-left"
        >
          <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
            Refresh Feeds
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">
            Sync caches
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleAction("Audit Check")}
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-left"
        >
          <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
            Run Integrity
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">
            Verify checksums
          </span>
        </button>
      </div>

      {feedback && (
        <div className="mt-3 p-2 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 rounded">
          {feedback}
        </div>
      )}
    </div>
  );
}
