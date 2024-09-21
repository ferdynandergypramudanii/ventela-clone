/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      montserrat: ["montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        logo: "#0f1385",
        primary: "#1a5cd6",
        secondary: "#012d80",
        tertiary: "#a1a19f",
      },
    },
    screens: {
      xs: "320px",
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
