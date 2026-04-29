export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#92BFB1",
        accent: "#F4AC45",
        secondary: "#694A38",
        background: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },

      backgroundImage: {
        "hero-mobile": "url('/SAF_bg_vertical.jpeg')",
        "hero-desktop": "url('/SAF_bg_horizontal.jpeg')",
      },
    },
  },
  plugins: [],
};
