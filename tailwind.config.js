const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pastel-violet": "#E9DEFA",
        "pastel-yellow": "#FBFCDB",
      },
      fontFamily: {
        sans: ["Kollektif", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        layout: "80px 1fr 100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
