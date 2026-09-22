import ServicePage from "../../../components/ServicePage";
import { createPageMetadata } from "../../../data/seo";

export const metadata = createPageMetadata({
  title: "Викуп авто не на ходу у Харкові",
  description:
    "Викуп авто зі зламаним мотором, КПП або іншими серйозними несправностями у Харкові. Оцінка по фото, евакуатор і розрахунок у день звернення.",
  path: "/posluhy/vykup-z-probihom",
});

export default function UsedCarBuyoutPage() {
  return (
    <ServicePage
      title="Викуп авто не на ходу у Харкові"
      description="Заберемо автомобіль зі зламаним мотором, коробкою передач або іншими технічними проблемами. Якщо авто не їде — організуємо евакуатор."
      benefits={[
        "Розглядаємо авто з несправним мотором",
        "Купуємо авто зі зламаною КПП",
        "Евакуатор, якщо машина не на ходу",
        "Розрахунок у день звернення",
      ]}
    />
  );
}
