/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-secondary": '#e3f2ea',
        "color-delete": '#fbaba2',
      }
    },
  },
  plugins: [],
}