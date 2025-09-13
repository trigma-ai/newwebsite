/*
 Localize Figma Dev Mode assets
 - Scans source files for http://localhost:PORT/assets/<hash>.<ext>
 - Downloads each asset to public/figma-assets/
 - Rewrites the code to reference /figma-assets/<hash>.<ext>
 Usage: node scripts/localize-figma-assets.js
*/

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const SOURCE_DIRS = [
  path.join(process.cwd(), 'src', 'components'),
  path.join(process.cwd(), 'src', 'pages'),
];
const DEST_DIR = path.join(process.cwd(), 'public', 'figma-assets');

/** Regex to match Figma Dev Mode asset URLs */
const ASSET_URL_REGEX = /https?:\/\/localhost:\d+\/assets\/([a-f0-9]+)\.(svg|png|jpg|jpeg|webp|gif)\b/gi;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else if (/\.(tsx?|jsx?)$/i.test(e.name)) files.push(full);
  }
  return files;
}

function download(url, outPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirects
        return resolve(download(res.headers.location, outPath));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed ${url}: ${res.statusCode}`));
      }
      const file = fs.createWriteStream(outPath);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function main() {
  ensureDir(DEST_DIR);

  const files = SOURCE_DIRS.flatMap(walk);
  const urlToLocal = new Map();
  const uniqueUrls = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = ASSET_URL_REGEX.exec(content)) !== null) {
      const fullUrl = match[0];
      const hash = match[1];
      const ext = match[2];
      const localRel = `/figma-assets/${hash}.${ext}`;
      urlToLocal.set(fullUrl, localRel);
      uniqueUrls.add(JSON.stringify({ fullUrl, hash, ext }));
    }
  }

  // Download assets
  const downloadJobs = Array.from(uniqueUrls).map((s) => JSON.parse(s)).map(async ({ fullUrl, hash, ext }) => {
    const outPath = path.join(DEST_DIR, `${hash}.${ext}`);
    if (fs.existsSync(outPath)) return; // skip
    try {
      await download(fullUrl, outPath);
      // eslint-disable-next-line no-console
      console.log(`Downloaded: ${fullUrl} -> ${path.relative(process.cwd(), outPath)}`);
    } catch (err) {
      console.warn(`WARN: ${err.message}`);
    }
  });

  await Promise.all(downloadJobs);

  // Rewrite files
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    for (const [remote, local] of urlToLocal.entries()) {
      if (content.includes(remote)) {
        content = content.split(remote).join(local);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Rewrote: ${path.relative(process.cwd(), file)}`);
    }
  }

  console.log('Done. If some downloads failed, ensure the Figma Dev Mode assets server is running and re-run the script.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});











