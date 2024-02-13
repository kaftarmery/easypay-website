/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-pink": "#FDC3FA",
        "pill-gray": "#191919",
        "pill-border": "#2E2E2E",
      },
      fontFamily: {
        babylon: "babylon",
        thiccboi: {
          "thiccboi-regular": "thiccboi-regular",
          bold: "thiccboi-bold",
        },
      },
    },
  },
  plugins: [],
};
