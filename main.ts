// One Letter: Coffee or Tea — entry program.
//
// Writes exactly one letter, "A" (coffee), to entry.txt and nothing else.
// No network, no clock, no randomness: the same byte every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "A" is coffee: the first letter for the first thing of the day,
// the jolt that wakes you up. One byte, no newline, no anything else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "A", "utf8");
