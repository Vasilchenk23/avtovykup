"use client";

import Link from "next/link";
import { Home, PhoneCall, RotateCcw, ServerCrash } from "lucide-react";
import { useEffect } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/contact";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Page rendering error:", error);
  }, [error]);

  return (
    <main className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-slate-950 px-4 pb-20 pt-32 text-white sm:px-6 sm:pt-40 lg:px-8">
      <div className="absolute left-1/2 top-1/2 -z-20 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />
      <div className="mx-auto w-full max-w-3xl text-center">
        <div className="mx-auto flex size-28 items-center justify-center rounded-3xl border border-red-400/20 bg-slate-900/80 text-red-400 shadow-2xl shadow-red-950/30 sm:size-32">
          <ServerCrash className="size-12 sm:size-14" strokeWidth={1.7} />
        </div>

        <p className="mt-8 text-sm font-black uppercase tracking-[0.35em] text-red-400">Помилка 500</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
          Щось пішло не за планом
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          Сервер тимчасово не зміг завантажити сторінку. Ваші дії безпечні — спробуйте оновити сторінку або поверніться трохи пізніше.
        </p>

        {error.digest && (
          <p className="mx-auto mt-4 w-fit rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 font-mono text-xs text-slate-500">
            Код помилки: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-orange-400"
          >
            <RotateCcw className="size-4" /> Спробувати ще раз
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:border-orange-400/60 hover:text-orange-300"
          >
            <Home className="size-4" /> На головну
          </Link>
        </div>

        <a
          href={PHONE_HREF}
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-orange-400"
        >
          <PhoneCall className="size-4" /> Терміново? Зателефонуйте нам: {PHONE_DISPLAY}
        </a>
      </div>
    </main>
  );
}
