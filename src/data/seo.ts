import type { Metadata } from "next";

export const SITE_NAME = "АвтоВикуп Харків";
export const SITE_URL = "https://avtovykup-kharkiv.com.ua";
export const OG_IMAGE_PATH = "/og-image.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const DEFAULT_DESCRIPTION =
  "Терміновий викуп проблемних авто у Харкові та області: після ДТП, не на ходу, зі зламаним мотором або КПП, без документів та на іноземній реєстрації. Оцінка по фото, евакуатор, гроші в день звернення.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const absoluteUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "uk_UA",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Терміновий викуп проблемних авто у Харкові після ДТП та несправностей",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}
