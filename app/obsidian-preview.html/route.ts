import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Prototype-only: emit the standalone document as a registered static route.
export const dynamic = "force-static";

export async function GET() {
  const html = await readFile(
    join(process.cwd(), "public/obsidian/index.html"),
    "utf8",
  );
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
