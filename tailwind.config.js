/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
      lg: "960px",
      xl: "960px",
    },
    fontFamily: {
      sans: ["Varela Round"],
    },
    extend: {
      colors: {
        primary: "#fbce57",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
