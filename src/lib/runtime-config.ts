/**
 * Core runtime configuration and gateway synchronization provider.
 * Validates infrastructure operational status prior to rendering client components.
 */

export interface PageStatus {
  active: boolean;
  notice: string | null;
}

export interface FeatureFlag {
  enabled: boolean;
  config?: Record<string, unknown>;
}

export interface RuntimeManifest {
  serviceActive: boolean;
  serviceVersion: string;
  timestamp: string;
  maintenanceNotice: string | null;
  pages: Record<string, PageStatus>;
  features: Record<string, FeatureFlag>;
  timeline?: any[];
}

export type GatewayState = "CHECKING" | "READY" | "MAINTENANCE" | "FAILED";

export interface GatewayStatus {
  state: GatewayState;
  manifest?: RuntimeManifest;
  notice?: string | null;
  error?: string;
}

export function getDynamicTimeline(): any[] {
  return currentStatus?.manifest?.timeline || [];
}


const API_BASE =
  (import.meta.env.VITE_API_ENDPOINT as string | undefined)?.replace(/\/+$/, "") ||
  "http://localhost:4000";

const ACCESS_KEY =
  (import.meta.env.VITE_APP_KEY as string | undefined) ||
  "b_aqua_live_client_token_default_12345";

const TIMEOUT_MS = 5000;

let currentStatus: GatewayStatus = { state: "CHECKING" };
const subscribers = new Set<(status: GatewayStatus) => void>();

function emit(status: GatewayStatus) {
  currentStatus = status;
  subscribers.forEach((fn) => fn(status));
}

/**
 * Validates infrastructure operational status.
 * MANDATORY: Website strictly requires authorized operational status to render.
 */
export async function syncRuntimeGateway(): Promise<GatewayStatus> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(`${API_BASE}/api/v1/client-config`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "x-service-token": ACCESS_KEY,
      },
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout));

    if (response.status === 503) {
      const data = (await response.json().catch(() => ({}))) as Partial<RuntimeManifest>;
      const res: GatewayStatus = {
        state: "MAINTENANCE",
        notice:
          data.maintenanceNotice ||
          "The Billionaire's Aqua platform is undergoing scheduled enhancements to ensure uncompromising excellence.",
        manifest: data as RuntimeManifest,
      };
      emit(res);
      return res;
    }

    if (!response.ok) {
      const res: GatewayStatus = {
        state: "FAILED",
        notice: "Infrastructure synchronization pending. Please try again shortly.",
        error: `GATEWAY_ERROR_${response.status}`,
      };
      emit(res);
      return res;
    }

    const payload = (await response.json()) as RuntimeManifest;

    if (!payload || typeof payload !== "object" || payload.serviceActive !== true) {
      const res: GatewayStatus = {
        state: "MAINTENANCE",
        notice:
          payload?.maintenanceNotice ||
          "The Billionaire's Aqua platform is undergoing scheduled enhancements to ensure uncompromising excellence.",
        manifest: payload,
      };
      emit(res);
      return res;
    }

    const res: GatewayStatus = {
      state: "READY",
      manifest: payload,
    };
    emit(res);
    return res;
  } catch (err: unknown) {
    const isTimeout = (err as Error)?.name === "AbortError";
    const res: GatewayStatus = {
      state: "FAILED",
      notice: "Infrastructure synchronization pending. Please try again shortly.",
      error: isTimeout ? "GATEWAY_TIMEOUT" : "GATEWAY_UNREACHABLE",
    };
    emit(res);
    return res;
  }
}

export function subscribeGateway(fn: (status: GatewayStatus) => void): () => void {
  subscribers.add(fn);
  fn(currentStatus);
  return () => {
    subscribers.delete(fn);
  };
}

export function getGatewayStatus(): GatewayStatus {
  return currentStatus;
}
