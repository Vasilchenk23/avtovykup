import type { Metadata } from "next";
import ServicePage from "../../../components/ServicePage";

export const metadata: Metadata = { title: "Викуп авто після ДТП у Харкові", description: "Терміново викупимо авто після ДТП у Харкові. Безкоштовний евакуатор та розрахунок в день звернення." };
export default function AccidentCarBuyoutPage() { return <ServicePage title="Викуп авто після ДТП у Харкові" description="Викупимо битий, аварійний або нерухомий автомобіль за ринковою ціною. Не витрачайте час на ремонт чи пошук покупця — приїдемо самі." benefits={["Купуємо авто після будь-яких ДТП", "Безкоштовно надішлемо евакуатор", "Оформимо документи на місці", "Виплатимо гроші одразу"]} />; }
