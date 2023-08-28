/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F8F8FF", // light bg
        secondary: "#001960", // dark blue
        tertiary: "#915eff", // light purple
        "blue": "#6977D0", // light blue
        "red": "#E34056", //red
      },
      boxShadow: {
         card: "0px 30px 120px -20px #B2BDFF",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};