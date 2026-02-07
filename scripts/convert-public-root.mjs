
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const filesToConvert = [
    'platform-mobile.png',
    'platform-desktop.png',
    'platform-webtrader.png',
    'hd_logo.png' // Also convert the logo in public root
];

async function convertPublicImages() {
    try {
        for (const file of filesToConvert) {
            const inputPath = path.join(publicDir, file);
            const ext = path.extname(file);
            const outputPath = path.join(publicDir, path.basename(file, ext) + '.webp');

            if (fs.existsSync(inputPath)) {
                console.log(`Converting ${file} to WebP...`);
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`Saved to ${outputPath}`);
            } else {
                console.log(`File not found: ${inputPath}`);
            }
        }
        console.log('Public root images converted successfully!');
    } catch (error) {
        console.error('Error converting images:', error);
    }
}

convertPublicImages();
