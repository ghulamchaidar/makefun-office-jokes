// Make the AI Judge Laugh: Office Jokes - one line about office life to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "Our team standup has one recurring agenda item: nine people in a row saying 'no blockers' to the same blocker we have been quietly feeding for three weeks.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
