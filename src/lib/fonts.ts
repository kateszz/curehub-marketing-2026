import localFont from "next/font/local";

/**
 * Epilogue — primary/body typeface.
 * Variable font, weights 100–900, includes an italic variable axis.
 * Exposed as the `--font-epilogue` CSS variable (mapped to the
 * `font-sans` Tailwind utility in globals.css).
 */
export const epilogue = localFont({
  src: [
    {
      path: "../fonts/Epilogue-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Epilogue-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-epilogue",
  display: "swap",
  weight: "100 900",
});

/**
 * Syne — display/heading typeface, also used for buttons and
 * accent/eyebrow labels. Variable font, weights 400–800.
 * Exposed as the `--font-syne` CSS variable (mapped to the
 * `font-display` Tailwind utility in globals.css).
 */
export const syne = localFont({
  src: [
    {
      path: "../fonts/Syne-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-syne",
  display: "swap",
  weight: "400 800",
});
