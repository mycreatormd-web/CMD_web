import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorMD - Medical Content Acceleration System",
  description: "Turn medical knowledge into authority, opportunities, impact, and influence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
