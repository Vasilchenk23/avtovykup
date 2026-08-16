import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import BackToHomeLink from "@/components/BackToHomeLink";
import CarEvaluationForm from "@/components/CarEvaluationForm";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { OG_IMAGE_PATH, OG_IMAGE_URL, SITE_NAME, SITE_URL } from "@/data/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Статтю не знайдено" };
  }

  return {
    title: `${post.title} — АвтоВикуп Харків`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      locale: "uk_UA",
      siteName: SITE_NAME,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "АвтоВикуп Харків — Терміновий викуп авто за 1 годину",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: [OG_IMAGE_URL],
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: OG_IMAGE_URL,
      },
    },
    inLanguage: "uk-UA",
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 pt-28 text-white sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <BackToHomeLink />
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-bold text-slate-300 transition hover:text-orange-400"
            >
              ← Назад до блогу
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 sm:text-sm">
            <p className="flex items-center gap-2">
              <CalendarDays className="size-4 shrink-0 text-orange-500" />
              <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
            </p>
            <p className="flex items-center gap-2">
              <Tag className="size-4 shrink-0 text-orange-500" />
              {post.category}
            </p>
          </div>

          <h1 className="mt-5 break-words text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {post.description}
          </p>

          <div className="mt-10 border-t border-slate-800 pt-2">
            {post.content.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-slate-800 bg-zinc-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_28rem] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Швидкий автовикуп
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
              Бажаєте терміново продати авто? Отримайте оцінку за 5 хвилин!
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Надішліть основні дані про автомобіль — ми швидко зорієнтуємо за вартістю та зателефонуємо для уточнення деталей.
            </p>
          </div>
          <div className="w-full min-w-0">
            <CarEvaluationForm title="Оцінка авто за 5 хвилин" />
          </div>
        </div>
      </section>
    </main>
  );
}
