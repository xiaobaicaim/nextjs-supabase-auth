// Must be the FIRST import — polyfills WebSocket before Supabase loads
import "@/lib/polyfill-ws";

import { updateSession } from "@/lib/supabase/middleware";

export const proxy = updateSession;

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
