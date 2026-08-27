// Scroll-story math helpers. Every animated value in the Work section is a pure
// function of the normalized progress `p`, built from these.

export const clamp = (v: number, a: number, b: number) =>
  Math.max(a, Math.min(b, v));

/** Normalized sub-window: 0 before `a`, 1 after `b`, linear in between. */
export const seg = (p: number, a: number, b: number) =>
  clamp((p - a) / (b - a), 0, 1);

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Cubic in-out easing. */
export const ease = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
