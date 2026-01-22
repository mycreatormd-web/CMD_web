'use client';

import "./globals.css";
import { CommunityFormProvider } from "@/app/context/CommunityFormContext";
import CommunityJoinForm from "@/app/components/CommunityJoinForm";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Netlify Identity Widget for CMS authentication */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
      </head>
      <body>
        <CommunityFormProvider>
          {children}
          <CommunityJoinForm />
        </CommunityFormProvider>
        {/* Redirect to admin after login */}
        <Script id="netlify-identity-redirect" strategy="lazyOnload">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
