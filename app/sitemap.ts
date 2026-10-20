import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/programs", "/development", "/about", "/coaches", "/events", "/faq", "/contact", "/join", "/book", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : path === "/join" || path === "/programs" ? 0.9 : 0.7,
  }));
}
