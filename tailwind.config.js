/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      montserrat: ["montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        logo: "#0f1385",
        primary: "#1a5cd6",
        secondary: "#012d80",
      },
    },
    screens: {
      xs: "320px",
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
  },
  plugins: [],
};
