/**
 * Central theme file. All colours used by both DOM (via CSS tokens in
 * src/styles.css) and the WebGL scene originate here.
 */
export const theme = {
  /** deep charcoal studio background */
  background: "#0b0c0c",
  backgroundDeep: "#050606",
  /** warm off-white typography */
  foreground: "#efe9dc",
  muted: "#8f8d86",
  /** brand bottle green */
  brand: "#0e3b2c",
  brandDark: "#07231a",
  brandLight: "#1d6a4f",
  /** metallic gold accent */
  gold: "#c8a24a",
  goldLight: "#e6cf92",
} as const;

export type Theme = typeof theme;
