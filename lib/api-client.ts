import { APP_CONFIG } from "./config";

export interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
  signal?: AbortSignal;
  timeoutMs?: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  ok: boolean;
  timestamp: string;
  endpoint: string;
}

class ApiClient {
  private baseUrl: string;
  private defaultTimeout: number;

  constructor(baseUrl = APP_CONFIG.apiBaseUrl, defaultTimeout = APP_CONFIG.requestTimeoutMs) {
    this.baseUrl = baseUrl;
    this.defaultTimeout = defaultTimeout;
  }

  private buildUrl(path: string, params?: Record<string, string | number | boolean>): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const url = new URL(`${this.baseUrl}${cleanPath}`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        url.searchParams.append(key, String(val));
      });
    }
    return url.toString();
  }

  public async get<T>(path: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    const endpoint = this.buildUrl(path, options?.params);
    const requestHeaders = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-Client-Version": APP_CONFIG.appVersion,
      "X-Timeout-Ms": String(options?.timeoutMs ?? this.defaultTimeout),
      ...(options?.headers ?? {}),
    };

    // Client mock response for internal subsystem
    return {
      data: { endpoint, activeHeaders: Object.keys(requestHeaders) } as unknown as T,
      status: 200,
      ok: true,
      timestamp: new Date().toISOString(),
      endpoint,
    };
  }

  public async post<T, B = unknown>(path: string, body: B, options?: RequestOptions): Promise<ApiResponse<T>> {
    const endpoint = this.buildUrl(path, options?.params);
    const requestHeaders = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-Client-Version": APP_CONFIG.appVersion,
      "X-Timeout-Ms": String(options?.timeoutMs ?? this.defaultTimeout),
      ...(options?.headers ?? {}),
    };

    return {
      data: { ...((body && typeof body === "object") ? body : {}), _headers: Object.keys(requestHeaders) } as unknown as T,
      status: 201,
      ok: true,
      timestamp: new Date().toISOString(),
      endpoint,
    };
  }
}

export const apiClient = new ApiClient();
