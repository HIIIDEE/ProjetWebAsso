# 🇩🇿 ANAPNA - Site Web Officiel

Site web de l'**Association Nationale de la Promotion du Numérique en Algérie** (ANAPNA).

## 🚀 Technologies

- **Framework**: Next.js 15.5.9
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Carousel**: Swiper
- **Language**: TypeScript

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## 🌐 Déploiement (Hébergement Mutualisé)

Le site utilise l'export statique de Next.js pour être compatible avec les hébergements mutualisés.

```bash
# Générer le dossier de production
npm run build

# Le dossier 'out' contient tous les fichiers à déployer
# Téléversez le contenu de 'out' sur votre serveur (httpdocs)
```

### ⚠️ Important pour le déploiement

- Assurez-vous que le dossier `_next` est bien uploadé
- Le fichier `.htaccess` est inclus pour la configuration Apache
- Vérifiez les permissions (755 pour les dossiers, 644 pour les fichiers)

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Mode sombre/clair
- ✅ Animations fluides
- ✅ Section membres fondateurs avec filtres
- ✅ Galerie d'événements passés
- ✅ Formulaire d'adhésion avec validation
- ✅ Optimisation SEO
- ✅ PWA ready (manifest.json)

## 📁 Structure du Projet

```
├── app/                    # Pages Next.js (App Router)
├── components/            
│   ├── layout/            # Header, Footer
│   ├── sections/          # Sections de la page d'accueil
│   └── ui/                # Composants réutilisables
├── data/                  # Données (membres, événements)
├── hooks/                 # Custom React hooks
├── context/               # Context API (Theme)
├── public/                # Assets statiques
└── utils/                 # Fonctions utilitaires

```

## 🎨 Personnalisation

Les couleurs principales sont définies dans `tailwind.config.ts` :
- **Vert** (#006233) : Couleur principale
- **Rouge** (#CC242B) : Couleur accent

## 📝 License

© 2025 ANAPNA - Tous droits réservés
