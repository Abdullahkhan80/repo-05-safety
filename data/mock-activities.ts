import { ActivityItemData } from "@/types/dashboard";

export const MOCK_RECENT_ACTIVITIES: ActivityItemData[] = [
  {
    id: "act-101",
    title: "Production Release v3.4.1",
    description: "Automated container deployment completed with zero downtime",
    timestamp: new Date(Date.now() - 1000 * 60 * 18).toISOString(), // 18m ago
    actor: {
      name: "Sarah Jenkins",
      email: "sarah.j@apexoperations.internal",
    },
    status: "completed",
    category: "deployment",
    metadata: { commit: "a7c29ef", region: "us-east-1" },
  },
  {
    id: "act-102",
    title: "Enterprise Invoice #8921 Settled",
    description: "Received payment of $42,500 from Globex Industries via ACH",
    timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString(), // 55m ago
    actor: {
      name: "Marcus Vance",
      email: "marcus.v@apexoperations.internal",
    },
    status: "completed",
    category: "billing",
    metadata: { invoiceId: "INV-8921", amount: 42500 },
  },
  {
    id: "act-103",
    title: "API Token Rotation Warning",
    description: "Key for partner webhook integration will expire in 48 hours",
    timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString(), // 2h 20m ago
    actor: {
      name: "Security Daemon",
      email: "sec-ops@apexoperations.internal",
    },
    status: "pending",
    category: "security",
    metadata: { service: "legacy-partner-webhook", daysRemaining: 2 },
  },
  {
    id: "act-104",
    title: "Quarterly Access Audit Completed",
    description: "Reviewed 142 employee accounts and revoked 3 deprecated roles",
    timestamp: new Date(Date.now() - 1000 * 60 * 320).toISOString(), // ~5h ago
    actor: {
      name: "Elena Rostova",
      email: "elena.r@apexoperations.internal",
    },
    status: "completed",
    category: "team",
    metadata: { revokedCount: 3, auditedTotal: 142 },
  },
  {
    id: "act-105",
    title: "Old Database Replication Sync",
    description: "Synchronized historical replica with legacy read pool",
    timestamp: new Date(Date.now() - 1000 * 60 * 600).toISOString(), // 10h ago
    actor: {
      name: "Database Backup Job",
      email: "db-admin@apexoperations.internal",
    },
    status: "completed",
    category: "system",
    metadata: { target: "replica-old-east", durationSec: 145 },
  },
];
