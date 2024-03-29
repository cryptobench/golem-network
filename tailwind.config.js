module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1800px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "2000px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        golemblue: "#0c14d4",
        discordblue: "#404eed",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
}
