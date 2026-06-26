import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const version = {
  service: 'docs',
  sha: process.env.GIT_SHA || 'dev',
  platform_version: process.env.PLATFORM_VERSION || 'unknown',
  built_at: new Date().toISOString(),
};

const outPath = path.join(__dirname, '../public/version.json');
fs.writeFileSync(outPath, JSON.stringify(version, null, 2) + '\n');

console.log('✅ Generated version.json:', version);
