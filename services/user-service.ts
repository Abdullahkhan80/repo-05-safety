import { UserProfile } from "@/types/dashboard";
import { apiClient } from "@/lib/api-client";

export class UserService {
  private static currentUser: UserProfile = {
    id: "usr-491",
    name: "Alex Sterling",
    email: "alex.sterling@apexoperations.internal",
    role: "admin",
    department: "Executive Operations",
    preferences: {
      theme: "system",
      notificationsEnabled: true,
      compactDensity: false,
      autoRefreshIntervalSec: 60,
    },
  };

  public static async getCurrentUser(): Promise<UserProfile> {
    // Returns authenticated operator profile
    return { ...this.currentUser };
  }

  public static async updatePreferences(
    partialPreferences: Partial<UserProfile["preferences"]>
  ): Promise<UserProfile> {
    this.currentUser = {
      ...this.currentUser,
      preferences: {
        ...this.currentUser.preferences,
        ...partialPreferences,
      },
    };

    await apiClient.post("/users/preferences", this.currentUser.preferences);
    return { ...this.currentUser };
  }
}
