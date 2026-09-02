import React from "react";

export interface LegacyBadgeProps {
  label?: string;
  variant?: "legacy" | "active" | "archived" | "notice";
  className?: string;
}

export function LegacyBadge({
  label = "Legacy V1",
  variant = "legacy",
  className = "",
}: LegacyBadgeProps) {
  const getStyles = () => {
    switch (variant) {
      case "legacy":
        return "bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800";
      case "archived":
        return "bg-zinc-100 text-zinc-600 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700";
      case "notice":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800";
      case "active":
      default:
        return "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getStyles()} ${className}`}
    >
      {label}
    </span>
  );
}
