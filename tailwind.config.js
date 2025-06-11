/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Só adicione se usar classes dinâmicas (ex: animate-${variavel})
  safelist: ["animate-float", "animate-glow", "animate-fade-in"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        c28: "#C28FFF",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(139, 92, 246, 0.5)" },
          "50%": {
            boxShadow:
              "0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)",
          },
          "100%": { boxShadow: "0 0 5px rgba(139, 92, 246, 0.5)" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
