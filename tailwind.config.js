/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00a497",
        blue: "#00a3af",
        heading: "#302833",
        body: "#595857",
        light: "#f3f3f3",
        pinkLight: "#fdeff2",
        yellowLight: "#f4dda5",
        purpleLight: "#dbd0e6",
        redLight: "#e597b2",
        white: "#ffffff",
        black: "#0d0015",
      },
    },
  },
  plugins: [],
};
