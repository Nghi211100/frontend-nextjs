/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        868: "868px",
        408: "408px",
        140: "43rem",
        130: "40rem",
        180: "180px",
        68: "17rem",
        "ab-header": "10rem",
        76: "304px",
        59: "14.95rem",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
