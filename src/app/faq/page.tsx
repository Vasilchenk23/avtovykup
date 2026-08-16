import { ChevronDown } from "lucide-react";
import BackToHomeLink from "../../components/BackToHomeLink";
import CarEvaluationForm from "../../components/CarEvaluationForm";
import { createPageMetadata } from "../../data/seo";

export const metadata = createPageMetadata({
  title: "FAQ — часті запитання про автовикуп",
  description: "Відповіді на часті запитання про терміновий викуп авто у Харкові.",
  path: "/faq",
});

const questions = [
  ["Як відбувається оцінка вартості авто?", "Надішліть фото автомобіля у месенджер або заповніть форму. За 5 хвилин назвемо попередню вартість, а остаточно узгодимо її під час огляду."],
  ["Які документи потрібні для продажу?", "Потрібні паспорт, ІПН і техпаспорт. За продаж від імені власника також потрібна чинна довіреність."],
  ["Чи виїжджаєте ви по Харківській області?", "Так, виїзд фахівця по Харкову та області безкоштовний. За потреби безкоштовно надішлемо евакуатор."],
  ["Скільки часу займає викуп?", "У середньому від 1 до 2 годин: огляд, оформлення договору та розрахунок у день звернення."],
  ["Чи купуєте ви авто після ДТП?", "Так, викуповуємо биті, аварійні та нерухомі автомобілі у будь-якому стані."],
  ["Як відбувається розрахунок?", "Ви отримуєте всю погоджену суму готівкою або банківським переказом одразу після підписання договору."],
  ["Чи можна продати кредитне авто?", "Так, розглянемо ситуацію індивідуально та підкажемо безпечний варіант оформлення."],
  ["Чи потрібна підготовка автомобіля до огляду?", "Ні. Ми оцінюємо авто в його фактичному стані, а евакуатор забере машину за потреби."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="bg-slate-950 pt-28 text-white sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <BackToHomeLink />
          <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            Відповіді
          </p>
          <h1 className="mt-4 text-center text-4xl font-black tracking-tight sm:text-5xl">Часті запитання</h1>
          <p className="mx-auto mt-5 max-w-2xl text-center leading-7 text-slate-400">
            Зібрали відповіді на головні питання про оцінку, документи та продаж автомобіля.
          </p>
          <div className="mt-10 space-y-3">
            {questions.map(([question, answer], index) => (
              <details
                key={question}
                open={index === 0}
                className="group rounded-xl border border-white/10 bg-slate-900/60 px-5 open:border-orange-400/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold">
                  <span>{question}</span>
                  <ChevronDown className="size-5 shrink-0 text-orange-400 transition group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-sm leading-6 text-slate-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <CarEvaluationForm title="Не знайшли відповідь?" />
        </div>
      </section>
    </main>
  );
}
