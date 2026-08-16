import Link from "next/link";
import BackToHomeLink from "../../components/BackToHomeLink";
import CarEvaluationForm from "../../components/CarEvaluationForm";
import ServiceCardImage, { type ServiceImageIcon } from "../../components/ServiceCardImage";
import { createPageMetadata } from "../../data/seo";

export const metadata = createPageMetadata({
  title: "Послуги автовикупу в Харкові",
  description:
    "Викуп авто після ДТП, на розбирання, за готівку, нерозмитнених і вживаних автомобілів у Харкові та області.",
  path: "/posluhy",
});

type Service = {
  title: string;
  image: string;
  badge: string;
  href: string;
  description: string;
  fallbackIcon: ServiceImageIcon;
};

const services: Service[] = [
  {
    title: "Викуп авто після ДТП",
    image: "https://images.unsplash.com/photo-1687867451910-28941a460f35?auto=format&fit=crop&w=800&q=80",
    badge: "Власний евакуатор",
    href: "/posluhy/vykup-pislya-dtp",
    description:
      "Викупимо битий або несправний автомобіль у будь-якому стані. Безкоштовно виїдемо та заберемо евакуатором.",
    fallbackIcon: "accident",
  },
  {
    title: "Викуп на розбирання",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
    badge: "Офіційне зняття з обліку",
    href: "/posluhy/vykup-na-rozbyrannya",
    description:
      "Скупка авто не на ходу, після пожежі чи з проблемами мотора. Заберемо купу металу та оформимо документи.",
    fallbackIcon: "dismantling",
  },
  {
    title: "Викуп нерозмитнених",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    badge: "Єврономери",
    href: "/posluhy/vykup-nerozmytnenykh",
    description:
      "Швидкий викуп авто на європейській чи американській реєстрації без зайвої бюрократії.",
    fallbackIcon: "imported",
  },
  {
    title: "Терміновий викуп",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    badge: "Гроші за 1 годину",
    href: "/posluhy/terminovyy-vykup",
    description:
      "Термінова угода з виплатою готівкою в сервісному центрі МВС одразу під час переоформлення.",
    fallbackIcon: "urgent",
  },
  {
    title: "Викуп за готівку",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    badge: "100% виплата на місці",
    href: "/posluhy/vykup-za-hotivku",
    description:
      "Чесна оцінка без штучного заниження ціни. Розрахунок у валюті або гривні за вашим вибором.",
    fallbackIcon: "cash",
  },
  {
    title: "Викуп авто з пробігом",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    badge: "Будь-які марки та роки",
    href: "/posluhy/vykup-z-probihom",
    description:
      "Купуємо вживані авто в хорошому стані. Оцінимо дорожче за трейд-ін у салонах.",
    fallbackIcon: "used",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 pt-28 text-white sm:pt-36">
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <BackToHomeLink />

          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Послуги
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Викуп автомобілів у будь-якому стані
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Оберіть потрібну послугу або залиште заявку — ми запропонуємо чесну ціну та організуємо безпечну угоду.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.href}
                className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-orange-950/20"
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <ServiceCardImage
                    src={service.image}
                    alt={`${service.title} у Харкові — терміновий автовикуп`}
                    fallbackIcon={service.fallbackIcon}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 max-w-[calc(100%_-_2rem)] rounded-full border border-orange-400/30 bg-slate-950/90 px-3 py-1.5 text-xs font-bold text-orange-400 shadow-lg backdrop-blur-sm">
                    {service.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col rounded-b-xl bg-slate-900/80 p-5">
                  <h2 className="text-xl font-bold leading-snug text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex w-fit pt-5 text-sm font-bold text-orange-500 transition hover:text-orange-400"
                  >
                    Детальніше →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-zinc-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_28rem] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Індивідуальна оцінка
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
              Не знайшли свою категорію? Отримайте розрахунок вашого авто за 5 хвилин!
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Залиште дані автомобіля — фахівець оцінить його стан і запропонує актуальну суму викупу.
            </p>
          </div>
          <div className="w-full min-w-0">
            <CarEvaluationForm title="Розрахунок вартості авто" />
          </div>
        </div>
      </section>
    </main>
  );
}
