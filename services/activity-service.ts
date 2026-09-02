import { ActivityItemData, ActivityStatus, ActivityCategory } from "@/types/dashboard";
import { MOCK_RECENT_ACTIVITIES } from "@/data/mock-activities";
import { legacyCache } from "@/lib/legacy-cache";

export interface ActivityFilterOptions {
  category?: ActivityCategory;
  status?: ActivityStatus;
  limit?: number;
}

export class ActivityService {
  private static cacheKey = "recent_activities_feed";

  public static async getRecentActivities(options?: ActivityFilterOptions): Promise<ActivityItemData[]> {
    const cached = legacyCache.get<ActivityItemData[]>(this.cacheKey);
    let items = cached ?? [...MOCK_RECENT_ACTIVITIES];

    if (!cached) {
      legacyCache.set(this.cacheKey, items, 60);
    }

    if (options?.category) {
      items = items.filter((item) => item.category === options.category);
    }

    if (options?.status) {
      items = items.filter((item) => item.status === options.status);
    }

    if (options?.limit && options.limit > 0) {
      items = items.slice(0, options.limit);
    }

    return items;
  }

  public static async recordActivity(activity: Omit<ActivityItemData, "id" | "timestamp">): Promise<ActivityItemData> {
    const newEntry: ActivityItemData = {
      ...activity,
      id: `act-${Date.now()}`,
      timestamp: new Date().toISOString(),
    };

    MOCK_RECENT_ACTIVITIES.unshift(newEntry);
    legacyCache.set(this.cacheKey, MOCK_RECENT_ACTIVITIES, 60);
    return newEntry;
  }
}
