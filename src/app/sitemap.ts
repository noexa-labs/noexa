import type { MetadataRoute } from "next";

const BASE = "https://www.noexa.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/id`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: `${BASE}/en` } },
    },
    {
      url: `${BASE}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { id: `${BASE}/id` } },
    },
  ];
}
