import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'src/assets/projects');
const files = fs.readdirSync(dir).filter((file) => file.toLowerCase().endsWith('.jpg'));

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(/\.jpg$/i, '.webp'));

  await sharp(input)
    .resize({
      width: 1280,
      height: 800,
      fit: 'cover',
      withoutEnlargement: true,
      position: 'centre',
    })
    .webp({ quality: 72, effort: 6 })
    .toFile(output);

  console.log(`converted ${file} -> ${path.basename(output)}`);
}
