/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-default": "rgb(48, 54, 61)",
      },
    },
  },
  plugins: [],
  important: true,
};
