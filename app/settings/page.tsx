import React from "react";
import { UserService } from "@/services/user-service";
import { SettingsPanel } from "@/components/settings-panel";
import { SidebarNav } from "@/components/sidebar-nav";
import { DashboardHeader } from "@/components/dashboard-header";
import { APP_CONFIG } from "@/lib/config";

export default async function SettingsPage() {
  const user = await UserService.getCurrentUser();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <DashboardHeader user={user} />
      <div className="flex flex-1 w-full max-w-7xl mx-auto">
        <SidebarNav currentPath="/settings" />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              System Settings & Preferences
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Manage application runtime parameters and workspace defaults
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SettingsPanel initialPreferences={user.preferences} />

            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                System Diagnostics
              </h3>
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-zinc-800">
                  <dt className="text-zinc-500">App Name</dt>
                  <dd className="font-mono text-zinc-800 dark:text-zinc-200">{APP_CONFIG.appName}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-zinc-800">
                  <dt className="text-zinc-500">App Version</dt>
                  <dd className="font-mono text-zinc-800 dark:text-zinc-200">{APP_CONFIG.appVersion}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-zinc-800">
                  <dt className="text-zinc-500">Active Environment</dt>
                  <dd className="font-mono text-zinc-800 dark:text-zinc-200">{APP_CONFIG.environment}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-zinc-800">
                  <dt className="text-zinc-500">Legacy Bridge</dt>
                  <dd className="font-mono text-zinc-800 dark:text-zinc-200">
                    {APP_CONFIG.features.enableLegacyV1Bridge ? "Enabled" : "Disabled"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
