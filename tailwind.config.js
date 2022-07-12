/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        140: "40rem",
        100: "28rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
