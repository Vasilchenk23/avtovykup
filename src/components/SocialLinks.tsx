import { MessageCircle, PhoneCall, Send } from "lucide-react";
import { PHONE_DIGITS, TELEGRAM_URL, TIKTOK_URL } from "../data/contact";
import TikTokIcon from "./TikTokIcon";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        aria-label="Telegram"
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="social-link bg-sky-500/15 text-sky-300 hover:bg-sky-500 hover:text-white"
      >
        <Send className="size-4" />
      </a>
      <a
        aria-label="Viber"
        href={`viber://chat?number=%2B${PHONE_DIGITS}`}
        className="social-link bg-violet-500/15 text-violet-300 hover:bg-violet-500 hover:text-white"
      >
        <MessageCircle className="size-4" />
      </a>
      <a
        aria-label="WhatsApp"
        href={`https://wa.me/${PHONE_DIGITS}`}
        target="_blank"
        rel="noreferrer"
        className="social-link bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500 hover:text-white"
      >
        <PhoneCall className="size-4" />
      </a>
      <a
        aria-label="TikTok"
        href={TIKTOK_URL}
        target="_blank"
        rel="noreferrer"
        className="social-link bg-white/10 text-white hover:bg-white hover:text-slate-950"
      >
        <TikTokIcon className="size-4" />
      </a>
    </div>
  );
}
