import {
  Car,
  CarFront,
  ChevronDown,
  CircleCheck,
  Clock3,
  FileText,
  Fuel,
  KeyRound,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import CarEvaluationForm from "../components/CarEvaluationForm";
import SocialLinks from "../components/SocialLinks";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/contact";

const phoneNumber = PHONE_DISPLAY;

const categories = [
  {
    title: "Авто на українській реєстрації",
    description: "Цілі, з пробігом та б/у автомобілі будь-яких марок.",
    icon: CarFront,
  },
  {
    title: "Авто після ДТП",
    description: "Биті, аварійні та ті, що не на ходу.",
    icon: Wrench,
  },
  {
    title: "Нерозмитнені авто",
    description: "Євробляхи та авто на іноземній реєстрації.",
    icon: FileText,
  },
  {
    title: "На розбирання та металобрухт",
    description: "Заберемо старе або несправне авто евакуатором.",
    icon: Truck,
  },
  {
    title: "Кредитні та заставні авто",
    description: "Допоможемо знайти прозоре рішення вашої ситуації.",
    icon: KeyRound,
  },
  {
    title: "Мототехніка та комерційний транспорт",
    description: "Мотоцикли, буси, пікапи та спецтехніка.",
    icon: Fuel,
  },
];

const purchasedCars = [
  {
    title: "На розбирання та металобрухт",
    vehicle: "Седан після пошкоджень",
    photos: ["car-1.webp", "car-2.webp"],
  },
  {
    title: "Бюджетні автомобілі",
    vehicle: "Hyundai Accent",
    photos: ["car-3.webp", "car-4.webp", "car-5.webp"],
  },
  {
    title: "Кросовери з пробігом",
    vehicle: "BMW X5",
    photos: ["car-6.webp", "car-7.webp", "car-8.webp"],
  },
  {
    title: "Авто на єврономерах",
    vehicle: "Škoda Octavia",
    photos: ["car-9.webp"],
  },
  {
    title: "Авто на українській реєстрації",
    vehicle: "BMW 5 Series",
    photos: ["car-10.webp"],
  },
  {
    title: "Авто після ДТП",
    vehicle: "Kia Sorento",
    photos: ["car-11.webp"],
  },
  {
    title: "Мототехніка",
    vehicle: "Пітбайк",
    photos: ["car-12.webp", "car-13.webp"],
  },
  {
    title: "Преміум-сегмент",
    vehicle: "BMW 3 Series",
    photos: ["car-14.webp"],
  },
];

const faqs = [
  {
    question: "Як відбувається оцінка вартості авто?",
    answer:
      "Надішліть фото автомобіля у месенджер або заповніть форму. За 5 хвилин назвемо попередню вартість, а остаточно узгодимо її під час огляду.",
  },
  {
    question: "Які документи потрібні для продажу?",
    answer:
      "Потрібні паспорт, ІПН і техпаспорт. Якщо ви дієте від імені власника — знадобиться чинна довіреність.",
  },
  {
    question: "Чи виїжджаєте ви по Харківській області?",
    answer:
      "Так. Виїзд фахівця по Харкову та області безкоштовний. За потреби також безкоштовно надішлемо евакуатор.",
  },
  {
    question: "Скільки часу займає викуп?",
    answer:
      "Зазвичай від 1 до 2 годин: огляд, оформлення договору та розрахунок готівкою або переказом у день звернення.",
  },
];

function Hero() {
  const benefits = ["Оцінка за 5 хв", "Безкоштовний евакуатор", "Розрахунок готівкою на місці"];

  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 pt-28 text-white sm:pt-36">
      <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/45" />
      <div className="absolute -left-28 top-28 -z-10 size-80 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1fr_420px] lg:items-end lg:gap-16 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-3 py-1.5 text-xs font-semibold text-orange-300">
            <Sparkles className="size-3.5" />
            Викуп авто в Харкові 24/7
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Терміновий автовикуп у Харкові та області <span className="text-orange-400">— Гроші за 1 годину</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Викупимо авто в будь-якому стані. Оцінка по фото за 5 хвилин, безкоштовний виїзд та евакуатор.
          </p>
          <ul className="mt-8 grid gap-3 text-sm font-medium text-slate-200 sm:grid-cols-3 sm:gap-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5">
                <CircleCheck className="size-5 shrink-0 text-orange-400" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <CarEvaluationForm />
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">{eyebrow}</p><h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>{text && <p className="mt-4 text-slate-400">{text}</p>}</div>;
}

function Categories() {
  return <section id="why-us" className="bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"><span id="services" className="relative -top-28 block" /><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Послуги" title="Що ми викуповуємо" text="Оцінюємо транспорт чесно й викуповуємо без зайвого клопоту." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map(({ title, description, icon: Icon }) => <article key={title} className="group rounded-2xl border border-white/8 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900 sm:p-6"><span className="flex size-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-slate-950"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{description}</p></article>)}</div></div></section>;
}

function RecentCars() {
  return <section id="reviews" className="border-y border-white/5 bg-zinc-900 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"><span id="blog" className="relative -top-28 block" /><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Реальні фото" title="Реальні приклади викупу авто" text="Автомобілі та мототехніка, які ми вже викупили у власників." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{purchasedCars.map((car) => <article key={car.title} className="group overflow-hidden rounded-2xl border border-white/8 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40"><div className={`grid h-64 gap-1.5 overflow-hidden bg-slate-900 sm:h-72 ${car.photos.length === 1 ? "grid-cols-1" : car.photos.length === 2 ? "grid-cols-2" : "grid-cols-[1.2fr_1fr] grid-rows-2"}`}>{car.photos.map((photo, index) => <div key={photo} className={`relative overflow-hidden ${car.photos.length === 3 && index === 0 ? "row-span-2" : ""}`}><Image src={`/img/cars/${photo}`} alt={`${car.vehicle} — реальний викуп авто у Харкові, фото ${index + 1}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>)}</div><div className="flex items-center justify-between gap-4 p-4"><div><h3 className="font-bold text-white">{car.title}</h3><p className="mt-1 text-sm text-slate-400">{car.vehicle}</p></div><span className="shrink-0 rounded-md bg-orange-400/10 px-2.5 py-1 text-xs font-bold text-orange-300">{car.photos.length} фото</span></div></article>)}</div></div></section>;
}

function FAQ() {
  return <section id="faq" className="bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Відповіді" title="Часті запитання" /> <div className="space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-xl border border-white/10 bg-slate-900/60 px-5 open:border-orange-400/40" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-white"><span>{faq.question}</span><ChevronDown className="size-5 shrink-0 text-orange-400 transition group-open:rotate-180" /></summary><p className="max-w-2xl pb-5 text-sm leading-6 text-slate-400">{faq.answer}</p></details>)}</div></div></section>;
}

function Footer() {
  return <footer id="contacts" className="border-t border-white/10 bg-zinc-950 px-4 pb-8 pt-14 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]"><div><a href="#top" className="flex items-center gap-2.5"><span className="flex size-10 items-center justify-center rounded-xl bg-orange-500 text-slate-950"><Car className="size-6" strokeWidth={2.5} /></span><span className="text-lg font-extrabold tracking-tight text-white">АвтоВикуп <span className="text-orange-400">Харків</span></span></a><p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Швидко та чесно викупимо автомобіль у будь-якому стані. Оформлення та розрахунок в день звернення.</p></div><div><h3 className="text-sm font-bold uppercase tracking-wider text-white">Контакти</h3><a href={PHONE_HREF} className="mt-4 flex items-center gap-2 text-base font-bold text-orange-400 hover:text-orange-300"><Phone className="size-4" />{phoneNumber}</a><p className="mt-3 flex items-center gap-2 text-sm text-slate-400"><MapPin className="size-4 text-orange-400" />м. Харків та область</p><p className="mt-2 flex items-center gap-2 text-sm text-slate-400"><Clock3 className="size-4 text-orange-400" />Працюємо 24/7</p></div><div><h3 className="text-sm font-bold uppercase tracking-wider text-white">Напишіть нам</h3><div className="mt-4"><SocialLinks /></div><p className="mt-4 flex items-center gap-2 text-sm text-slate-400"><ShieldCheck className="size-4 text-orange-400" />Безпечна угода</p></div></div><div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} АвтоВикуп Харків. Усі права захищені.</div></div></footer>;
}

export default function Home() {
  return <div className="home-page min-h-screen overflow-x-hidden bg-slate-950"><main><Hero /><Categories /><RecentCars /><FAQ /></main><Footer /></div>;
}
