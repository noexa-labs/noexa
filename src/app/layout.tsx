import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTop } from "./ScrollToTop";

export const metadata: Metadata = {
  title: "Noexa Labs",
  description: "Software lab building products that last — data infrastructure, web3, and beyond.",
  icons: { icon: "/favicon.svg" },
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
