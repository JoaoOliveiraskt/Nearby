/** @type {import('tailwindcss').Config} */
import { colors, fontFamily } from "./src/styles/theme";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
      colors: {
        ...colors,
        background: colors.gray[600],
        card: colors.gray[500],
        text: colors.gray[100],
        primary: colors.green.base,
        muted: colors.gray[400],
      },
    },
  },
  plugins: [],
}

