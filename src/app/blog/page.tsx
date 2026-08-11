import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import CarEvaluationForm from "../../components/CarEvaluationForm";

export const metadata: Metadata = { title: "Блог про продаж та викуп авто", description: "Корисні статті про терміновий продаж, оцінку та викуп автомобілів у Харкові." };

const articles = [
  ["Як продати авто після ДТП без ремонту", "Пояснюємо, як швидко оцінити аварійний автомобіль та оформити продаж.", "/posluhy/vykup-pislya-dtp"],
  ["Що потрібно для термінового продажу авто", "Список документів і простий алгоритм продажу автомобіля за один день.", "/posluhy/terminovyy-vykup"],
  ["Як оцінити авто перед продажем", "Від чого залежить вартість машини та як отримати чесну пропозицію.", "/posluhy"],
];

export default function BlogPage() {
  return <main className="bg-slate-950 pt-28 text-white sm:pt-36"><section className="px-4 pb-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Блог</p><h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Корисно про продаж автомобіля</h1><div className="mt-10 grid gap-4 md:grid-cols-3">{articles.map(([title, text, href]) => <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"><p className="flex items-center gap-2 text-xs text-slate-500"><CalendarDays className="size-4 text-orange-400" />Поради автовласникам</p><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p><Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-400">Читати <ArrowRight className="size-4" /></Link></article>)}</div></div></section><section className="border-t border-white/5 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-md"><CarEvaluationForm /></div></section></main>;
}
