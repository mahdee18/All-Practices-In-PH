/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#abfcc2",

          "secondary": "#a7f9cc",

          "accent": "#eb6dff",

          "neutral": "#3A2B3B",

          "base-100": "#EEE7EE",

          "info": "#2247EC",

          "success": "#25D08E",

          "warning": "#F3CE49",

          "error": "#F80D4F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

