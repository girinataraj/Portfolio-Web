import { fileURLToPath } from "node:url";

process.chdir(fileURLToPath(new URL("../prototype-dist", import.meta.url)));
await import("../scripts/serve.mjs");
