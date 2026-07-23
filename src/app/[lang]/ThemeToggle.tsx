"use client";
export function ThemeToggle() {
  return (
    <button
      onClick={() => {
        const r = document.documentElement;
        r.setAttribute("data-theme", r.getAttribute("data-theme") === "dark" ? "light" : "dark");
      }}
      style={{ fontFamily: "ui-monospace,'Courier New',monospace", fontSize: ".65rem", color: "var(--rule)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
      className="transition-colors hover:text-[var(--ink-3)]"
    >
      ☀/☾
    </button>
  );
}
