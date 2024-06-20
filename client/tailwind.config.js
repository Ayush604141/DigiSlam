import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Gorditas", "serif"],
        app: ["Slabo 13px", "serif"],
      },
      colors: {
        primary: "#8b5cf6",
        primaryDark: "#6d28d9",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
