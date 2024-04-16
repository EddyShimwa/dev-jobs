/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#5964E0",
        "light-violet": "#939BF4",
        "midnight" : "#121721",
        "dark-blue": "#19202D",
        "light-grey": "#F4F6F8",
        gray: "#9DAEC2",
        "dark-gray": "#6E8098",
      },
      fontFamily: {
        kumb: ["Kumbh Sans", "sans-serif"],
      },
      backgroundImage: {
        "image-mobile": "url(/src/assets/mobile/bg-pattern-header.svg)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
