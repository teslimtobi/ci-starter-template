import { describe, expect, it } from "vitest";
import { getHealth } from "./health";

describe("getHealth", () => {
  it("reports the app as ok", () => {
    expect(getHealth().status).toBe("ok");
  });

  it("stamps the time it was checked", () => {
    const now = new Date("2026-11-19T09:00:00Z");
    expect(getHealth(now).timestamp).toBe("2026-11-19T09:00:00.000Z");
  });
});
