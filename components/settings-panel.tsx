"use client";

import React, { useState } from "react";
import { UserProfile } from "@/types/dashboard";

export interface SettingsPanelProps {
  initialPreferences: UserProfile["preferences"];
}

export function SettingsPanel({ initialPreferences }: SettingsPanelProps) {
  const [preferences, setPreferences] = useState(initialPreferences);
  const [saved, setSaved] = useState(false);

  const toggleNotifications = () => {
    setPreferences((prev) => ({
      ...prev,
      notificationsEnabled: !prev.notificationsEnabled,
    }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleDensity = () => {
    setPreferences((prev) => ({
      ...prev,
      compactDensity: !prev.compactDensity,
    }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Console Preferences
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Customize display and update parameters
          </p>
        </div>
        {saved && (
          <span className="text-xs text-emerald-600 font-medium">Saved</span>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Notification Stream
            </div>
            <div className="text-xs text-zinc-500">
              Display real-time security and billing notices
            </div>
          </div>
          <button
            type="button"
            onClick={toggleNotifications}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors cursor-pointer ${
              preferences.notificationsEnabled
                ? "bg-indigo-600 text-white"
                : "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
            }`}
          >
            {preferences.notificationsEnabled ? "Enabled" : "Disabled"}
          </button>
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Compact Table Density
            </div>
            <div className="text-xs text-zinc-500">
              Condense list rows for high-volume monitoring
            </div>
          </div>
          <button
            type="button"
            onClick={toggleDensity}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors cursor-pointer ${
              preferences.compactDensity
                ? "bg-indigo-600 text-white"
                : "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
            }`}
          >
            {preferences.compactDensity ? "Compact" : "Normal"}
          </button>
        </div>
      </div>
    </div>
  );
}
