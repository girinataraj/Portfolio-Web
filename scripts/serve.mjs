import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { gzip } from "node:zlib";
import { promisify } from "node:util";
import { segmentFallback } from "../lib/static-export.mjs";
const compress = promisify(gzip);
const root = resolve("out");
const port = Number(process.env.PORT || 3000);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    let file = resolve(root, "." + pathname);
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    const info = await stat(file).catch(() => null);
    if (info?.isDirectory()) file = resolve(file, "index.html");
    let data = await readFile(file).catch(() => null);
    const segmentPath = !data && segmentFallback(pathname);
    if (segmentPath) {
      const fallbackFile = resolve(root, "." + segmentPath);
      if (fallbackFile.startsWith(root + sep)) {
        data = await readFile(fallbackFile).catch(() => null);
      }
    }
    if (!data) {
      const fallback = await readFile(resolve(root, "404.html")).catch(
        () => "Page not found. Run npm run build first.",
      );
      res.writeHead(404, { "Content-Type": "text/html" }).end(fallback);
      return;
    }
    const contentType = mime[extname(file)] ?? "application/octet-stream";
    const compressed =
      /\bgzip\b/.test(req.headers["accept-encoding"] ?? "") &&
      /^(text\/|application\/(json|xml)|image\/svg)/.test(contentType);
    const body = compressed ? await compress(data) : data;
    res
      .writeHead(200, {
        "Content-Type": contentType,
        "X-Content-Type-Options": "nosniff",
        Vary: "Accept-Encoding",
        ...(compressed ? { "Content-Encoding": "gzip" } : {}),
      })
      .end(body);
  } catch {
    if (!res.headersSent) res.writeHead(400);
    res.end("Bad request");
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Portfolio preview: http://127.0.0.1:${port}`),
);
