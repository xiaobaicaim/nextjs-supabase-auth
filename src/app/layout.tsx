import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "web demo",
  description: "A clean, minimal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#FFFFFF",
          color: "#000000",
        }}
      >
        {children}
      </body>
    </html>
  );
}
