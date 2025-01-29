/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {
    extend: {
      colors: {
        primary: {
          100: "#B39DDB",
          200: "#81D4FA ",
        },
        secondary: {
          100: "#F8BBD0",
          200: "#CE93D8",
          300: "#FFEBEE ",
        },
      },
    },
    plugins: [],
  },
};

