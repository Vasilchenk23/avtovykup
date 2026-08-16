import type { MetadataRoute } from "next";
import { blogPosts } from "../data/blogPosts";
import { SITE_URL } from "../data/seo";

const servicePaths = [
  "/posluhy",
  "/posluhy/terminovyy-vykup",
  "/posluhy/vykup-pislya-dtp",
  "/posluhy/vykup-na-rozbyrannya",
  "/posluhy/vykup-nerozmytnenykh",
  "/posluhy/vykup-za-hotivku",
  "/posluhy/vykup-z-probihom",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: generatedAt,
      changeFrequency: "daily",
      priority: 1,
    },
    ...servicePaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: generatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/blog`,
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...["/chomu-my", "/faq", "/kontakty", "/privacy"].map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: generatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
