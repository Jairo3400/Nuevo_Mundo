module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        doomRed: "#991b1b",
        doomGray: "#1f2937",
        doomBlack: "#111827", // ✅ Asegúrate de que esté esta línea
      },
    },
  },
  plugins: [],
};
