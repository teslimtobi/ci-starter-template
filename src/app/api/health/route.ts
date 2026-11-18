import { getHealth } from "@/lib/health";

// Route handlers run fresh on every request, so monitors see the live state of the app.
export function GET() {
  return Response.json(getHealth());
}
