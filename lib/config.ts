/**
 * Application configuration settings.
 * DO NOT expose secret keys here.
 */

export interface AppConfig {
  appName: string;
  appVersion: string;
  environment: "development" | "staging" | "production";
  apiBaseUrl: string;
  requestTimeoutMs: number;
  maxRetries: number;
  pagination: {
    defaultPageSize: number;
    maxPageSize: number;
  };
  features: {
    enableAuditLogExport: boolean;
    enableLegacyV1Bridge: boolean;
    enableRealtimeAlerts: boolean;
    enableDarkTheme: boolean;
  };
}

export const APP_CONFIG: AppConfig = {
  appName: "Apex Enterprise Dashboard",
  appVersion: "3.4.1",
  environment: "production",
  apiBaseUrl: "https://internal-api.apexoperations.local/v2",
  requestTimeoutMs: 8000,
  maxRetries: 3,
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 100,
  },
  features: {
    enableAuditLogExport: true,
    enableLegacyV1Bridge: true,
    enableRealtimeAlerts: true,
    enableDarkTheme: true,
  },
};
