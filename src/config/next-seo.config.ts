import { NextSeoProps } from "next-seo";

export default {
  title: "Home",
  titleTemplate: "%s | Petr Habrcetl",
  description: "Elektrikáři Hodonín a okolí, nonstop pohovotost",
  canonical: "https://jacob.com/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://portfolio-zeta-henna.vercel.app/",
    site_name: "Jacob",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
} as NextSeoProps;
