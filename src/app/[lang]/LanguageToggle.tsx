"use client";
import { useRouter } from "next/navigation";

const MONO = "ui-monospace,'Courier New',monospace";

export function LanguageToggle({ slug, label }: { slug: string; label: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        window.scrollTo(0, 0);
        router.push(`/${slug}`);
      }}
      style={{ fontFamily: MONO, fontSize: ".65rem", color: "var(--ink-3)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
      className="transition-colors hover:text-[var(--ink-2)]"
    >
      {label}
    </button>
  );
}
