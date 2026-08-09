/**
 * Real asset slots.
 *
 * Drop the exported models into /public/models and point these constants at
 * them — the whole scroll experience keeps working, nothing else changes.
 * Draco-compressed GLB is supported (drei's loader uses the hosted decoder).
 *
 *   /public/models/product.glb      -> the bottle
 *   /public/models/packaging.glb    -> outer packaging for the reveal scene
 *   /public/models/accessories.glb  -> optional extras
 */
export const MODELS: {
  product: string | null;
  packaging: string | null;
  accessories: string | null;
} = {
  product: null,
  packaging: null,
  accessories: null,
};

/** vertical offset + uniform scale applied to an imported GLB so it matches the placeholder */
export const MODEL_TRANSFORM = {
  product: { scale: 1, position: [0, 0, 0] as [number, number, number] },
  packaging: { scale: 1, position: [0, 0, 0] as [number, number, number] },
};
