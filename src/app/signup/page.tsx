"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
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

      {/* Signup form section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "80px 80px 120px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 440 }}>
          {success ? (
            <>
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
                Check your email
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
                We&apos;ve sent a confirmation link to{" "}
                <strong>{email}</strong>.
              </p>
              <Link
                href="/login"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 20,
                  lineHeight: "1.5em",
                  color: "#FFFFFF",
                  backgroundColor: "#000000",
                  borderRadius: 8,
                  padding: "20px 32px",
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                Go to sign in
              </Link>
            </>
          ) : (
            <>
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
                Sign up
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
                Create your account to get started
              </p>

              <form onSubmit={handleSignup}>
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
                    placeholder="Minimum 6 characters"
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
                  {loading ? "Creating account..." : "Sign up"}
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
                Already have an account?{" "}
                <Link
                  href="/login"
                  style={{
                    color: "#000000",
                    fontWeight: 500,
                    textDecoration: "underline",
                  }}
                >
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
