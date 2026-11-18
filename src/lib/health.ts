export type HealthStatus = {
  status: "ok";
  timestamp: string;
};

// Returns the app's health. Uptime monitors call /api/health, which uses this.
export function getHealth(now: Date = new Date()): HealthStatus {
  return { status: "ok", timestamp: now.toISOString() };
}
