import { NextRequest } from "next/server";

import { routeMiddleware } from "@/core/middleware/route";

export function middleware(request: NextRequest) {
  return routeMiddleware(request);
}
