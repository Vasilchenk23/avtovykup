"use client";

import Image from "next/image";
import {
  AlertTriangle,
  Car,
  DollarSign,
  ShieldCheck,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

export type ServiceImageIcon =
  | "accident"
  | "dismantling"
  | "imported"
  | "urgent"
  | "cash"
  | "used";

const fallbackIcons: Record<ServiceImageIcon, LucideIcon> = {
  accident: AlertTriangle,
  dismantling: Wrench,
  imported: ShieldCheck,
  urgent: Car,
  cash: DollarSign,
  used: Truck,
};

type ServiceCardImageProps = {
  src: string;
  alt: string;
  fallbackIcon: ServiceImageIcon;
};

export default function ServiceCardImage({
  src,
  alt,
  fallbackIcon,
}: ServiceCardImageProps) {
  const [hasError, setHasError] = useState(false);
  const FallbackIcon = fallbackIcons[fallbackIcon];

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={`${alt} — зображення недоступне`}
        className="flex size-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950/70"
      >
        <span className="flex size-24 items-center justify-center rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-500 shadow-2xl shadow-orange-950/50">
          <FallbackIcon className="size-12" strokeWidth={1.7} />
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      onError={() => setHasError(true)}
      className="rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}
