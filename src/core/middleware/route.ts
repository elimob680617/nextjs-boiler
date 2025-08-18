// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function routeMiddleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Example: Redirect from root to a specific dashboard
  if (url.pathname === "/") {
    url.pathname = "/home"; // Or any other desired default path
    return NextResponse.redirect(url);
  }

  // Example: Rewrite for a cleaner URL
  // if (url.pathname === '/old-path') {
  //   url.pathname = '/new-path';
  //   return NextResponse.rewrite(url);
  // }

  return NextResponse.next(); // Proceed with the request if no redirect/rewrite
}

// Optional: Define matcher to run middleware on specific paths
export const config = {
  matcher: ["/"], // Apply middleware only to the root path
};
