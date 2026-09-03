"use client";

import { useEffect } from "react";
import { reportCallConversion } from "../lib/gtag";

/** Tracks every standard telephone link rendered anywhere on the site. */
export default function GoogleAdsCallConversionTracker() {
  useEffect(() => {
    const handleCallClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const callLink = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      const url = callLink?.getAttribute("href");

      if (!url) return;

      event.preventDefault();
      reportCallConversion(url);
    };

    document.addEventListener("click", handleCallClick);

    return () => document.removeEventListener("click", handleCallClick);
  }, []);

  return null;
}
