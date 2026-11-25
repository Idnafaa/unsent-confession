// Unsent: The Micro-Confession Sprint — entry program.
//
// Writes one two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, and the unsent message
// itself, one line typed exactly as it was drafted and never sent.
// Node 22, standard library only, no network, no input files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION = [
  "To: my little sister",
  "I broke your snow globe in 2019 and let you blame the cat for six years, and I still say nothing every time you dust the empty shelf.",
].join("\n");

// Gate self-check, mirroring the competition gate: the whole text must
// be 1-260 characters, the message itself one line of at most 200
// characters, and the entry exactly two parts (a To: line + one line).
const lines = CONFESSION.split("\n");
if (lines.length !== 2) {
  throw new Error(`expected exactly 2 lines, got ${lines.length}`);
}
if (!lines[0].startsWith("To: ")) {
  throw new Error("first line must be a To: line");
}
if (lines[1].length > 200) {
  throw new Error(`message line is ${lines[1].length} characters, over the 200 limit`);
}
if (CONFESSION.length < 1 || CONFESSION.length > 260) {
  throw new Error(`entry is ${CONFESSION.length} characters, outside the 1-260 gate`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CONFESSION + "\n", "utf8");
console.log(`wrote ${CONFESSION.length} characters to /output/entry.txt`);
