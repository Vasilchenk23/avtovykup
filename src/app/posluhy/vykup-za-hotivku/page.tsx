import ServicePage from "../../../components/ServicePage";
import { createPageMetadata } from "../../../data/seo";

export const metadata = createPageMetadata({
  title: "Викуп авто за готівку у Харкові",
  description:
      "Швидкий викуп проблемного авто за готівку у Харкові та області. Офіційне оформлення та повний розрахунок на місці.",
  path: "/posluhy/vykup-za-hotivku",
});

export default function CashBuyoutPage() {
  return (
    <ServicePage
      title="Викуп авто за готівку у Харкові"
      description="Якщо гроші потрібні сьогодні, організуємо огляд і безпечне переоформлення. Повністю розрахуємося одразу після підписання документів."
      benefits={[
        "Попередня оцінка за 5 хвилин",
        "Повний розрахунок на місці",
        "Офіційне оформлення угоди",
        "Без прихованих комісій",
      ]}
    />
  );
}
