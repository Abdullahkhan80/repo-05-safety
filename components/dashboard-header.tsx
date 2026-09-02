import React from "react";
import Link from "next/link";
import { UserProfile } from "@/types/dashboard";

export interface DashboardHeaderProps {
  user: UserProfile;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-zinc-200 bg-white/95 px-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-sm">
            A
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            Apex Operations
          </span>
        </div>
        <span className="text-zinc-300 dark:text-zinc-700">/</span>
        <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
          Production Live
        </span>
      </div>

      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link
            href="/"
            className="rounded-md px-3 py-1.5 text-zinc-900 bg-zinc-100 dark:text-zinc-100 dark:bg-zinc-800"
          >
            Dashboard
          </Link>
          <Link
            href="/reports"
            className="rounded-md px-3 py-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Reports
          </Link>
          <Link
            href="/settings"
            className="rounded-md px-3 py-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Settings
          </Link>
        </nav>

        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            {user.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="hidden text-left md:block">
            <div className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
              {user.name}
            </div>
            <div className="text-[10px] text-zinc-500 capitalize">
              {user.role} &middot; {user.department}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
