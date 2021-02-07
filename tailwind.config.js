const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        transparent: "transparent",
        current: "currentColor",
        gray: colors.trueGray,
      },
    },
  },
};
