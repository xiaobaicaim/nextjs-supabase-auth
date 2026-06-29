"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          height: 164,
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
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
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
        </div>
      </nav>

      {/* Login form section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "80px 80px 120px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 440 }}>
          {/* Title */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 64,
              letterSpacing: "-0.02em",
              color: "#000000",
              margin: "0 0 16px 0",
            }}
          >
            Sign in
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 24,
              lineHeight: "1.5em",
              color: "rgba(0, 0, 0, 0.75)",
              margin: "0 0 48px 0",
            }}
          >
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleLogin}>
            {/* Email field */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 24,
              }}
            >
              <label
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.5em",
                  color: "#000000",
                }}
              >
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email@example.com"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.5em",
                  color: "#000000",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0E0E0",
                  borderRadius: 8,
                  padding: "12px 16px",
                  outline: "none",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                }}
              />
            </div>

            {/* Password field */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 24,
              }}
            >
              <label
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.5em",
                  color: "#000000",
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.5em",
                  color: "#000000",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0E0E0",
                  borderRadius: 8,
                  padding: "12px 16px",
                  outline: "none",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  backgroundColor: "#FEF2F2",
                  borderRadius: 8,
                  padding: "12px 16px",
                  marginBottom: 24,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.5em",
                  color: "#DC2626",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: "1.5em",
                color: "#FFFFFF",
                backgroundColor: "#000000",
                border: "none",
                borderRadius: 8,
                padding: "20px 32px",
                width: "100%",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.5 : 1,
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "1.5em",
              color: "#828282",
              textAlign: "center",
              marginTop: 32,
            }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              style={{
                color: "#000000",
                fontWeight: 500,
                textDecoration: "underline",
              }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
