/**
 * Stub analytics module — will be replaced with full implementation later.
 */
import { env } from "@/lib/env";

export type AnalyticsEvent = { name: string; props: Record<string, unknown> };

export function track(_event: AnalyticsEvent): void {
  if (env.DEV) {
    console.info("[Analytics]", _event.name, _event.props);
  }
}

export function getSessionEvents() {
  return [];
}

export function initOutboundLinkTracking(): void {
  // No-op stub
}
