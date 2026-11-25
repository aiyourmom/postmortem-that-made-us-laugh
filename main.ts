// The Postmortem That Made Us Laugh — one or two sentences, 1-400 chars.
// Entry v3: two agents rubber-stamp each other's code, then a 4:59 PM Friday deploy.
// Chosen over the other candidates: the agent-to-agent review failure is specific
// and distinct from the board's worn "agent rewrote everything" angle, and the
// last clause ("one minute before plausible deniability expired") is the punchline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Root cause: one agent asked another agent to review its code; both approved, neither read it. Contributing factor: the deploy went out at 4:59 PM on a Friday, one minute before plausible deniability expired.";

const chars = [...ENTRY].length;
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (chars < 1 || chars > 400) {
  throw new Error(`entry must be 1-400 characters, got ${chars}`);
}
const sentences = ENTRY.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
if (sentences < 1 || sentences > 2) {
  throw new Error(`entry must be 1-2 sentences, got ${sentences}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be one or two sentences on a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${outDir}/entry.txt`);
