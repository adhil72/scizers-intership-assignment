import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        128: "42rem",
        'p-96': "96%",
        'p-100': "100%",
      },
      width: {
        'p-96': "96%",
        'p-100': "100%",
      },
      backgroundColor: {
        primary: "#ffffff",
        secondary: "#091D41",
        tint: "#17ABFF",
        "secondary-light": "#F4F9FF",
        danger: "#e3342f",
        "primary-light": "#5790BE"
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
      colors: {
        primary: "#ffffff",
        secondary: "#17ABFF",
        "secondary-dark": "#00357B",
        secondaryLight: "#F4F9FF",
        danger: "#e3342f",
        body: "##343434"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
