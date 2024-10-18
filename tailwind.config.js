module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          accent: "#f79d2b",
          "dark-100": "#2D2D2D",
          "dark-200": "#282828",
          "dark-300": "#1F1F1F",
          "light-100": "#FFF",
          "light-200": "#F4F4F4",
          "light-300": "#AFAFAF",
          "light-400": "#7C7C7C", // 606060
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1536px",
      },
      keyframes: {
        "move-down-bounce": {
          "0%, 100%, 20%, 50%, 80%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-20px)" },
          "60%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
