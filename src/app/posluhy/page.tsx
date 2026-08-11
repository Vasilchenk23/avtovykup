import type { Metadata } from "next";
import Link from "next/link";
import { CarFront, CircleDollarSign, Container, Gauge, Recycle, TriangleAlert } from "lucide-react";
import CarEvaluationForm from "../../components/CarEvaluationForm";

export const metadata: Metadata = { title: "Послуги автовикупу в Харкові", description: "Викуп авто після ДТП, на розбирання, нерозмитнених та терміновий автовикуп у Харкові." };

const services = [
  { title: "Викуп авто після ДТП", text: "Оцінимо битий або несправний автомобіль і заберемо евакуатором.", href: "/posluhy/vykup-pislya-dtp", icon: TriangleAlert },
  { title: "Викуп на розбирання", text: "Викупимо авто, що не підлягає ремонту, або металобрухт.", href: "/posluhy/vykup-na-rozbyrannya", icon: Recycle },
  { title: "Викуп нерозмитнених", text: "Швидке рішення для авто на іноземній реєстрації.", href: "/posluhy/vykup-nerozmytnenykh", icon: Container },
  { title: "Терміновий викуп", text: "Отримайте гроші за авто вже за 1 годину.", href: "/posluhy/terminovyy-vykup", icon: Gauge },
  { title: "Викуп за готівку", text: "Повний розрахунок одразу після оформлення угоди.", href: "/posluhy/terminovyy-vykup", icon: CircleDollarSign },
  { title: "Викуп авто з пробігом", text: "Купуємо вживані авто будь-яких марок і років випуску.", href: "/posluhy/terminovyy-vykup", icon: CarFront },
];

export default function ServicesPage() {
  return <main className="bg-slate-950 pt-28 text-white sm:pt-36"><section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Послуги</p><h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Викуп автомобілів у будь-якому стані</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Оберіть потрібну послугу або залиште заявку — ми запропонуємо чесну ціну та організуємо угоду.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ title, text, href, icon: Icon }) => <Link key={title} href={href} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-orange-400/50"><span className="flex size-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-slate-950"><Icon className="size-5" /></span><h2 className="mt-5 text-lg font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p><span className="mt-5 inline-block text-sm font-bold text-orange-400">Детальніше →</span></Link>)}</div></div></section><section className="border-t border-white/5 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-md"><CarEvaluationForm /></div></section></main>;
}
