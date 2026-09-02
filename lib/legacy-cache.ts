/**
 * In-memory cache helper supporting legacy key formatting and modern namespaces.
 * Retained to prevent cache miss penalties during phased migration.
 */

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
  isLegacyKey?: boolean;
}

class LegacyCacheAdapter {
  private store: Map<string, CacheEntry<unknown>> = new Map();

  public set<T>(key: string, value: T, ttlSeconds = 300): void {
    const isOldFormat = key.includes("::old::") || key.startsWith("v1_");
    this.store.set(key, {
      value,
      expiresAt: Date.now() + ttlSeconds * 1000,
      isLegacyKey: isOldFormat,
    });
  }

  public get<T>(key: string): T | null {
    const entry = this.store.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }

    return entry.value as T;
  }

  public getLegacyKeys(): string[] {
    return Array.from(this.store.entries())
      .filter(([, entry]) => entry.isLegacyKey)
      .map(([k]) => k);
  }

  public clearExpired(): number {
    let cleared = 0;
    const now = Date.now();
    for (const [k, v] of this.store.entries()) {
      if (now > v.expiresAt) {
        this.store.delete(k);
        cleared++;
      }
    }
    return cleared;
  }
}

export const legacyCache = new LegacyCacheAdapter();
