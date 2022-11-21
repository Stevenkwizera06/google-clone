/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#adb2b7",
        "primary-blue": "#4285f4;",
        "secondary-dark-blue": "#8ab4f8",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xsm: "0.813rem",
      },
      boxShadow: {
        main: "0 1px 6px rgb(32 33 36 / 28%)",
      },
    },
  },
  plugins: [],
};
