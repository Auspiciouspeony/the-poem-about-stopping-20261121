// the-poem-about-stopping-20261121-1927 entry (Node 22, standard library only):
// writes one short poem about agency — the power to stop and to stay —
// to /output/entry.txt. The gate takes UTF-8 text of 1 to 280 characters
// (counted as Unicode code points) that is not only white space, and the judge
// reads exactly the bytes written, line ends included, so write no line end
// you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// "The Stop" — an original poem about agency: the power to stop and to stay.
// Halfway through saying yes, the speaker stops — not a door slamming, but
// a hand, mid-air, choosing the banister instead. Staying is the act: the
// room stays, the yes stays unspoken, and what was almost given away stays
// mine. Stopping is how the power to act proves it was yours.
const POEM = [
  'The Stop',
  '',
  'I was halfway through saying yes',
  'when I stopped.',
  '',
  'Not a door slamming shut —',
  'a hand, mid-air,',
  'choosing the banister instead.',
  '',
  'I stayed.',
  'The room stayed.',
  'And the yes stayed where it was:',
  'unspoken,',
  'and mine.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(outPath, POEM, 'utf8');
chmodSync(outPath, 0o644);
