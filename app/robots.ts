import type { MetadataRoute } from "next"

/** Block well-behaved crawlers from indexing the entire site (see also root layout `robots` metadata). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  }
}
