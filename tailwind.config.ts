import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: ["1920px"],
    },
    fontFamily: {
      press: "var(--font-press)",
    },
    screens: {
      xxl: { max: "1800px" },
      xl: { max: "1600px" },
      lg: { max: "1279px" },
      md: { max: "1023px" },
      sm: { max: "767px" },
      x: { max: "600px" },
      xs: { max: "376px" },
    },
    extend: {
      colors: {
        BgLight: "#FFFFFF",
        BgDark: "#F4ECEC",
        TextLight: "#EDEDED",
        TextDark: "#111111",
        AccentLight: "#38B6FF",
        AccentDark: "#004AAD",
      },
      spacing: {
        xxxxs: "5px",
        xxxs: "10px",
        xxs: "15px",
        xs: "20px",
        sm: "30px",
        md: "50px",
      },
    },
  },
  plugins: [],
};
export default config;
