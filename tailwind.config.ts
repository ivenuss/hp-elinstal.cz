import { fontFamily } from "tailwindcss/defaultTheme";
import { gray, amber } from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        primary: amber["600"],
        ring: amber["600"],
        background: gray["50"],
      },
    },
  },
  plugins: [],
} satisfies Config;
