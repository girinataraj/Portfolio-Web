import { copyFile, cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

// This branch is a visual approval artifact. Never replace production with it.
if (
  process.env.VERCEL_ENV === "production" ||
  (process.env.VERCEL === "1" &&
    (process.env.VERCEL_ENV !== "preview" ||
      process.env.VERCEL_GIT_COMMIT_REF !== "codex/obsidian-v3-prototype")) ||
  (process.env.VERCEL_GIT_COMMIT_REF &&
    process.env.VERCEL_GIT_COMMIT_REF !== "codex/obsidian-v3-prototype")
) {
  throw new Error("OBSIDIAN is preview-only. Production builds are blocked.");
}

const output = resolve("prototype-dist/out");
await mkdir(resolve(output, "projects/v2"), { recursive: true });
await cp("public/obsidian", resolve(output, "obsidian"), { recursive: true });
await copyFile("public/obsidian/index.html", resolve(output, "index.html"));
await copyFile("public/icon.svg", resolve(output, "icon.svg"));
for (const image of [
  "queue-staff-desktop.webp",
  "queue-customer-desktop.webp",
  "sacred-stillness.webp",
]) {
  await copyFile(
    resolve("public/projects/v2", image),
    resolve(output, "projects/v2", image),
  );
}
console.log("OBSIDIAN static prototype built. Run node prototypes/preview-obsidian.mjs");
