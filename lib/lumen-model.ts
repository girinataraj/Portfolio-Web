export type Attention = { x: number; y: number };
export function boundedAttention(x: number, y: number): Attention {
  const clamp = (v: number) =>
    Number.isFinite(v) ? Math.max(-1, Math.min(1, v)) : 0;
  return { x: clamp(x), y: clamp(y) };
}
export function approachAttention(
  current: Attention,
  target: Attention,
): Attention {
  const step = (a: number, b: number) =>
    Math.abs(b - a) < 0.002 ? b : a + (b - a) * 0.12;
  return { x: step(current.x, target.x), y: step(current.y, target.y) };
}
