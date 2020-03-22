// module.exports = {
//   theme: {},
//   variants: {},
//   plugins: [],
// }
const responsiveFont = (minFontSize, maxFontSize, minWidth, maxWidth) => ({
  fontSize: `${minFontSize}px`,
  [`@media (min-width: ${minWidth}px)`]: {
    fontSize: `calc(${minFontSize}px + ${maxFontSize -
      minFontSize} * ((100vw - ${minWidth}px) / ${maxWidth - minWidth}))`,
  },
  [`@media (min-width: ${maxWidth}px)`]: {
    fontSize: `${maxFontSize}px`,
  },
  lineHeight: "1.15",
})

module.exports = {
  theme: {
    borderRadius: {
      none: "0",
      full: "9999px",
    },
    borderWidth: {
      default: "4px",
      "0": "0",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      green: {
        default: "#29CB7E",
        dark: "#2aa96d",
      },
      pink: "#FFCAD4",
      orange: "#FEBD93",
      blue: "#BDE8FF",
      purple: "#CCBCFF",
      yellow: "#FFEC97",
      red: "#cb3f29",
      grey: {
        light: "#F8F7F5",
        default: "#E7E1DC",
        dark: "#9D938E",
      },
      smoke: "rgba(0,0,0,0.4)",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
    },
    fontFamily: {
      sans: ["NetlifeSansY", "Helvetica", "sans-serif"],
      lining: ["NetlifeSansY", "Helvetica", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    lineHeight: {
      normal: 1.5,
      none: 1,
      "extra-none": 0.75,
      "1-1": 1.1,
      "1-2": 1.2,
      "1-3": 1.3,
      "1-4": 1.4,
    },
    screens: {
      sm: "32rem",
      md: "44rem",
      lg: "52rem",
      xl: "56rem",
    },
    rotate: {
      "0": "0deg",
      "2neg": "-2deg",
      "3neg": "-3deg",
      "4neg": "-4deg",
      "5neg": "-5deg",
      "6neg": "-6deg",
      "2": "2deg",
      "3": "3deg",
      "4": "4deg",
      "5": "5deg",
      "6": "6deg",
    },
    boxShadow: {
      outline: "0 0 0 3px black",
    },

    extend: {
      spacing: {
        // WIP - merge some of these values (2,4,7?)
        "2vw": "2vw",
        "2-5vw": "2.5vw",
        "4vw": "4vw",
        "5vw": "5vw",
        "7-5vw": "7.5vw",
      },
      margin: {
        "-px-2": "-2px",
      },
      scale: {
        "130": "1.3",
      },
      minHeight: {
        "0": "0",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
        full: "100%",
        screen: "100vh",
      },
      maxHeight: {
        "1-2": "50vh",
        "2-3": "66.66vh",
        "3-4": "75vh",
        "4-5": "80vh",
      },
      inset: {
        "1": "1rem",
        "2": "2rem",
        "3": "3rem",
        "4": "4rem",
      },
    },
  },
  corePlugins: {
    fontSize: false,
    opacity: false,
  },
  variants: {
    borderWidth: ["responsive", "last"],
    zIndex: ["hover"],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    
    function({ addUtilities }) {
      const newUtilities = {
        ".text-base": responsiveFont(18, 36.25, 1152, 2256),
        ".text-lg": responsiveFont(26, 58, 1040, 2320),
        ".text-xl": responsiveFont(26, 116, 934, 2560),
        ".text-huge": responsiveFont(28, 190, 934, 2560),
        ".text-massive": responsiveFont(90, 500, 934, 2560),
      }

      addUtilities(newUtilities, {
        variants: ["responsive"],
      })
    },
  ],
}
