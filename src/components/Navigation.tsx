"use client";

import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";

export default function Navigation() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
    router.refresh();
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: 164,
        backgroundColor: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: "#000000",
          textDecoration: "none",
          lineHeight: "1.5em",
        }}
      >
        web demo
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "#000000",
            textDecoration: "none",
            lineHeight: "1.5em",
          }}
        >
          Home
        </Link>
        <Link
          href="/article"
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "#000000",
            textDecoration: "none",
            lineHeight: "1.5em",
          }}
        >
          Article
        </Link>
        <Link
          href="/about"
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "#000000",
            textDecoration: "none",
            lineHeight: "1.5em",
          }}
        >
          About
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: "1.5em",
              color: "#FFFFFF",
              backgroundColor: "#000000",
              border: "none",
              borderRadius: 8,
              padding: "14px 24px",
              cursor: "pointer",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            退出登录
          </button>
        ) : (
          <Link
            href="/login"
            style={{
              fontSize: 16,
              fontWeight: 500,
              lineHeight: "1.5em",
              color: "#FFFFFF",
              backgroundColor: "#000000",
              borderRadius: 8,
              padding: "14px 24px",
              textDecoration: "none",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            Button
          </Link>
        )}
      </div>
    </nav>
  );
}
