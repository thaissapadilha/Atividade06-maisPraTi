/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ← ESSENCIAL para que dark:bg-* funcione
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
