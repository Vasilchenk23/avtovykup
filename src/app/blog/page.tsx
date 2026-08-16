import Link from "next/link";
import { CalendarDays, Tag } from "lucide-react";
import BackToHomeLink from "../../components/BackToHomeLink";
import CarEvaluationForm from "../../components/CarEvaluationForm";
import { blogPosts } from "../../data/blogPosts";
import { createPageMetadata } from "../../data/seo";

export const metadata = createPageMetadata({
  title: "Блог про продаж та викуп авто у Харкові",
  description:
    "Практичні поради про оцінку, терміновий продаж і викуп автомобілів у Харкові та області.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 pt-28 text-white sm:pt-36">
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <BackToHomeLink />

          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Блог
            </p>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Корисно про продаж автомобіля
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Розповідаємо, як оцінити автомобіль, безпечно оформити угоду та продати авто у Харкові без зайвих витрат часу.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex min-w-0 flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="size-4 shrink-0 text-orange-500" />
                    <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
                  </p>
                  <p className="flex items-center gap-2">
                    <Tag className="size-4 shrink-0 text-orange-500" />
                    {post.category}
                  </p>
                </div>

                <h2 className="mt-5 break-words text-xl font-bold leading-snug text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex w-fit items-center pt-6 text-sm font-bold text-orange-500 transition hover:text-orange-400"
                >
                  Читати →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <CarEvaluationForm />
        </div>
      </section>
    </main>
  );
}
