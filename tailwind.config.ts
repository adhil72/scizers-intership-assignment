import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ffffff",
        secondary: "#091D41",
        tint: "#17ABFF",
        secondaryLight: "#F4F9FF",
        danger: "#e3342f",
        "primary-light":"#5790BE"
      },
      backgroundImage: {
        banner: "url('/images/cover.png')",
      },
      borderColor: {
        primary: "#ffffff",
        secondary: "#17ABFF",
        secondaryLight: "#F4F9FF",
        danger: "#e3342f",
      },
      colors:{
        primary: "#ffffff",
        secondary: "#17ABFF",
        secondaryLight: "#F4F9FF",
        danger: "#e3342f",
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
