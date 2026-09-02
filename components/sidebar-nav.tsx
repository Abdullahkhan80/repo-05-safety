import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export interface SidebarNavProps {
  currentPath?: string;
}

export function SidebarNav({ currentPath = "/" }: SidebarNavProps) {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50 shrink-0">
      <div className="mb-6 px-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Navigation
        </h3>
      </div>
      <nav className="space-y-1">
        {NAV_LINKS.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 font-semibold"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
              }`}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs text-zinc-500 dark:text-zinc-400">
        <div className="font-medium text-zinc-800 dark:text-zinc-200 mb-1">
          System Environment
        </div>
        <div>Engine: Next.js App Router</div>
        <div>Status: Operational</div>
      </div>
    </aside>
  );
}
