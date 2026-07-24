import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTop } from "./ScrollToTop";

export const metadata: Metadata = {
  title: "Noexa Labs",
  description: "Software lab building products that last — data infrastructure, web3, and beyond.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon-192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);})();` }} />
      </head>
      <body><ScrollToTop />{children}</body>
    </html>
  );
}
