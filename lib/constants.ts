export const NAV_LINKS = [
  { href: "/", label: "Overview", icon: "dashboard" },
  { href: "/reports", label: "Reports & Exports", icon: "file-text" },
  { href: "/settings", label: "Preferences", icon: "settings" },
] as const;

export const DEFAULT_TIME_ZONE = "America/New_York";

export const SYSTEM_ALERTS = [
  {
    id: "alert-1",
    level: "info",
    title: "Quarterly Audit Sync Scheduled",
    description: "Automated snapshot will occur at 02:00 UTC.",
  },
] as const;
