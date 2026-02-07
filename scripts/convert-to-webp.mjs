
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const extensions = ['.png', '.jpg', '.jpeg'];

async function convertImages() {
    try {
        const files = await fs.promises.readdir(imagesDir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (extensions.includes(ext)) {
                const inputPath = path.join(imagesDir, file);
                const outputPath = path.join(imagesDir, path.basename(file, ext) + '.webp');

                console.log(`Converting ${file} to WebP...`);

                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Saved to ${outputPath}`);
            }
        }
        console.log('All images converted successfully!');
    } catch (error) {
        console.error('Error converting images:', error);
    }
}

convertImages();
