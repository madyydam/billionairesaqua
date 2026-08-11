/**
 * Central theme file. All colours used by both DOM (via CSS tokens in
 * src/styles.css) and the WebGL scene originate here.
 */
export const theme = {
  /** charcoal grey background */
  background: "#2D3738",
  backgroundDeep: "#1F2627",
  /** mint off-white typography */
  foreground: "#E6F7F5",
  muted: "#7B8C8D",
  /** brand bottle green / teal */
  brand: "#006B5D",
  brandDark: "#004D43",
  brandLight: "#00A99D",
  /** authentic metallic champagne gold matching the bottle label */
  gold: "#D4AF37",
  goldLight: "#E5C158",
  accentBlue: "#1A8CFF",
} as const;

export type Theme = typeof theme;
