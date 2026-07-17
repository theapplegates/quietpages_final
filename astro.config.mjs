import { defineConfig } from "astro/config";
import { astrotypeFonts } from "./src/astrotypes/fonts.mjs";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || "https://quietpages-eta.vercel.app";

export default defineConfig({
  fonts: astrotypeFonts,
  site,
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
