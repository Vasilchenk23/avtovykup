import type { Metadata } from "next";
import FloatingCallButton from "../components/FloatingCallButton";
import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "АвтоВикуп Харків — Терміновий викуп авто за 1 годину",
  description: "Терміновий автовикуп у Харкові та області. Безкоштовна оцінка, виїзд та евакуатор.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <SiteFooter />
        <FloatingCallButton />
      </body>
    </html>
  );
}
