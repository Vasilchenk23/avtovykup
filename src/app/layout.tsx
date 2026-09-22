import type { Metadata } from "next";
import Script from "next/script";
import FloatingCallButton from "../components/FloatingCallButton";
import GoogleAdsCallConversionTracker from "../components/GoogleAdsCallConversionTracker";
import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";
import { PHONE_HREF, TELEGRAM_URL, TIKTOK_URL } from "../data/contact";
import { DEFAULT_DESCRIPTION, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "../data/seo";
import "./globals.css";

const HOME_TITLE = "Терміновий викуп проблемних авто у Харкові — гроші за 1 годину";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "uk_UA",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Терміновий викуп проблемних авто у Харкові після ДТП та несправностей",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${SITE_URL}#business`,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE_PATH}`,
  telephone: PHONE_HREF.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Весніна, 2А",
    addressLocality: "Харків",
    addressRegion: "Харківська область",
    addressCountry: "UA",
  },
  areaServed: [
    { "@type": "City", name: "Харків" },
    { "@type": "AdministrativeArea", name: "Харківська область" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
        "https://schema.org/Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [TELEGRAM_URL, TIKTOK_URL],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="flex min-h-full flex-col pb-20 sm:pb-0">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18407818604"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18407818604');`}
        </Script>
        <GoogleAdsCallConversionTracker />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        {children}
        <SiteFooter />
        <FloatingCallButton />
      </body>
    </html>
  );
}
