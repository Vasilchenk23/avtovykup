import ServicePage from "../../../components/ServicePage";
import { createPageMetadata } from "../../../data/seo";

export const metadata = createPageMetadata({
  title: "Терміновий викуп авто за 1 годину",
  description: "Терміновий автовикуп у Харкові: оцінка за 5 хвилин, договір і гроші за авто протягом 1 години.",
  path: "/posluhy/terminovyy-vykup",
});
export default function UrgentBuyoutPage() { return <ServicePage title="Терміновий викуп авто — гроші за 1 годину" description="Коли продати автомобіль потрібно сьогодні, ми швидко оцінимо його та зробимо пропозицію. Приїдемо у зручний для вас час." benefits={["Попередня оцінка за 5 хвилин", "Виїзд у день звернення", "Гроші готівкою або переказом", "Договір купівлі-продажу на місці"]} />; }
