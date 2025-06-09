import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/labomeca-design-1.jpg',
    filename: 'hero-bg.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/usinage-cnc.jpg',
    filename: 'usinage-cnc.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/usinage-conventionnel.jpg',
    filename: 'usinage-conventionnel.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/prototypage.jpg',
    filename: 'prototypage.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/chaudronnerie-service.jpg',
    filename: 'chaudronnerie-service.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/chaudronnerie-expertise.jpg',
    filename: 'chaudronnerie-expertise.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/groupe-vente.jpg',
    filename: 'groupe-vente.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/groupe-installation.jpg',
    filename: 'groupe-installation.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/groupe-maintenance.jpg',
    filename: 'groupe-maintenance.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/groupe-controle.jpg',
    filename: 'groupe-controle.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/solaire-solutions.jpg',
    filename: 'solaire-solutions.jpg'
  },
  {
    url: 'https://labomeca.fr/wp-content/uploads/2024/01/solaire-avantages.jpg',
    filename: 'solaire-avantages.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, 'src', 'assets', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
};

downloadAllImages(); 