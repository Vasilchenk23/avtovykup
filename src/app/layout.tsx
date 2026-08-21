import type { Metadata } from "next";
import Script from "next/script";
import FloatingCallButton from "../components/FloatingCallButton";
import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";
import { PHONE_HREF, TELEGRAM_URL, TIKTOK_URL } from "../data/contact";
import { DEFAULT_DESCRIPTION, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "../data/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "АвтоВикуп Харків — Терміновий викуп авто за 1 годину",
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "АвтоВикуп Харків — Терміновий викуп авто за 1 годину",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "uk_UA",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "АвтоВикуп Харків — Терміновий викуп авто за 1 годину",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "АвтоВикуп Харків — Терміновий викуп авто за 1 годину",
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE_PATH}`,
  telephone: PHONE_HREF.replace("tel:", ""),
  priceRange: "$$",
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
  openingHours: "Mo-Su 00:00-24:00",
  sameAs: [TELEGRAM_URL, TIKTOK_URL],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className="h-full antialiased">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18403130506"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18403130506');`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col">
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
