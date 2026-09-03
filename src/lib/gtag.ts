const GOOGLE_ADS_CALL_CONVERSION = "AW-18407818604/lQlBCOmKo-0cEOyKxMlE";

/** Reports a Google Ads conversion before opening a telephone link. */
export const reportCallConversion = (url?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    let hasNavigated = false;
    const navigate = () => {
      if (url && !hasNavigated) {
        hasNavigated = true;
        window.location.href = url;
      }
    };

    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CALL_CONVERSION,
      value: 1.0,
      currency: "UAH",
      event_callback: navigate,
    });

    // Do not prevent a phone call if the tag is blocked or its callback is delayed.
    if (url) window.setTimeout(navigate, 1000);

    return true;
  }

  if (url) window.location.href = url;

  return false;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: "conversion",
      parameters: {
        send_to: string;
        value: number;
        currency: string;
        event_callback: () => void;
      },
    ) => void;
  }
}
