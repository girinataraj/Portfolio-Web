export function assertPreview(env = process.env) {
  if (
    env.VERCEL_ENV === "production" ||
    env.VERCEL_GIT_COMMIT_REF === "main" ||
    (env.VERCEL === "1" &&
      (env.VERCEL_ENV !== "preview" ||
        env.VERCEL_GIT_COMMIT_REF !== "codex/obsidian-v3-implementation"))
  ) {
    throw new Error("V3 is not approved for production. Preview builds only.");
  }
}
