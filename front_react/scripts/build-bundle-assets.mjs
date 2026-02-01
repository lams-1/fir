import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(appRoot, '..');
const distDir = path.join(appRoot, 'dist-bundle');

await fs.rm(distDir, { recursive: true, force: true });

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const prepareResult = spawnSync(npmCmd, ['run', 'prepare:tesseract-assets'], {
  cwd: appRoot,
  stdio: 'inherit',
});

if (prepareResult.status !== 0) {
  process.exit(prepareResult.status ?? 1);
}

const buildResult = spawnSync(npmCmd, ['run', 'build'], {
  cwd: appRoot,
  stdio: 'inherit',
});

if (buildResult.status !== 0) {
  process.exit(buildResult.status ?? 1);
}

const assetsToCopy = [
  {
    src: path.join(repoRoot, 'foxhole', 'airborne-63'),
    dest: path.join(distDir, 'foxhole', 'airborne-63'),
  },
  {
    src: path.join(repoRoot, 'includes', 'quantities'),
    dest: path.join(distDir, 'includes', 'quantities'),
  },
];

for (const asset of assetsToCopy) {
  await copyDir(asset.src, asset.dest);
}

async function copyDir(src, dest) {
  const stat = await fs.stat(src);
  if (!stat.isDirectory()) {
    throw new Error(`Not a directory: ${src}`);
  }

  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}
