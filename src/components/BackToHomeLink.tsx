import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BackToHomeLinkProps = {
  className?: string;
};

export default function BackToHomeLink({ className = "" }: BackToHomeLinkProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-sm font-bold text-orange-500 transition hover:text-orange-400 ${className}`}
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      На головну
    </Link>
  );
}
