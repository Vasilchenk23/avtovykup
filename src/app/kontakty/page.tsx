import type { Metadata } from "next";
import { Clock3, MapPin, Phone, Send } from "lucide-react";
import BackToHomeLink from "../../components/BackToHomeLink";
import CarEvaluationForm from "../../components/CarEvaluationForm";
import { PHONE_DISPLAY, PHONE_HREF, TELEGRAM_URL } from "../../data/contact";

export const metadata: Metadata = {
  title: "Контакти АвтоВикуп Харків",
  description: "Контакти термінового автовикупу у Харкові: адреса, телефони, карта та форма оцінки.",
};

export default function ContactsPage() {
  return (
    <main className="bg-slate-950 pt-28 text-white sm:pt-36">
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <BackToHomeLink />
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Зв&apos;язок</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Контакти</h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <MapPin className="size-5 text-orange-400" />
                <h2 className="mt-3 font-bold">Адреса</h2>
                <p className="mt-1 text-sm text-slate-400">Харків, вул. Весніна, 2А</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <Phone className="size-5 text-orange-400" />
                <h2 className="mt-3 font-bold">Телефон</h2>
                <a href={PHONE_HREF} className="mt-1 block text-sm text-slate-400 hover:text-orange-400">
                  {PHONE_DISPLAY}
                </a>
              </article>
              <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <Clock3 className="size-5 text-orange-400" />
                <h2 className="mt-3 font-bold">Графік роботи</h2>
                <p className="mt-1 text-sm text-slate-400">Щодня, цілодобово 24/7</p>
              </article>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-orange-400/50"
              >
                <Send className="size-5 text-orange-400" />
                <h2 className="mt-3 font-bold">Написати в Telegram</h2>
                <p className="mt-1 text-sm text-slate-400">@danilgichko</p>
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <iframe
                title="Карта: Харків, вул. Весніна, 2А"
                src="https://www.google.com/maps?q=Харків,+вул.+Весніна,+2А&output=embed"
                className="min-h-96 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <CarEvaluationForm title="Замовити оцінку авто" />
        </div>
      </section>
    </main>
  );
}
