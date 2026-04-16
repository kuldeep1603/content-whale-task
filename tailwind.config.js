export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zen: ["Zen Old Mincho", "serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        // main color
        primary: "#1A1B27",
        secondary: "#E9E990",
        tertiary: "#CEB0F0",

        // text color
        "text-primary": "#FEFFED",
        "text-secondary": "#24252D",
        "text-tertiary": "#677369",
        "text-quaternary": "#F9F9F9",
      },
      backgroundImage: {
        "benefits-bg-1": "url('/assets/images/benefits/benefits-bg-1.png')",
        "benefits-bg-2": "url('/assets/images/benefits/benefits-bg-2.png')",
        "benefits-bg-3": "url('/assets/images/benefits/benefits-bg-3.png')",
        "benefits-bg-4": "url('/assets/images/benefits/benefits-bg-4.png')",
        "Commitment-bg": "url('/assets/images/Commitment/bg.png')",
      },
    },
  },
  plugins: [],
};
