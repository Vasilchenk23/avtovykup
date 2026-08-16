import ServicePage from "../../../components/ServicePage";
import { createPageMetadata } from "../../../data/seo";

export const metadata = createPageMetadata({
  title: "Викуп авто з пробігом у Харкові",
  description:
    "Викуп вживаних авто будь-яких марок і років у Харкові. Оцінка за фото, виїзд фахівця та оформлення в день звернення.",
  path: "/posluhy/vykup-z-probihom",
});

export default function UsedCarBuyoutPage() {
  return (
    <ServicePage
      title="Викуп авто з пробігом у Харкові"
      description="Купуємо доглянуті вживані автомобілі будь-яких марок, років і комплектацій. Запропонуємо чесну ринкову ціну та оформимо продаж у день звернення."
      benefits={[
        "Будь-які марки та роки випуску",
        "Оцінка дорожче за типовий трейд-ін",
        "Перевірка й оформлення документів",
        "Гроші одразу після угоди",
      ]}
    />
  );
}
