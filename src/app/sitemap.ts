import type { MetadataRoute } from "next";

const routes = [
  "",
  "/our-product",
  "/why-trust-us",
  "/our-team",
  "/for-partners",
  "/terms-and-conditions",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.curehub.eu";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
