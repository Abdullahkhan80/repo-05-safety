import { MetricCardData } from "@/types/dashboard";

export const MOCK_METRICS: MetricCardData[] = [
  {
    id: "metric-revenue",
    label: "Total Revenue",
    value: "$1,284,500",
    change: "+14.2%",
    changeType: "positive",
    period: "vs last quarter",
    description: "Gross billings processed across all regional subsidiaries",
  },
  {
    id: "metric-orders",
    label: "Active Subscriptions",
    value: "8,942",
    change: "+8.6%",
    changeType: "positive",
    period: "vs last month",
    description: "Paid business accounts currently active on the platform",
  },
  {
    id: "metric-churn",
    label: "Customer Churn",
    value: "1.42%",
    change: "-0.3%",
    changeType: "positive",
    period: "vs last month",
    description: "Monthly percentage of voluntary account cancellations",
  },
  {
    id: "metric-sla",
    label: "API SLA Uptime",
    value: "99.98%",
    change: "0.0%",
    changeType: "neutral",
    period: "rolling 30d",
    description: "Operational availability of core services and gateways",
  },
];
