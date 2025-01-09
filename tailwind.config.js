/** @type {import('tailwindcss').Config} */
const plugin = require("tailwind-scrollbar");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"),

  ],
};
