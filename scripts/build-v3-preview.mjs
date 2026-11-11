import { assertPreview } from "./preview-guard.mjs";
import { spawnSync } from "node:child_process";
assertPreview();
const result = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build"],
  { stdio: "inherit" },
);
process.exit(result.status ?? 1);
