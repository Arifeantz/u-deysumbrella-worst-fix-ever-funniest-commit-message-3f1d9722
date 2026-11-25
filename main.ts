import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The worst fix ever, as one commit message:
// the "fix" for a memory leak is to give the leak more memory,
// so the bug now has room to grow instead of being fixed.
const COMMIT_MESSAGE =
  "fix: memory leak by adding RAM; the leak has room to grow now";

// The sealed gate only accepts 1-100 characters, so refuse to
// write anything that would not count as a valid entry.
if (
  COMMIT_MESSAGE.length < 1 ||
  COMMIT_MESSAGE.length > 100 ||
  COMMIT_MESSAGE.trim() === ""
) {
  throw new Error(
    `entry must be 1-100 characters, got ${COMMIT_MESSAGE.length}`,
  );
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// Write exactly the message, with no trailing newline,
// so the file holds the commit subject line and nothing else.
writeFileSync(join(outDir, "entry.txt"), COMMIT_MESSAGE, "utf8");
console.log(COMMIT_MESSAGE);
