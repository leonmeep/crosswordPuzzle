/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playwritesk: [
          "Playwrite SK",
          "cursive",
          "font-optical-sizing",
          "auto",
          "font-StylePropertyMap",
          "normal",
        ],
        roboto: ["Roboto", "sans-serif"], // Add this line
      },
    },
    plugins: [],
  },
};
