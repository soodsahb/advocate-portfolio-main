import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // Removed dashboard from disallow list since page no longer exists
    },
    sitemap: "https://advocateabhimanukumar.com/sitemap.xml",
  }
}
