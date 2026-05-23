/**
 * Downloads brand PNGs from the live IFS brochure (GitHub) into public/assets/.
 * Run: node scripts/fetch-brand-assets.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const base =
  'https://raw.githubusercontent.com/Roomen-nentropy/nentropy_brochure_ifsfocusdays/main/public/brochure-assets';

const files = [
  // Talisman poses (from brochure cut-outs)
  ['chaos-overwhelmed.png', 'assets/talisman/buried.png'],
  ['simply-works-man.png', 'assets/talisman/thumbs.png'],
  ['scanning-scene.png', 'assets/talisman/scan.png'],
  ['transparency-handshake.png', 'assets/talisman/handshake.png'],
  ['supply-logistics.png', 'assets/talisman/walk.png'],
  // Solution / section art
  ['chaos-overwhelmed.png', 'assets/brochure/ifs-graphics/chaos.png'],
  ['supply-logistics.png', 'assets/brochure/ifs-graphics/chain.png'],
  ['dpp-scan-flow.png', 'assets/brochure/ifs-graphics/digital.png'],
  ['automated-compliance.png', 'assets/brochure/ifs-graphics/comply.png'],
  ['dpp-qr-shopper.png', 'assets/brochure/ifs-graphics/passport.png'],
  ['transformation-machine.png', 'assets/brochure/ifs-graphics/machine.png'],
  ['outcome-future.png', 'assets/brochure/ifs-graphics/promise.png'],
];

async function copyLocalScreenshot() {
  const dest = path.join(root, 'public/assets/screenshot-platform.png');
  try {
    const stat = await fs.stat(dest);
    // Keep real QMS UI capture; do not overwrite with brochure sprite sheets.
    if (stat.size > 80_000) {
      console.log('Keeping existing screenshot-platform.png');
      return true;
    }
  } catch {
    /* file missing — try project root capture below */
  }
  const entries = await fs.readdir(root).catch(() => []);
  const shot = entries.find((n) => /^Screenshot.*qms.*\.png$/i.test(n));
  if (!shot) return false;
  await fs.copyFile(path.join(root, shot), dest);
  console.log(`Copied local screenshot: ${shot}`);
  return true;
}

async function download(name, destRel) {
  const dest = path.join(root, 'public', destRel);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  const url = `${base}/${name}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
  console.log(`OK ${destRel}`);
}

let ok = 0;
for (const [src, dest] of files) {
  try {
    await download(src, dest);
    ok++;
  } catch (e) {
    console.warn(`SKIP ${dest}: ${e.message}`);
  }
}

const gotShot = await copyLocalScreenshot();
if (!gotShot) {
  try {
    await download('layer-monitoring.png', 'assets/screenshot-platform.png');
    ok++;
  } catch (e) {
    console.warn(`No platform screenshot: ${e.message}`);
  }
}

const pdfSrc = path.join(root, 'BrochureIFS.pdf');
try {
  await fs.access(pdfSrc);
  const pubDir = path.join(root, 'public/publications');
  await fs.mkdir(pubDir, { recursive: true });
  await fs.copyFile(pdfSrc, path.join(pubDir, 'BrochureIFS.pdf'));
  console.log('OK publications/BrochureIFS.pdf');
} catch {
  console.log('No BrochureIFS.pdf at project root (optional)');
}

console.log(`\nDone. ${ok} remote files written.`);
