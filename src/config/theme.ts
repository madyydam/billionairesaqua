/**
 * Central theme file. All colours used by both DOM (via CSS tokens in
 * src/styles.css) and the WebGL scene originate here.
 */
export const theme = {
  /** mid-grey studio background (matches the reference shot) */
  background: "#333333",
  backgroundDeep: "#1c1c1c",
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
