/** Accommodate nested segment files emitted by the Windows static exporter. */
export function segmentFallback(pathname) {
  const marker = pathname.lastIndexOf("/__next.");
  if (marker < 0 || !pathname.endsWith(".txt")) return null;
  const parts = pathname.slice(marker + 8, -4).split(".");
  if (parts.length < 2 || !parts.every((part) => /^[\w$-]+$/.test(part)))
    return null;
  return `${pathname.slice(0, marker)}/__next.${parts[0]}/${parts.slice(1).join("/")}.txt`;
}
