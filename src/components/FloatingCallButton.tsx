import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/contact";

export default function FloatingCallButton() {
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Зателефонувати: ${PHONE_DISPLAY}`}
      className="group fixed bottom-6 right-6 z-50 flex size-16 items-center justify-center rounded-full bg-orange-500 text-slate-950 shadow-2xl shadow-orange-500/35 transition duration-300 hover:scale-110 hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-orange-500/40 motion-reduce:animate-none" />
      <span className="absolute -inset-2 -z-10 rounded-full border border-orange-400/30 opacity-70 transition group-hover:-inset-3 group-hover:opacity-100" />
      <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-xl border border-white/10 bg-slate-900/95 px-3 py-2 text-xs font-bold text-white opacity-0 shadow-xl backdrop-blur transition group-hover:opacity-100 sm:block">
        Зателефонувати
      </span>
      <Phone className="size-7 fill-current" strokeWidth={2.4} />
      <span className="sr-only">{PHONE_DISPLAY}</span>
    </a>
  );
}
