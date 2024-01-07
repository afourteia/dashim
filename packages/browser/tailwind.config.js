/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const { createThemes } = require("tw-colors");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-animate"),
    createThemes({
      light: {
        primary: "#104ee0",
        "primary-focus": "#4675e2",
        "primary-content": "#f3f0ff",

        secondary: "#a8901a",
        "secondary-focus": "#c6ad0c",
        "secondary-content": "#1b1c22",

        accent: "#37cdbe",
        "accent-focus": "#2ba69a",
        "accent-content": "#1b1c22",

        neutral: "#3b424e",
        "neutral-focus": "#2a2e37",
        "neutral-content": "#1b1c22",

        "base-100": "#ffffff",
        "base-200": "#f9fafb",
        "base-300": "#ced3d9",
        "base-content": "#1b1c22",

        info: "#1f94f4",
        success: "#047c28",
        warning: "#ff9900",
        error: "#ff5724",
      },
      dark: {
        primary: "#6343d6",
        "primary-focus": "#8567c5",
        "primary-content": "#f3f0ff",

        secondary: "#e0c124",
        "secondary-focus": "#af971d",
        "secondary-content": "#f3f0ff",

        accent: "#ffffb3",
        "accent-focus": "#ffff80",
        "accent-content": "#f3f0ff",

        neutral: "#a5a3bd",
        "neutral-focus": "#b6b4cb",
        "neutral-content": "#1b1c22",

        "base-100": "#302f3d",
        "base-200": "#22212c",
        "base-300": "#1b1c22",
        "base-content": "#f3f0ff",

        info: "#1c92f2",
        success: "#009485",
        warning: "#ff9900",
        error: "#ff5724",
      },
    }),
  ],
};
