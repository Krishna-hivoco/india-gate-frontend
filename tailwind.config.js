/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "570px",
      md: "856px",
      lg: "1024px",
      xl: "1170px",
      // '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#FED700",
        "true-gray": {
          10: "#F5F5F5",
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      keyframes: {
        "slight-bounce": {
          "0%, 100%": {
            transform: "translateY(-3%)",
            "animation-timing-function": "linear",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "linear",
          },
        },
      },
      animation: {
        "slight-bounce": "slight-bounce 2.5s infinite",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        dotd: "repeat(2, minmax(280px, 1fr))",
        "dotd-2": "repeat(2, minmax(360px, 1fr))",
      },
      boxShadow: {
        search: [
          "0px -1px 6px -2px rgba(0, 0, 0, 0.1)",
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
        ],
        popup: "0 0 10px 5px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        // sans: ['Roboto', 'sans-serif'],
        OpenSans: ["Open Sans", "sans-serif"],
        Antonio: ["Antonio", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "custom-bg": "url('/assets/images/background.png')", // Replace with your image path
        "custom-bg-2": "url('/assets/images/background-2.png')", // Replace with your image path
        "custom-blur-bg": "url('/assets/images/blur-background.png')", // Replace with your image path
        "custom-mobile-bg": "url('/assets/images/new-mobile-bg.png')", // Replace with your image path


        "custom-gradient":
          "linear-gradient(to right, #682E21 0%, #895b51 50%, #682E21 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "3px 6px #682E21",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
