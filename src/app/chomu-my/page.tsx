import type { Metadata } from "next";
import { BadgeDollarSign, Clock3, ShieldCheck, Star, Truck } from "lucide-react";
import BackToHomeLink from "../../components/BackToHomeLink";
import CarEvaluationForm from "../../components/CarEvaluationForm";

export const metadata: Metadata = {
  title: "Чому обирають АвтоВикуп Харків",
  description: "Переваги термінового автовикупу: чесна оцінка, гроші одразу, безкоштовний виїзд та евакуатор.",
};

const benefits = [
  [Clock3, "Швидкість", "Оцінка за 5 хвилин, викуп та розрахунок у день звернення."],
  [BadgeDollarSign, "Чесна ціна", "Називаємо реальну вартість авто без прихованих комісій."],
  [Truck, "Безкоштовний виїзд", "Приїдемо до вас по Харкову та області, надішлемо евакуатор."],
  [ShieldCheck, "Безпечна угода", "Оформлюємо договір і виплачуємо кошти одразу на місці."],
] as const;

const reviews = [
  ["Олександр", "Продали автомобіль після ДТП того ж дня. Евакуатор приїхав швидко, суму виплатили одразу."],
  ["Марина", "Все пройшло чесно та без зайвих дзвінків. Менеджер сам приїхав у зручний час."],
  ["Віталій", "Терміново потрібні були гроші — оцінили по фото, за годину вже оформили документи."],
];

export default function WhyUsPage() {
  return (
    <main className="bg-slate-950 pt-28 text-white sm:pt-36">
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <BackToHomeLink />
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Про нас</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Чому власники авто обирають нас
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Ми робимо продаж автомобіля простим: від першого фото до отримання грошей без посередників і зайвого
            очікування.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([Icon, title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Icon className="size-5" />
                </span>
                <h2 className="mt-5 text-lg font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Відгуки</p>
          <h2 className="mt-3 text-3xl font-black">Що кажуть наші клієнти</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviews.map(([name, text]) => (
              <blockquote key={name} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <div className="flex gap-1 text-orange-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">“{text}”</p>
                <footer className="mt-5 font-bold text-white">— {name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <CarEvaluationForm />
        </div>
      </section>
    </main>
  );
}
