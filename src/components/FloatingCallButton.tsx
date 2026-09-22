import { MessageCircle, Phone, Send } from "lucide-react";
import { PHONE_DIGITS, PHONE_DISPLAY, PHONE_HREF, TELEGRAM_URL } from "../data/contact";

export default function FloatingCallButton() {
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-white/10 bg-slate-950/95 px-3 pt-2 backdrop-blur sm:hidden"
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={PHONE_HREF}
          className="flex min-h-12 flex-1 items-center justify-center gap-1.5 rounded-xl bg-orange-500 text-xs font-extrabold text-slate-950"
        >
          <Phone className="size-4" />
          Подзвонити
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center gap-1.5 rounded-xl bg-sky-500/15 text-xs font-bold text-sky-200"
        >
          <Send className="size-4" />
          Telegram
        </a>
        <a
          href={`viber://chat?number=%2B${PHONE_DIGITS}`}
          className="flex min-h-12 flex-1 items-center justify-center gap-1.5 rounded-xl bg-violet-500/15 text-xs font-bold text-violet-200"
        >
          <MessageCircle className="size-4" />
          Viber
        </a>
      </div>

      <a
        href={PHONE_HREF}
        aria-label={`Зателефонувати: ${PHONE_DISPLAY}`}
        className="group fixed bottom-6 right-6 z-50 hidden size-16 items-center justify-center rounded-full bg-orange-500 text-slate-950 shadow-2xl shadow-orange-500/35 transition duration-300 hover:scale-110 hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400 sm:flex"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-orange-500/40 motion-reduce:animate-none" />
        <span className="absolute -inset-2 -z-10 rounded-full border border-orange-400/30 opacity-70 transition group-hover:-inset-3 group-hover:opacity-100" />
        <Phone className="size-7 fill-current" strokeWidth={2.4} />
        <span className="sr-only">{PHONE_DISPLAY}</span>
      </a>
    </>
  );
}
