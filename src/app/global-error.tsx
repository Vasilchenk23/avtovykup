"use client";

import { Home, PhoneCall, RotateCcw, ServerCrash } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/contact";
import "./globals.css";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="uk" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 text-white">
        <title>Помилка сервера — АвтоВикуп Харків</title>
        <main className="relative isolate flex min-h-screen items-center overflow-hidden px-4 py-16 text-center sm:px-6">
          <div className="absolute left-1/2 top-1/2 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />
          <div className="mx-auto w-full max-w-2xl">
            <div className="mx-auto flex size-28 items-center justify-center rounded-3xl border border-red-400/20 bg-slate-900 text-red-400 shadow-2xl shadow-red-950/30">
              <ServerCrash className="size-12" strokeWidth={1.7} />
            </div>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.35em] text-red-400">Системна помилка</p>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Сайт тимчасово недоступний</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Ми вже знаємо про проблему. Спробуйте перезавантажити сайт — зазвичай це займає лише кілька секунд.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => retry()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-orange-400"
              >
                <RotateCcw className="size-4" /> Перезавантажити
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
              <PhoneCall className="size-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
