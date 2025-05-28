/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "border-grow": "border-grow 0.4s ease-in-out forwards",
        "float-glow": "float-glow 6s ease-in-out infinite",
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
        "border-grow": {
          "0%": {
            borderColor: "transparent",
            clipPath: "inset(0 100% 0 0)",
          },
          "100%": {
            borderColor: "#8b5cf6",
            clipPath: "inset(0 0 0 0)",
          },
        },
        "float-glow": {
          "0%": {
            transform: "translateY(0px)",
            boxShadow: "0 0 5px rgba(139, 92, 246, 0.5)",
          },
          "50%": {
            transform: "translateY(-15px)",
            boxShadow:
              "0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)",
          },
          "100%": {
            transform: "translateY(0px)",
            boxShadow: "0 0 5px rgba(139, 92, 246, 0.5)",
          },
        },
      },
    },
  },
  plugins: [],
};
