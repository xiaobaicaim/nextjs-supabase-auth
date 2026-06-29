import { NextResponse, type NextRequest } from "next/server";

// Simple proxy with NO Supabase imports — avoids WebSocket/Node.js 18 issues on EdgeOne
export function proxy(request: NextRequest) {
  // Auth is handled client-side, middleware just passes through
  return NextResponse.next({ request });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
