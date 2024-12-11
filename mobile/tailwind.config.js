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
        background: colors.dark.background,
        accent: colors.dark.accent,
        primary: colors.dark.primary,
        primaryLight: colors.dark.primaryLight,
        primaryForeground: colors.dark.primaryForeground,
        card: colors.dark.card,
        text: colors.dark.text,
        muted: colors.dark.muted,
        destructive: colors.dark.destructive,
        destructiveForeground: colors.dark.destructiveForeground,
        border: colors.dark.border,
      },
    },
  },
  plugins: [],
}

