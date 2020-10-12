/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: ".dark-mode"
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    rounded: ["dark","responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
    typography: ["dark", "responsive"]
  },
  plugins: [
    require('@tailwindcss/ui'),
    require("tailwindcss-dark-mode")()
]
};
