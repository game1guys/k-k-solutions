import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "",
  "/services",
  "/portfolio",
  "/services/web-development",
  "/services/app-development",
  "/services/digital-marketing",
  "/industries",
  "/tools",
  "/why-us",
  "/about",
  "/process",
  "/contact",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.85,
  }));
}
