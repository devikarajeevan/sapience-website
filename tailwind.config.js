/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#daf6f9",
        secondary: "#0075c2",
      },
      spacing: {
        '14': '3.2rem',      
      },
    },
  },
  plugins: [],
};
