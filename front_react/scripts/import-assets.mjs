import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const publicDir = path.join(appRoot, "public");

// Default source: assume 'fir' is a sibling folder of the current project
// If we are in workspace/300_tools, ../fir is likely workspace/fir
const defaultFirPath = path.resolve(appRoot, "..", "fir");
const sourceRoot = process.argv[2] || defaultFirPath;

console.log(`Importing assets from: ${sourceRoot}`);
console.log(`Destination: ${publicDir}`);

async function copyDir(src, dest) {
  try {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`Warning: Source directory not found: ${src}`);
    } else {
      throw err;
    }
  }
}

// We hardcode the version here or we could read it from src/stockpile/config.ts if strictly parsed
// For now, consistent with DEPENDENCIES.md
const FOXHOLE_VERSION = "airborne-63";

const assetsToCopy = [
  {
    src: path.join(sourceRoot, "foxhole", FOXHOLE_VERSION),
    dest: path.join(publicDir, "foxhole", FOXHOLE_VERSION),
  },
  {
    src: path.join(sourceRoot, "includes", "quantities"),
    dest: path.join(publicDir, "includes", "quantities"),
  },
];

console.log("Starting copy...");
for (const asset of assetsToCopy) {
  console.log(`Copying ${asset.src} -> ${asset.dest}`);
  await copyDir(asset.src, asset.dest);
}
console.log("Assets imported successfully.");
