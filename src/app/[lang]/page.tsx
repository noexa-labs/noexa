import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import type { Metadata } from "next";

const MONO = "ui-monospace,'Courier New',monospace";

const D = {
  en: {
    meta: { title: "Noexa Labs", desc: "Software lab building products that last — data infrastructure, web3, and beyond." },
    classification: "Labs · Jakarta",
    statement: "We build software products that are meant to last — starting with data infrastructure for Indonesia, expanding into web3 and beyond.",
    studioSpec: "Studio specifications",
    dsKeys: { products: "Products live", founded: "Founded", market: "Primary market" },
    l00: "Specifications", l01: "Product", l02: "Studio", l03: "Method",
    productDesc: "Indonesia's BPS statistics as a knowledge graph and AI search engine. 8.4 million data points across 514 regencies and cities — indexed, connected, and answerable in plain Bahasa Indonesia. Updated within 24 hours of every official BPS release.",
    specTh: "Data coverage",
    specRows: [
      { k: "Statistical tables", v: "14.094" },
      { k: "Graph nodes",        v: "93.201" },
      { k: "Provinces",          v: "34" },
      { k: "Regencies / cities", v: "514" },
      { k: "Plans",              v: "Free → Max" },
    ],
    about: [
      { text: "Noexa Labs is a small, focused software lab. We build", bold: "products across multiple domains", rest: " — starting where we know the problem well, moving where the opportunity is real." },
      { text: "Right now that means data infrastructure: taking Indonesia's most authoritative public datasets and making them structured, queryable, and AI-ready. Next is web3. We don't chase trends; we pick problems that reward infrastructure work that compounds over time." },
      { text: "Founded in Jakarta. Built on Rust, Next.js, and Postgres. Coordinates:", coord: "−6.2088, 106.8456" },
    ],
    principles: [
      { n: "01", title: "Structure before surface", desc: "Schema, protocol, pipeline — before any UI. The underlying model compounds in value over time. Interfaces are disposable; structure is not." },
      { n: "02", title: "Infrastructure-grade reliability", desc: "Rust backends, Postgres queues, sqlx. We reach for the most proven tool for the job — and only add complexity when the workload forces it." },
      { n: "03", title: "Indonesian context, global standards", desc: "We build for Indonesia first — the market, the language, the institutions. The engineering is held to the same standard as anything shipped globally. Bilingual by default." },
    ],
    tbLabels: ["Drawn by / Contact", "Entity", "Established", "Location"],
    tbTitle: "NOEXA — LABS",
    sheet: "Sheet 01 / 01",
    otherLang: "ID", otherSlug: "id",
  },
  id: {
    meta: { title: "Noexa Labs", desc: "Lab perangkat lunak yang membangun produk untuk jangka panjang — infrastruktur data, web3, dan seterusnya." },
    classification: "Labs · Jakarta",
    statement: "Kami membangun produk perangkat lunak yang dirancang untuk bertahan — dimulai dari infrastruktur data Indonesia, berkembang ke web3 dan seterusnya.",
    studioSpec: "Spesifikasi studio",
    dsKeys: { products: "Produk aktif", founded: "Didirikan", market: "Pasar utama" },
    l00: "Spesifikasi", l01: "Produk", l02: "Studio", l03: "Metode",
    productDesc: "Statistik BPS Indonesia sebagai knowledge graph dan mesin pencari berbasis AI. 8,4 juta titik data dari 514 kabupaten dan kota — terindeks, terhubung, dan bisa dijawab dalam Bahasa Indonesia. Diperbarui dalam 24 jam setelah setiap rilis resmi BPS.",
    specTh: "Cakupan data",
    specRows: [
      { k: "Tabel statistik",  v: "14.094" },
      { k: "Node graf",        v: "93.201" },
      { k: "Provinsi",         v: "34" },
      { k: "Kabupaten / kota", v: "514" },
      { k: "Paket",            v: "Gratis → Max" },
    ],
    about: [
      { text: "Noexa Labs adalah lab perangkat lunak kecil yang fokus. Kami membangun", bold: "produk di berbagai domain", rest: " — mulai dari masalah yang kami pahami dengan baik, bergerak ke mana peluangnya nyata." },
      { text: "Saat ini berarti infrastruktur data: mengambil dataset publik paling otoritatif di Indonesia dan menjadikannya terstruktur, bisa di-query, dan siap pakai oleh AI. Berikutnya adalah web3. Kami tidak mengejar tren; kami memilih masalah yang nilainya terus bertumbuh seiring waktu." },
      { text: "Didirikan di Jakarta. Dibangun dengan Rust, Next.js, dan Postgres. Koordinat:", coord: "−6.2088, 106.8456" },
    ],
    principles: [
      { n: "01", title: "Struktur sebelum tampilan", desc: "Skema, protokol, pipeline — sebelum UI apapun. Model yang mendasari produk bertumbuh nilainya seiring waktu. Antarmuka bisa diganti; struktur tidak." },
      { n: "02", title: "Keandalan tingkat infrastruktur", desc: "Backend Rust, antrean Postgres, sqlx. Kami memilih alat yang paling terbukti untuk setiap pekerjaan — dan hanya menambah kompleksitas ketika beban kerja memaksanya." },
      { n: "03", title: "Konteks Indonesia, standar global", desc: "Kami membangun untuk Indonesia terlebih dahulu — pasar, bahasa, institusinya. Rekayasa yang kami hasilkan menggunakan standar yang sama dengan produk yang dikirim secara global. Dwibahasa secara default." },
    ],
    tbLabels: ["Kontak", "Entitas", "Didirikan", "Lokasi"],
    tbTitle: "NOEXA — LABS",
    sheet: "Lembar 01 / 01",
    otherLang: "EN", otherSlug: "en",
  },
} as const;

type Lang = keyof typeof D;

const BASE_URL = "https://www.noexa.org";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = (lang as Lang) in D ? (lang as Lang) : "id";
  const t = D[l];
  const url = `${BASE_URL}/${l}`;
  const other = l === "id" ? "en" : "id";

  return {
    title: t.meta.title,
    description: t.meta.desc,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: { [other]: `${BASE_URL}/${other}` },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.desc,
      url,
      siteName: "Noexa Labs",
      locale: l === "id" ? "id_ID" : "en_US",
      alternateLocale: l === "id" ? "en_US" : "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: t.meta.title,
      description: t.meta.desc,
    },
    robots: { index: true, follow: true },
  };
}

export async function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = D[(lang as Lang) in D ? (lang as Lang) : "id"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Noexa Labs",
    url: BASE_URL,
    email: "admin@noexa.org",
    foundingDate: "2026",
    description: t.meta.desc,
    address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
    sameAs: ["https://github.com/noexa-labs"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span className="reg-bl" aria-hidden="true" />
      <span className="reg-br" aria-hidden="true" />

      {/* Coordinate strip */}
      <div className="coords-strip flex border-b border-[var(--rule)] bg-[var(--panel)] px-16 h-[22px]" aria-hidden="true">
        {["A","B","C","D","E","F"].map(c => (
          <div key={c} className="flex-1 flex items-end justify-center pb-[3px] border-r border-[var(--rule)] last:border-r-0"
            style={{ fontFamily: MONO, fontSize: ".5rem", color: "var(--rule)", letterSpacing: ".06em" }}>
            {c}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="hdr grid border-b border-[var(--rule)] items-center" style={{ gridTemplateColumns: "64px 1fr auto" }}>
        <div className="hdr-gutter border-r border-[var(--rule)] h-full flex items-center justify-center py-[.875rem]">
          <span style={{ fontFamily: MONO, fontSize: ".5rem", color: "var(--rule)", letterSpacing: ".08em" }}>HDR</span>
        </div>
        <div className="px-6 py-[.875rem] flex items-center gap-4">
          <svg width="16" height="22" viewBox="0 0 52 68" xmlns="http://www.w3.org/2000/svg" aria-label="Noexa Labs" style={{ color: "var(--ink)", flexShrink: 0 }}>
            <rect x="0" y="0" width="12" height="68" fill="currentColor"/>
            <line x1="12" y1="0" x2="40" y2="68" stroke="currentColor" strokeWidth="2"/>
            <line x1="40" y1="0" x2="40" y2="68" stroke="currentColor" strokeWidth="2"/>
            <rect x="40" y="0" width="12" height="10" fill="currentColor"/>
          </svg>
          <span style={{ fontFamily: MONO, fontSize: ".65rem", fontWeight: 600, letterSpacing: ".2em", color: "var(--ink-2)" }}>LABS</span>
          <span className="w-px h-[14px] bg-[var(--rule)] shrink-0" aria-hidden="true" />
          <span className="classification" style={{ fontFamily: MONO, fontSize: ".6rem", color: "var(--ink-3)", letterSpacing: ".1em", textTransform: "uppercase" }}>
            {t.classification}
          </span>
        </div>
        <div className="px-6 py-[.875rem] flex items-center gap-5 border-l border-[var(--rule)]">
          <a href="mailto:admin@noexa.org" style={{ fontFamily: MONO, fontSize: ".7rem", color: "var(--ink-3)" }}
            className="transition-colors hover:text-[var(--ink-2)]">
            admin@noexa.org
          </a>
          <Link href={`/${t.otherSlug}`}
            style={{ fontFamily: MONO, fontSize: ".65rem", color: "var(--ink-3)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            className="transition-colors hover:text-[var(--ink-2)]">
            {t.otherLang}
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* N.00 */}
      <div className="row-2col grid border-b border-[var(--rule)]" style={{ gridTemplateColumns: "64px 1fr" }}>
        <div className="row-gutter border-r border-[var(--rule)] flex justify-center pt-10">
          <span style={{ fontFamily: MONO, fontSize: ".55rem", color: "var(--amber)", letterSpacing: ".1em" }}>N.00</span>
        </div>
        <div className="row-body pt-10 pb-14 pl-6 pr-8">
          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.375rem)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.6, letterSpacing: "-.02em", maxWidth: 700 }}>
            {t.statement}
          </p>
          <div className="mt-10">
            <div className="mb-6 pb-3 border-b border-[var(--rule)]"
              style={{ fontFamily: MONO, fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-3)" }}>
              {t.studioSpec}
            </div>
            <div style={{ maxWidth: 640 }}>
              {[
                { k: t.dsKeys.products, v: "1",         u: "Statara" },
                { k: t.dsKeys.founded,  v: "2026",      u: "Jakarta, ID" },
                { k: t.dsKeys.market,   v: "Indonesia",  u: "" },
              ].map(({ k, v, u }) => (
                <div key={k} className="flex items-baseline gap-[.625rem] py-3 border-b border-[var(--panel)] last:border-b-0">
                  <span style={{ fontFamily: MONO, fontSize: ".75rem", color: "var(--ink-3)", whiteSpace: "nowrap", flexShrink: 0 }}>{k}</span>
                  <span className="ds-leader" aria-hidden="true" />
                  <span style={{ fontFamily: MONO, fontSize: ".875rem", fontWeight: 600, color: "var(--ink)", whiteSpace: "nowrap", flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{v}</span>
                  {u && <span style={{ fontFamily: MONO, fontSize: ".65rem", color: "var(--ink-3)", flexShrink: 0, whiteSpace: "nowrap" }}>{u}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* N.01 */}
      <div className="row-2col grid border-b border-[var(--rule)]" style={{ gridTemplateColumns: "64px 1fr" }}>
        <div className="row-gutter border-r border-[var(--rule)] flex justify-center pt-10">
          <span style={{ fontFamily: MONO, fontSize: ".55rem", color: "var(--amber)", letterSpacing: ".1em" }}>N.01</span>
        </div>
        <div className="row-body pt-10 pb-14 pl-6 pr-8">
          <div className="mb-6 pb-3 border-b border-[var(--rule)]"
            style={{ fontFamily: MONO, fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-3)" }}>
            {t.l01}
          </div>
          <div className="product-grid grid gap-12 items-start" style={{ gridTemplateColumns: "1fr 260px" }}>
            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-.04em", lineHeight: 1 }}>
                  Sta<em style={{ fontStyle: "normal", color: "var(--amber)" }}>t</em>ara
                </span>
                <span style={{ fontFamily: MONO, fontSize: ".58rem", color: "var(--amber)", letterSpacing: ".12em", textTransform: "uppercase" }}>● Live</span>
              </div>
              <p style={{ fontSize: ".9375rem", color: "var(--ink-2)", lineHeight: 1.78, marginBottom: "1.5rem", maxWidth: 420 }}>
                {t.productDesc}
              </p>
              <a href="https://statara.noexa.org" style={{ fontFamily: MONO, fontSize: ".72rem", color: "var(--amber)", letterSpacing: ".04em", borderBottom: "1px solid var(--amber)", paddingBottom: 1 }}
                className="transition-opacity hover:opacity-70">
                statara.noexa.org →
              </a>
            </div>
            <div>
              <div className="pb-[.625rem] border-b border-[var(--rule)]"
                style={{ fontFamily: MONO, fontSize: ".58rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-3)" }}>
                {t.specTh}
              </div>
              {t.specRows.map(({ k, v }) => (
                <div key={k} className="flex justify-between items-baseline py-[.625rem] border-b border-[var(--panel)] last:border-b-0"
                  style={{ fontFamily: MONO }}>
                  <span style={{ fontSize: ".72rem", color: "var(--ink-3)" }}>{k}</span>
                  <span style={{ fontSize: ".8125rem", fontWeight: 600, color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* N.02 */}
      <div className="row-2col grid border-b border-[var(--rule)]" style={{ gridTemplateColumns: "64px 1fr" }}>
        <div className="row-gutter border-r border-[var(--rule)] flex justify-center pt-10">
          <span style={{ fontFamily: MONO, fontSize: ".55rem", color: "var(--amber)", letterSpacing: ".1em" }}>N.02</span>
        </div>
        <div className="row-body pt-10 pb-14 pl-6 pr-8">
          <div className="mb-6 pb-3 border-b border-[var(--rule)]"
            style={{ fontFamily: MONO, fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-3)" }}>
            {t.l02}
          </div>
          <div style={{ maxWidth: 620 }}>
            {t.about.map((p, i) => (
              <p key={i} className="mb-[.875rem] last:mb-0" style={{ fontSize: ".9375rem", color: "var(--ink-2)", lineHeight: 1.8 }}>
                {"bold" in p ? <>{p.text} <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{p.bold}</strong>{p.rest}</> : null}
                {"coord" in p && !("bold" in p) ? <>{p.text} <span style={{ fontFamily: MONO, fontSize: ".8rem", color: "var(--ink-3)" }}>{p.coord}</span>.</> : null}
                {!("bold" in p) && !("coord" in p) ? p.text : null}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* N.03 */}
      <div className="row-2col grid border-b border-[var(--rule)]" style={{ gridTemplateColumns: "64px 1fr" }}>
        <div className="row-gutter border-r border-[var(--rule)] flex justify-center pt-10">
          <span style={{ fontFamily: MONO, fontSize: ".55rem", color: "var(--amber)", letterSpacing: ".1em" }}>N.03</span>
        </div>
        <div className="row-body pt-10 pb-14 pl-6 pr-8">
          <div className="mb-6 pb-3 border-b border-[var(--rule)]"
            style={{ fontFamily: MONO, fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-3)" }}>
            {t.l03}
          </div>
          {t.principles.map(({ n, title, desc }) => (
            <div key={n} className="principle-grid grid gap-8 items-start py-[1.375rem] border-b border-[var(--panel)] last:border-b-0" style={{ gridTemplateColumns: "160px 1fr" }}>
              <div>
                <div className="mb-[.375rem]" style={{ fontFamily: MONO, fontSize: ".6rem", color: "var(--ink-3)", letterSpacing: ".06em" }}>{n}</div>
                <div style={{ fontSize: ".9375rem", fontWeight: 600, color: "var(--ink)", letterSpacing: "-.02em", lineHeight: 1.3 }}>{title}</div>
              </div>
              <p style={{ fontSize: ".8125rem", color: "var(--ink-3)", lineHeight: 1.7, paddingTop: ".1rem" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Title block */}
      <div className="title-block grid border-t-2 border-[var(--rule)] bg-[var(--panel)]" style={{ gridTemplateColumns: "64px 1fr" }}>
        <div className="tb-gutter border-r border-[var(--rule)] flex items-center justify-center py-4">
          <span style={{ fontFamily: MONO, fontSize: ".45rem", color: "var(--rule)", letterSpacing: ".12em", writingMode: "vertical-lr", transform: "rotate(180deg)", textTransform: "uppercase" }}>
            Noexa Labs
          </span>
        </div>
        <div className="tb-cells grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className="tb-full col-span-4 px-5 py-2 border-b border-[var(--rule)] flex items-center justify-between">
            <span style={{ fontFamily: MONO, fontSize: ".7rem", color: "var(--ink)", fontWeight: 600, letterSpacing: ".04em" }}>{t.tbTitle}</span>
            <span style={{ fontFamily: MONO, fontSize: ".6rem", color: "var(--ink-3)", letterSpacing: ".04em" }}>{t.sheet}</span>
          </div>
          {[
            { label: t.tbLabels[0], val: "admin@noexa.org" },
            { label: t.tbLabels[1], val: "Noexa Labs" },
            { label: t.tbLabels[2], val: "2026" },
            { label: t.tbLabels[3], val: "Jakarta, ID" },
          ].map(({ label, val }, i) => (
            <div key={label} className={`px-5 py-[.875rem] ${i < 3 ? "border-r border-[var(--rule)]" : ""}`}>
              <div className="mb-[.3rem]" style={{ fontFamily: MONO, fontSize: ".52rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)" }}>{label}</div>
              <div style={{ fontFamily: MONO, fontSize: ".78rem", color: "var(--ink-2)", fontWeight: 500 }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
