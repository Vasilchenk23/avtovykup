"use client";

import Link from "next/link";
import { Car, ChevronDown, Menu, MessageCircle, PhoneCall, Send, X } from "lucide-react";
import { useState } from "react";

const services = [
  { label: "Викуп авто після ДТП", href: "/posluhy/vykup-pislya-dtp" },
  { label: "Викуп на розбирання", href: "/posluhy/vykup-na-rozbyrannya" },
  { label: "Викуп нерозмитнених", href: "/posluhy/vykup-nerozmytnenykh" },
  { label: "Терміновий викуп", href: "/posluhy/terminovyy-vykup" },
];

const navigation = [
  { label: "Блог", href: "/blog" },
  { label: "Чому ми", href: "/chomu-my" },
  { label: "FAQ", href: "/faq" },
  { label: "Контакти", href: "/kontakty" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5" onClick={closeMenu}>
          <span className="flex size-10 items-center justify-center rounded-xl bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/20"><Car className="size-6" strokeWidth={2.5} /></span>
          <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">АвтоВикуп <span className="text-orange-400">Харків</span></span>
        </Link>

        <nav aria-label="Головна навігація" className="hidden items-center gap-5 lg:flex xl:gap-6">
          <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <div className="flex items-center gap-1 text-sm font-semibold text-slate-200"><Link href="/posluhy" className="transition hover:text-orange-400">Послуги</Link><button type="button" aria-label="Відкрити меню послуг" aria-expanded={isServicesOpen} aria-haspopup="menu" onClick={() => setIsServicesOpen((open) => !open)} className="rounded p-0.5 transition hover:text-orange-400"><ChevronDown className={`size-4 transition ${isServicesOpen ? "rotate-180" : ""}`} /></button></div>
            {isServicesOpen && <div role="menu" className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-white/10 bg-slate-900 p-2 shadow-2xl shadow-black/40">{services.map((service) => <Link key={service.href} role="menuitem" href={service.href} onClick={() => setIsServicesOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-orange-500/10 hover:text-orange-300">{service.label}</Link>)}<Link href="/posluhy" className="mt-1 block rounded-lg border-t border-white/10 px-3 py-2.5 text-sm font-bold text-orange-400">Усі послуги →</Link></div>}
          </div>
          {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-200 transition hover:text-orange-400">{item.label}</Link>)}
        </nav>

        <div className="hidden items-center gap-2 xl:flex"><MessengerLinks /></div>
        <div className="flex items-center gap-3"><a href="tel:+380675552424" className="hidden text-right 2xl:block"><span className="block text-xs text-slate-400">Працюємо цілодобово</span><span className="text-base font-bold text-white">+38 (067) 555-24-24</span></a><a href="#оцінка" className="hidden rounded-lg bg-orange-500 px-3.5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-orange-400 sm:block sm:px-4 sm:text-sm">Замовити дзвінок</a><button type="button" aria-label="Відкрити меню" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(true)} className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-orange-400 hover:text-orange-400 lg:hidden"><Menu className="size-5" /></button></div>
      </div>
      {isMenuOpen && <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Мобільна навігація"><button type="button" aria-label="Закрити меню" onClick={closeMenu} className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" /><aside className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/50"><div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="flex items-center gap-2 text-base font-extrabold text-white"><Car className="size-5 text-orange-400" />АвтоВикуп Харків</span><button type="button" aria-label="Закрити меню" onClick={closeMenu} className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-white"><X className="size-5" /></button></div><nav aria-label="Мобільна навігація" className="mt-5 space-y-1"><div className="flex items-center justify-between rounded-lg px-3 py-3 font-bold text-white transition hover:bg-white/5"><Link href="/posluhy" onClick={closeMenu}>Послуги</Link><button type="button" aria-label="Відкрити меню послуг" onClick={() => setIsMobileServicesOpen((open) => !open)} aria-expanded={isMobileServicesOpen}><ChevronDown className={`size-5 text-orange-400 transition ${isMobileServicesOpen ? "rotate-180" : ""}`} /></button></div>{isMobileServicesOpen && <div className="mb-2 ml-3 border-l border-orange-400/30 pl-3">{services.map((service) => <Link key={service.href} href={service.href} onClick={closeMenu} className="block py-2 text-sm text-slate-400 transition hover:text-orange-300">{service.label}</Link>)}</div>}{navigation.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} className="block rounded-lg px-3 py-3 font-bold text-white transition hover:bg-white/5 hover:text-orange-300">{item.label}</Link>)}</nav><div className="mt-auto border-t border-white/10 pt-6"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Месенджери</p><MessengerLinks /><a href="#оцінка" onClick={closeMenu} className="mt-6 flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-orange-400">Замовити дзвінок</a><a href="tel:+380675552424" className="mt-4 block text-center text-sm font-bold text-white">+38 (067) 555-24-24</a></div></aside></div>}
    </header>
  );
}

function MessengerLinks() {
  return <div className="flex items-center gap-2"><a aria-label="Telegram" href="https://t.me" className="social-link bg-sky-500/15 text-sky-300 hover:bg-sky-500 hover:text-white"><Send className="size-4" /></a><a aria-label="Viber" href="viber://chat" className="social-link bg-violet-500/15 text-violet-300 hover:bg-violet-500 hover:text-white"><MessageCircle className="size-4" /></a><a aria-label="WhatsApp" href="https://wa.me/380675552424" className="social-link bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500 hover:text-white"><PhoneCall className="size-4" /></a></div>;
}
