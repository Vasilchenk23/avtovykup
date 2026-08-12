"use client";

import Link from "next/link";
import { Car, ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/contact";
import SocialLinks from "./SocialLinks";

const services = [
  { label: "Викуп авто після ДТП", href: "/posluhy/vykup-pislya-dtp" },
  { label: "Викуп на розбирання", href: "/posluhy/vykup-na-rozbyrannya" },
  { label: "Викуп нерозмитнених", href: "/posluhy/vykup-nerozmytnenykh" },
  { label: "Терміновий викуп", href: "/posluhy/terminovyy-vykup" },
  { label: "Викуп за готівку", href: "/posluhy/vykup-za-hotivku" },
  { label: "Викуп авто з пробігом", href: "/posluhy/vykup-z-probihom" },
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
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    if (!isServicesOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsServicesOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isServicesOpen]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5" onClick={closeMenu}>
            <span className="flex size-10 items-center justify-center rounded-xl bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/20">
              <Car className="size-6" strokeWidth={2.5} />
            </span>
            <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">
              АвтоВикуп <span className="text-orange-400">Харків</span>
            </span>
          </Link>

          <nav aria-label="Головна навігація" className="hidden items-center gap-5 lg:flex xl:gap-6">
            <div
              ref={servicesMenuRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <div className="flex items-center gap-1 text-sm font-semibold text-slate-200">
                <Link
                  href="/posluhy"
                  onClick={() => setIsServicesOpen(false)}
                  className="transition hover:text-orange-400"
                >
                  Послуги
                </Link>
                <button
                  type="button"
                  aria-label={isServicesOpen ? "Закрити меню послуг" : "Відкрити меню послуг"}
                  aria-expanded={isServicesOpen}
                  aria-controls="desktop-services-menu"
                  aria-haspopup="menu"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  className="rounded p-0.5 transition hover:text-orange-400"
                >
                  <ChevronDown className={`size-4 transition ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {isServicesOpen && (
                <div className="absolute left-0 top-full w-80 pt-3">
                  <div
                    id="desktop-services-menu"
                    role="menu"
                    className="rounded-xl border border-white/10 bg-slate-900 p-2 shadow-2xl shadow-black/40"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        role="menuitem"
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-orange-500/10 hover:text-orange-300"
                      >
                        {service.label}
                      </Link>
                    ))}
                    <Link
                      href="/posluhy"
                      onClick={() => setIsServicesOpen(false)}
                      className="mt-1 block rounded-lg border-t border-white/10 px-3 py-2.5 text-sm font-bold text-orange-400 transition hover:bg-orange-500/10 hover:text-orange-300"
                    >
                      Усі послуги →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-200 transition hover:text-orange-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <SocialLinks />
          </div>
          <div className="flex items-center gap-3">
            <a href={PHONE_HREF} className="hidden text-right 2xl:block">
              <span className="block text-xs text-slate-400">Працюємо цілодобово</span>
              <span className="text-base font-bold text-white">{PHONE_DISPLAY}</span>
            </a>
            <a
              href="#оцінка"
              className="hidden rounded-lg bg-orange-500 px-3.5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-orange-400 sm:block sm:px-4 sm:text-sm"
            >
              Замовити дзвінок
            </a>
            <button
              type="button"
              aria-label="Відкрити меню"
              aria-expanded={isMenuOpen}
              onClick={() => {
                setIsServicesOpen(false);
                setIsMenuOpen(true);
              }}
              className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-orange-400 hover:text-orange-400 lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Мобільна навігація"
        >
          <button
            type="button"
            aria-label="Закрити меню"
            onClick={closeMenu}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />
          <aside className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="flex items-center gap-2 text-base font-extrabold text-white">
                <Car className="size-5 text-orange-400" />
                АвтоВикуп Харків
              </span>
              <button
                type="button"
                aria-label="Закрити меню"
                onClick={closeMenu}
                className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav aria-label="Мобільна навігація" className="mt-5 space-y-1">
              <button
                type="button"
                aria-expanded={isMobileServicesOpen}
                aria-controls="mobile-services-menu"
                onClick={() => setIsMobileServicesOpen((open) => !open)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-bold text-white transition hover:bg-white/5"
              >
                <span>Послуги</span>
                <ChevronDown
                  className={`size-5 text-orange-400 transition ${isMobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isMobileServicesOpen && (
                <div id="mobile-services-menu" className="mb-2 ml-3 border-l border-orange-400/30 pl-3">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenu}
                      className="block rounded-r-lg px-2 py-2.5 text-sm text-slate-300 transition hover:bg-orange-500/10 hover:text-orange-300"
                    >
                      {service.label}
                    </Link>
                  ))}
                  <Link
                    href="/posluhy"
                    onClick={closeMenu}
                    className="mt-1 block rounded-r-lg border-t border-white/10 px-2 py-2.5 text-sm font-bold text-orange-400"
                  >
                    Усі послуги →
                  </Link>
                </div>
              )}

              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 font-bold text-white transition hover:bg-white/5 hover:text-orange-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Месенджери</p>
              <SocialLinks />
              <a
                href="#оцінка"
                onClick={closeMenu}
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-orange-400"
              >
                Замовити дзвінок
              </a>
              <a href={PHONE_HREF} className="mt-4 block text-center text-sm font-bold text-white">
                {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
