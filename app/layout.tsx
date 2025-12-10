import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorMD - Medical Content Acceleration System",
  description: "Turn medical knowledge into authority, opportunities, impact, and influence. Join 500+ medical professionals building their authority online.",
  keywords: ["medical content", "creator", "medical education", "healthcare", "content creation"],
  authors: [{ name: "CreatorMD" }],
  openGraph: {
    title: "CreatorMD - Medical Content Acceleration System",
    description: "Turn medical knowledge into authority, opportunities, impact, and influence",
    type: "website",
  },
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
