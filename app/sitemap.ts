import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/portfolio";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about/",
    "/projects/",
    "/contact/",
    "/experience/",
    "/technologies/",
    "/open-source/",
    "/lab/",
    ...projects.map((project) => `/projects/${project.slug}/`),
  ].map((path) => ({ url: site.url + path }));
}
