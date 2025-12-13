# Optimisation des Images - Guide

## Images Actuelles

Le projet utilise actuellement :
- `napdz_logo.png` (183 KB) - Logo principal
- `logo_napddz.svg` (316 KB) - Logo SVG

## Recommandations d'Optimisation

### 1. Optimiser le Logo PNG

Le logo PNG de 183 KB peut être optimisé :

**Option A : Compression sans perte**
```bash
# Installer TinyPNG CLI (ou utiliser https://tinypng.com/)
npm install -g tinypng-cli

# Optimiser l'image
tinypng public/napdz_logo.png
```

**Option B : Convertir en WebP**
```bash
# Installer sharp
npm install sharp

# Créer un script d'optimisation
node scripts/optimize-images.js
```

### 2. Créer des Versions Responsive

Pour améliorer les performances, créez plusieurs tailles :
- `napdz_logo-192.png` (192x192) - Icône mobile
- `napdz_logo-512.png` (512x512) - Icône PWA
- `napdz_logo-1200.png` (1200x630) - Open Graph

### 3. Optimiser le SVG

Le SVG de 316 KB est volumineux. Optimisez-le :

```bash
# Installer SVGO
npm install -g svgo

# Optimiser le SVG
svgo public/logo_napddz.svg
```

## Script d'Optimisation Automatique

Créez `scripts/optimize-images.js` :

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 512, 1200];
const inputImage = 'public/napdz_logo.png';

async function optimizeImages() {
  // Créer des versions WebP
  for (const size of sizes) {
    await sharp(inputImage)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .webp({ quality: 90 })
      .toFile(`public/napdz_logo-${size}.webp`);
    
    console.log(`✓ Créé napdz_logo-${size}.webp`);
  }

  // Créer des versions PNG optimisées
  for (const size of sizes) {
    await sharp(inputImage)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(`public/napdz_logo-${size}.png`);
    
    console.log(`✓ Créé napdz_logo-${size}.png`);
  }
}

optimizeImages().then(() => {
  console.log('✓ Optimisation terminée !');
}).catch(err => {
  console.error('Erreur:', err);
});
```

## Utilisation dans le Code

Après optimisation, mettez à jour `manifest.json` :

```json
{
  "icons": [
    {
      "src": "/napdz_logo-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/napdz_logo-192.webp",
      "sizes": "192x192",
      "type": "image/webp"
    },
    {
      "src": "/napdz_logo-512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/napdz_logo-512.webp",
      "sizes": "512x512",
      "type": "image/webp"
    }
  ]
}
```

## Gains Attendus

- **Réduction de taille** : 40-60% avec compression
- **Meilleur format** : WebP réduit de 25-35% vs PNG
- **Performance** : Temps de chargement réduit de 30-50%
- **Score Lighthouse** : +5 à +10 points

## Note

L'optimisation des images n'est pas critique pour le déploiement initial, mais améliore significativement les performances. Vous pouvez le faire après le premier déploiement.
