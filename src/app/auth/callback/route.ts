import { NextResponse } from "next/server";

// Minimal callback — exchange happens client-side to avoid server-side ws dependency
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  // Redirect to dashboard, code exchange handled by Supabase client-side
  if (code) {
    return NextResponse.redirect(
      new URL(`/dashboard?code=${code}`, request.url)
    );
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
