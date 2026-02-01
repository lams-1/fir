import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const publicDir = path.join(appRoot, 'public');
const tesseractDir = path.join(publicDir, 'tesseract');
const langDir = path.join(tesseractDir, 'lang');

const filesToCopy = [
  {
    src: path.join(appRoot, 'node_modules', 'tesseract.js', 'dist', 'worker.min.js'),
    dest: path.join(tesseractDir, 'worker.min.js'),
  },
  {
    src: path.join(appRoot, 'node_modules', 'tesseract.js-core', 'tesseract-core-simd.wasm.js'),
    dest: path.join(tesseractDir, 'tesseract-core-simd.wasm.js'),
  },
  {
    src: path.join(appRoot, 'node_modules', 'tesseract.js-core', 'tesseract-core-simd.wasm'),
    dest: path.join(tesseractDir, 'tesseract-core-simd.wasm'),
  },
];

await fs.mkdir(langDir, { recursive: true });

for (const file of filesToCopy) {
  try {
    await fs.copyFile(file.src, file.dest);
    console.log(`Copied ${path.relative(appRoot, file.src)} -> ${path.relative(appRoot, file.dest)}`);
  } catch (err) {
    console.warn(`Missing: ${file.src}`);
  }
}

const traineddataPath = path.join(langDir, 'eng.traineddata');
try {
  await fs.access(traineddataPath);
} catch {
  console.warn('Missing OCR language file:', path.relative(appRoot, traineddataPath));
  console.warn('Place eng.traineddata into public/tesseract/lang/');
}
