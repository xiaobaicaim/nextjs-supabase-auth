"use client";

import { useEffect, useState, Suspense } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import Navigation from "@/components/Navigation";

function DashboardContent() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      supabase.auth.exchangeCodeForSession(code).then(() => {
        supabase.auth.getUser().then(({ data }) => {
          if (!data.user) router.push("/login");
          else { setUser(data.user); setLoading(false); }
        });
      });
    } else {
      supabase.auth.getUser().then(({ data }) => {
        if (!data.user) router.push("/login");
        else { setUser(data.user); setLoading(false); }
      });
    }
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#FFFFFF", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#828282", fontSize: 20 }}>加载中...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFFFFF", fontFamily: "Inter, sans-serif" }}>
      <Navigation />
      <div style={{ display: "flex", justifyContent: "center", padding: "80px 20px" }}>
        <div style={{ width: "100%", maxWidth: 440, textAlign: "center", border: "1px solid #E6E6E6", borderRadius: 12, padding: 48 }}>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 40, color: "#000000", margin: "0 0 16px 0" }}>登录成功</h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 20, color: "#828282", margin: "0 0 32px 0" }}>当前登录邮箱：{user?.email}</p>
          <button onClick={handleLogout} style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 20, lineHeight: "1.5em", color: "#FFFFFF", backgroundColor: "#000000", border: "none", borderRadius: 8, padding: "16px 32px", cursor: "pointer", boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>退出登录</button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}><p style={{ color: "#828282", fontSize: 20 }}>加载中...</p></div>}>
      <DashboardContent />
    </Suspense>
  );
}
