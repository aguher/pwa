"use client";

import { useEffect } from "react";
import Navbar from "ui/components/Navbar";

const APP_NAME = "next-pwa example";
const APP_DESCRIPTION = "This is an example of using next-pwa plugin";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/docs/service-worker.js")
        .then((registration) => {
          console.log("scope is: ", registration.scope);
        });
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#443987" />
        {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
        {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/docs/manifest.json" />
        <link rel="shortcut icon" href="/docs/favicon.ico" />
      </head>
      <Navbar isDocsApp />
      <body>{children}</body>
    </html>
  );
}
