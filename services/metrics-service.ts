import { MetricCardData } from "@/types/dashboard";
import { MOCK_METRICS } from "@/data/mock-metrics";
import { legacyCache } from "@/lib/legacy-cache";

export class MetricsService {
  private static cacheKey = "dashboard_metrics_summary";

  public static async getSummaryMetrics(): Promise<MetricCardData[]> {
    const cached = legacyCache.get<MetricCardData[]>(this.cacheKey);
    if (cached) {
      return cached;
    }

    // Return metrics
    legacyCache.set(this.cacheKey, MOCK_METRICS, 120);
    return MOCK_METRICS;
  }

  public static async getMetricById(id: string): Promise<MetricCardData | null> {
    const metrics = await this.getSummaryMetrics();
    return metrics.find((m) => m.id === id) ?? null;
  }
}
