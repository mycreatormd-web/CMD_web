'use client';

import "./globals.css";
import { CommunityFormProvider } from "@/app/context/CommunityFormContext";
import CommunityJoinForm from "@/app/components/CommunityJoinForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CommunityFormProvider>
          {children}
          <CommunityJoinForm />
        </CommunityFormProvider>
      </body>
    </html>
  );
}
