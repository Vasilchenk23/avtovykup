import type { Metadata } from "next";
import ServicePage from "../../../components/ServicePage";

export const metadata: Metadata = { title: "Викуп авто на розбирання та металобрухт", description: "Викуп автомобілів на розбирання та металобрухт у Харкові. Виїзд і евакуатор безкоштовно." };
export default function DismantlingBuyoutPage() { return <ServicePage title="Викуп авто на розбирання та металобрухт" description="Заберемо старий, несправний або некомплектний автомобіль. Назвемо ціну по фото та організуємо безкоштовне вивезення." benefits={["Викупимо авто в неробочому стані", "Заберемо машини без документів на запчастини", "Безкоштовний евакуатор", "Чесна оцінка металу та комплектуючих"]} />; }
