import React from "react";
import { UserService } from "@/services/user-service";
import { MetricsService } from "@/services/metrics-service";
import { ActivityService } from "@/services/activity-service";
import { DashboardHeader } from "@/components/dashboard-header";
import { SidebarNav } from "@/components/sidebar-nav";
import { SummaryCards } from "@/components/summary-cards";
import { RecentActivity } from "@/components/recent-activity";
import { QuickActions } from "@/components/quick-actions";
import { SettingsPanel } from "@/components/settings-panel";
import { SystemBanner } from "@/components/system-banner";

export default async function HomePage() {
  const [user, metrics, activities] = await Promise.all([
    UserService.getCurrentUser(),
    MetricsService.getSummaryMetrics(),
    ActivityService.getRecentActivities({ limit: 5 }),
  ]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <DashboardHeader user={user} />

      <div className="flex flex-1 w-full max-w-7xl mx-auto">
        <SidebarNav currentPath="/" />

        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Main Dashboard Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Operations Dashboard
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Overview of enterprise service metrics, live transactions, and team activities.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-time sync active</span>
            </div>
          </div>

          {/* System Notification Banner */}
          <SystemBanner />

          {/* Metric Summary Cards */}
          <SummaryCards metrics={metrics} />

          {/* Main Content Grid: Recent Activity & Quick Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity section - spans 2 columns */}
            <div className="lg:col-span-2">
              <RecentActivity activities={activities} />
            </div>

            {/* Sidebar Controls: Quick Actions & Preferences */}
            <div className="space-y-6">
              <QuickActions />
              <SettingsPanel initialPreferences={user.preferences} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
