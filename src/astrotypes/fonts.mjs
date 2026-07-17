import { fontProviders } from "astro/config";

export const astrotypeFonts = [
  {
    provider: fontProviders.google(),
    name: "Cormorant Garamond",
    cssVariable: "--font-cormorant-garamond"
  },
  {
    provider: fontProviders.google(),
    name: "Inter",
    cssVariable: "--font-inter"
  }
];
