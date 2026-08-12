import Link from "next/link";
import { ArrowLeft, Car, Home, PhoneCall, SearchX } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/contact";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-slate-950 px-4 pb-20 pt-32 text-white sm:px-6 sm:pt-40 lg:px-8">
      <div className="absolute left-1/2 top-1/2 -z-20 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_55%)]" />

      <div className="mx-auto w-full max-w-3xl text-center">
        <div className="relative mx-auto flex size-28 items-center justify-center rounded-3xl border border-orange-500/20 bg-slate-900/80 shadow-2xl shadow-orange-950/30 sm:size-32">
          <SearchX className="size-12 text-orange-500 sm:size-14" strokeWidth={1.7} />
          <span className="absolute -right-3 -top-3 flex size-10 items-center justify-center rounded-xl bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/20">
            <Car className="size-5" />
          </span>
        </div>

        <p className="mt-8 text-sm font-black uppercase tracking-[0.35em] text-orange-500">Помилка 404</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
          Схоже, ця сторінка поїхала без нас
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          Можливо, адресу введено з помилкою або сторінку було переміщено. Поверніться на головну чи перегляньте всі послуги автовикупу.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-orange-400"
          >
            <Home className="size-4" /> На головну
          </Link>
          <Link
            href="/posluhy"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:border-orange-400/60 hover:text-orange-300"
          >
            <ArrowLeft className="size-4" /> Переглянути послуги
          </Link>
        </div>

        <a
          href={PHONE_HREF}
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-orange-400"
        >
          <PhoneCall className="size-4" /> Потрібна допомога? {PHONE_DISPLAY}
        </a>
      </div>
    </main>
  );
}
