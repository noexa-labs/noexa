import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noexa Labs",
  description: "Software lab building products that last — data infrastructure, web3, and beyond.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);})();` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
