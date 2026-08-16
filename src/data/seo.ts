import type { Metadata } from "next";

export const SITE_NAME = "АвтоВикуп Харків";
export const SITE_URL = "https://avtovykup-kharkiv.com.ua";
export const OG_IMAGE_PATH = "/og-image.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const DEFAULT_DESCRIPTION =
  "Терміновий автовикуп у Харкові та області. Безкоштовна оцінка, виїзд та евакуатор.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
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
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
