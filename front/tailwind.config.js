

const plugin = require("tailwindcss/plugin")

const CustomStyle = plugin(function ({addUtilities}) {
  addUtilities({
    ".rotate-y-180" : {
      transform : "rotateY(180deg)"
    },
    ".rotate-y-360" : {
      transform : "rotateY(360deg)"
    },
    ".preserve-3d" : {
      transformStyle : "preserve-3d"
    },
    ".perspective-1000" : {
      perspective : "1000px"
    },
    ".backface-hidden" : {
      backfaceVisibility : "hidden",
    },
    ".backface-visible" : {
      backfaceVisibility : "visible",
    } 
  })
}) 

module.exports = {
  resolve: {
    fallback: {
      "fs": require.resolve("browserify-fs"),
      "path": require.resolve("path-browserify")
    }
  },
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [CustomStyle,require('daisyui'),
    require('@tailwindcss/aspect-ratio')],
}