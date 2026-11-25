import { writeFileSync, mkdirSync } from "node:fs";
import { ENTRY_LINE } from "./line.ts";

// Gate: the entry must be a single line of 1-200 characters.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 200 ||
  ENTRY_LINE.includes("\n") ||
  ENTRY_LINE.trim().length === 0
) {
  throw new Error(
    `entry line fails the gate: ${ENTRY_LINE.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
