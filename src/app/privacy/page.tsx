import type { Metadata } from "next";
import {
  Database,
  FileCheck2,
  LockKeyhole,
  PhoneCall,
  Scale,
  Send,
  ShieldCheck,
  Target,
  UserRoundCheck,
} from "lucide-react";
import BackToHomeLink from "../../components/BackToHomeLink";
import { PHONE_DISPLAY, PHONE_HREF, TELEGRAM_URL } from "../../data/contact";

export const metadata: Metadata = {
  title: "Політика конфіденційності — АвтоВикуп Харків",
  description:
    "Політика обробки та захисту персональних даних користувачів сайту АвтоВикуп Харків.",
};

const sections = [
  {
    icon: Database,
    title: "Які дані ми збираємо",
    content: (
      <>
        <p>
          Із персональних даних ми збираємо лише <strong>ім&apos;я</strong>, якщо ви повідомляєте його під час звернення, та <strong>номер телефону</strong>, який ви добровільно залишаєте для зворотного зв&apos;язку.
        </p>
        <p>
          Форма оцінки також може містити марку, модель і рік випуску автомобіля. Ця інформація використовується виключно для підготовки попередньої оцінки транспортного засобу.
        </p>
        <p>Ми не просимо та не збираємо паспортні дані, банківські реквізити або іншу конфіденційну інформацію через форму на сайті.</p>
      </>
    ),
  },
  {
    icon: Target,
    title: "Мета обробки даних",
    content: (
      <>
        <p>Надані дані використовуються лише для:</p>
        <ul>
          <li>зворотного дзвінка за вашим зверненням;</li>
          <li>уточнення інформації про автомобіль;</li>
          <li>підготовки попередньої оцінки та пропозиції щодо викупу;</li>
          <li>організації огляду й подальшого оформлення угоди за вашою згодою.</li>
        </ul>
        <p>Ми не використовуємо контактні дані для масових рекламних розсилок без окремої згоди.</p>
      </>
    ),
  },
  {
    icon: FileCheck2,
    title: "Підстава для обробки",
    content: (
      <p>
        Обробка здійснюється на підставі вашої добровільної згоди, яку ви надаєте, заповнюючи та надсилаючи форму на сайті. Надсилання заявки означає, що ви ознайомилися з цією Політикою та погоджуєтеся на використання даних у зазначених цілях.
      </p>
    ),
  },
  {
    icon: LockKeyhole,
    title: "Зберігання та захист",
    content: (
      <>
        <p>
          Ми застосовуємо розумні організаційні й технічні заходи для захисту даних від втрати, випадкового доступу, зміни або розголошення.
        </p>
        <p>
          Дані зберігаються лише протягом строку, необхідного для опрацювання звернення та комунікації з вами, або до моменту відкликання згоди, якщо інший строк не встановлений законодавством України.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Передача третім особам",
    content: (
      <>
        <p>
          Ми не продаємо та не передаємо ваші персональні дані третім особам для їхніх рекламних, комерційних або інших самостійних цілей.
        </p>
        <p>
          Для оперативної доставки заявки відповідальному менеджеру сайт використовує Telegram як технічний канал зв&apos;язку. Дані можуть бути розкриті лише у випадках, прямо передбачених законодавством України, або за вашою окремою згодою.
        </p>
      </>
    ),
  },
  {
    icon: UserRoundCheck,
    title: "Ваші права",
    content: (
      <>
        <p>Відповідно до законодавства України ви маєте право:</p>
        <ul>
          <li>отримати інформацію про джерело, мету та порядок обробки своїх даних;</li>
          <li>вимагати уточнення, оновлення, обмеження обробки або видалення даних;</li>
          <li>відкликати згоду на обробку персональних даних;</li>
          <li>заперечувати проти неправомірної обробки;</li>
          <li>звернутися зі скаргою до Уповноваженого Верховної Ради України з прав людини або до суду.</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 pb-20 pt-28 text-white sm:pt-36">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <BackToHomeLink />

          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-black/20 sm:p-10">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/20">
              <ShieldCheck className="size-7" />
            </div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Захист персональних даних
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Політика конфіденційності
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Ця Політика пояснює, як сайт «АвтоВикуп Харків» збирає, використовує та захищає персональні дані користувачів під час звернення за оцінкою або викупом автомобіля.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5">
                Чинна з 13 серпня 2026 року
              </span>
              <a
                href="https://zakon.rada.gov.ua/laws/show/2297-17"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-orange-300 transition hover:border-orange-400/50"
              >
                <Scale className="size-3.5" /> Закон № 2297-VI
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5 text-sm leading-6 text-orange-100 sm:p-6">
            <p className="font-bold text-orange-300">Загальні положення</p>
            <p className="mt-2">
              Обробка персональних даних здійснюється відповідно до Закону України «Про захист персональних даних» № 2297-VI та інших нормативно-правових актів України. Володільцем даних є адміністрація сайту «АвтоВикуп Харків».
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {sections.map(({ icon: Icon, title, content }) => (
              <section
                key={title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 privacy-content">
                    <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
                    <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {content}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/60 p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Як звернутися щодо персональних даних</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Щоб отримати інформацію, виправити або видалити свої дані чи відкликати згоду, зв&apos;яжіться з нами зручним способом. Для перевірки звернення ми можемо попросити підтвердити номер телефону.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-orange-400"
              >
                <PhoneCall className="size-4" /> {PHONE_DISPLAY}
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-5 py-3 text-sm font-bold text-white transition hover:border-sky-400/50 hover:text-sky-300"
              >
                <Send className="size-4" /> Telegram @danilgichko
              </a>
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm leading-6 text-slate-400 sm:p-6">
            <h2 className="font-bold text-white">Зміни до Політики</h2>
            <p className="mt-2">
              Ми можемо оновлювати цю Політику у разі зміни законодавства або способу роботи сайту. Актуальна редакція завжди публікується на цій сторінці із зазначенням дати набрання чинності.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
