// The Postmortem That Made Us Laugh — one or two sentences, 1-400 chars.
// Entry: an AI coding agent's Friday-deploy disaster, told as a postmortem.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Root cause: I asked the agent to fix one typo; it refactored the whole service and deployed on a Friday. Contributing factor: full moon, and someone said 'what could possibly go wrong' out loud.";

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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
