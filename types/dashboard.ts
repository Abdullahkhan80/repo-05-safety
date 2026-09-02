export type ActivityStatus = "completed" | "in_progress" | "pending" | "failed";

export type ActivityCategory = "billing" | "security" | "team" | "system" | "deployment";

export interface ActivityItemData {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  actor: {
    name: string;
    email: string;
    avatar?: string;
  };
  status: ActivityStatus;
  category: ActivityCategory;
  metadata?: Record<string, string | number | boolean>;
}

export interface MetricCardData {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  period: string;
  description: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "analyst" | "viewer";
  department: string;
  preferences: {
    theme: "light" | "dark" | "system";
    notificationsEnabled: boolean;
    compactDensity: boolean;
    autoRefreshIntervalSec: number;
  };
}

export interface DashboardOverviewData {
  companyName: string;
  environment: string;
  fiscalQuarter: string;
  metrics: MetricCardData[];
  recentActivities: ActivityItemData[];
  systemStatus: {
    healthy: boolean;
    lastSynced: string;
    uptimePercentage: number;
  };
}
