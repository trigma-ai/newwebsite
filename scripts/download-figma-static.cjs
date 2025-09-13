// Downloads a hardcoded set of Figma Dev Mode asset URLs into public/figma-assets
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const DEST_DIR = path.join(process.cwd(), 'public', 'figma-assets');

const URLS = Array.from(new Set([
  // From 0:71, 41:92, 0:168, 0:246, 0:34
  'http://localhost:3845/assets/f47a6f3ce466879f46424abd48c468246859209c.svg',
  'http://localhost:3845/assets/f4976cb82f6925a8ff6e1e8de3f367e354a3c064.svg',
  'http://localhost:3845/assets/8655af214153099cdf0c752f9a61037dc35d2a34.svg',
  'http://localhost:3845/assets/a4759ad3140aa26dd9cad22db80757e536823ded.svg',
  'http://localhost:3845/assets/f3d1884c65ab6a640346d35b819f01f102c51bab.svg',
  'http://localhost:3845/assets/35e830042706699bb44c462bbfad74ce373ea36d.svg',
  'http://localhost:3845/assets/552425edc9993a432f862e6cb629c2a89d6f8036.svg',
  'http://localhost:3845/assets/5d22040a4db3db95037a1ee89b6b16c29b859749.svg',
  'http://localhost:3845/assets/7b2ec95a41c20e8575feed45d653f4af54a41061.svg',
  'http://localhost:3845/assets/45e023bae4e07718b70d4bd5f61cadd1de860f3b.svg',
  'http://localhost:3845/assets/f22c7c14fa0bc4af5423876d225bf5ece652335f.svg',
  'http://localhost:3845/assets/f8224a32808cc1657ab19a209d0b7fb24c69275b.svg',
  'http://localhost:3845/assets/e79b9e6137dd055edb617edd0cfc5a07bb165d1a.svg',
  'http://localhost:3845/assets/910fbf553348745a87310b83a04d4967b470f1fc.svg',
  'http://localhost:3845/assets/c0056d64ca18e4e799e7195e1833247cb6e3fe52.svg',
  'http://localhost:3845/assets/3c008c6c31fc2e14c46184008f58d48453a7018f.svg',
  'http://localhost:3845/assets/dc028006abbb290ee56eb61b72fd7a308258ba43.svg',
  'http://localhost:3845/assets/b7fff21e1fd7e141a50cbcd54dec9895ec7acedf.svg',
  'http://localhost:3845/assets/9f107f7aa47c119e27c485390bcfc698c268233d.svg',
  'http://localhost:3845/assets/7d21a6c9cfe099005a0dfe9b036d6ff22585d18f.svg',
  'http://localhost:3845/assets/90f2795e078c40d9aca6bb99a80c9808f55c643a.svg',
  'http://localhost:3845/assets/978ab0cc3315b3b4437b64066cd50b733be1d359.svg',
  'http://localhost:3845/assets/23aa260e5f5e171f3701ffa34b977c0c0556d455.svg',
  'http://localhost:3845/assets/efce883703bb386b6fa2c7cabb49c8693ef28918.svg',
  'http://localhost:3845/assets/bde23f2834beba3a8496d07a497626245da9bb37.svg',
  'http://localhost:3845/assets/43a99ff4be4ce032c85194bdda2dec9650018966.svg',
  'http://localhost:3845/assets/369f7abef874355096550dc0d9b274dc8f0387a0.svg',
  'http://localhost:3845/assets/4518168086bb3740145550aa4ea21f7777adff05.svg',
  'http://localhost:3845/assets/1a9b29d2ed55424f7a4962c97546d16fd840cc66.svg',
  'http://localhost:3845/assets/34872826258ff22793710dc363d0304269a6a7a0.svg',
  'http://localhost:3845/assets/15af764a02896385d95c59582650f2ce03034cf0.svg',
  'http://localhost:3845/assets/f33d644ed181df63dbd0f756f35160b58d7f4ff0.svg',
  'http://localhost:3845/assets/61e0287ffa45205a8597694ae0b09e7692980673.svg',
  'http://localhost:3845/assets/40887139b900e0b0de7ff3ece95da6164dc58ef2.svg',
  'http://localhost:3845/assets/d8f70c15f83ff6e6b33041f72a09b7f858f0c950.svg',
  'http://localhost:3845/assets/0427895ff957e69c9c0934ad9a6755c14f0aab2f.svg',
  'http://localhost:3845/assets/3f422b3a38534816ca901386f0c359879b05a4de.svg',
]));

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function fetchOnce(url, outPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchOnce(res.headers.location, outPath));
      }
      if (res.statusCode !== 200) return reject(new Error(`Failed ${url}: ${res.statusCode}`));
      const file = fs.createWriteStream(outPath);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => req.destroy(new Error(`Timeout downloading ${url}`)));
  });
}

async function download(url, outPath) {
  try {
    await fetchOnce(url, outPath);
  } catch (e) {
    // Fallback: try 127.0.0.1 instead of localhost
    if (url.includes('://localhost:')) {
      const fallback = url.replace('://localhost:', '://127.0.0.1:');
      await fetchOnce(fallback, outPath);
    } else {
      throw e;
    }
  }
}

async function main() {
  ensureDir(DEST_DIR);
  for (const url of URLS) {
    const name = url.split('/').pop();
    const out = path.join(DEST_DIR, name);
    if (fs.existsSync(out)) {
      console.log(`Exists: ${name}`);
      continue;
    }
    try {
      await download(url, out);
      console.log(`Downloaded: ${name}`);
    } catch (e) {
      console.warn(`WARN: ${e.message}`);
    }
  }
  console.log('Static download complete.');
}

main().catch((e) => { console.error(e); process.exit(1); });


