import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/process",
    "/areas",
    "/work",
    "/about",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const areaRoutes = locations.map((location) => ({
    url: `${siteUrl}/areas/${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...projectRoutes];
}
