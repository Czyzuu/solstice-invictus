import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flare Statistics",
  description: "Flare Statistics Display",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden', position: 'fixed', top: 0, left: 0 }}>
      <body style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden', position: 'fixed', top: 0, left: 0 }}>{children}</body>
    </html>
  );
}

