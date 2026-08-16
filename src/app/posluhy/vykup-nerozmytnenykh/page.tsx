import ServicePage from "../../../components/ServicePage";
import { createPageMetadata } from "../../../data/seo";

export const metadata = createPageMetadata({
  title: "Викуп нерозмитнених авто у Харкові",
  description: "Викуп нерозмитнених авто та євроблях у Харкові. Швидка оцінка, безпечна угода, гроші одразу.",
  path: "/posluhy/vykup-nerozmytnenykh",
});
export default function ImportedCarBuyoutPage() { return <ServicePage title="Викуп нерозмитнених авто та євроблях" description="Допоможемо продати автомобіль на іноземній реєстрації без тривалих пошуків покупця. Розглядаємо різні марки, роки та технічний стан." benefits={["Оцінка за фото у месенджері", "Розглядаємо авто на іноземній реєстрації", "Швидке оформлення угоди", "Розрахунок в день звернення"]} />; }
