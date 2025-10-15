# Guide de Déploiement - Site Statique ANAPNA

## Vue d'ensemble

Ce site Next.js est configuré pour être exporté en tant que site statique HTML. Tous les fichiers nécessaires sont générés dans le dossier `out/` après le build.

## Génération des fichiers statiques

Pour générer les fichiers statiques, exécutez :

```bash
npm run export
```

Cette commande va :
1. Compiler l'application Next.js
2. Générer tous les fichiers HTML statiques
3. Créer le dossier `out/` avec tous les assets nécessaires

## Structure du dossier `out/`

```
out/
├── _next/              # Assets JavaScript et CSS
│   ├── static/        # Fichiers statiques (CSS, JS, fonts)
│   └── ...
├── 404/               # Page 404
├── index.html         # Page d'accueil
├── favicon.ico        # Icône du site
└── *.svg              # Autres assets
```

## Déploiement sur un serveur mutualisé

### Méthode 1 : Via FTP/SFTP

1. **Générez les fichiers statiques** :
   ```bash
   npm run export
   ```

2. **Connectez-vous à votre serveur** via FTP/SFTP en utilisant un client comme :
   - FileZilla
   - WinSCP
   - Cyberduck

3. **Uploadez le contenu du dossier `out/`** vers le répertoire racine de votre site web (généralement `public_html/`, `www/`, ou `htdocs/`)

4. **Assurez-vous que tous les fichiers sont uploadés**, y compris :
   - Le fichier `index.html`
   - Le dossier `_next/`
   - Tous les fichiers `.svg` et `.ico`

### Méthode 2 : Via le gestionnaire de fichiers cPanel

1. **Générez les fichiers statiques** :
   ```bash
   npm run export
   ```

2. **Compressez le dossier `out/`** en fichier ZIP

3. **Connectez-vous à cPanel**

4. **Accédez au Gestionnaire de fichiers**

5. **Naviguez vers** `public_html/` (ou votre répertoire web)

6. **Uploadez le fichier ZIP**

7. **Extrayez le contenu** du fichier ZIP

8. **Déplacez tous les fichiers** du sous-dossier `out/` vers le répertoire racine

## Configuration du serveur

### Fichier .htaccess (Apache)

Créez un fichier `.htaccess` à la racine de votre site avec ce contenu :

```apache
# Activer la compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Activer le cache navigateur
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Redirection vers HTTPS (optionnel)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Gestion des erreurs 404
ErrorDocument 404 /404.html

# Support des trailing slashes
DirectoryIndex index.html

# Sécurité
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

## Vérification du déploiement

Après le déploiement, vérifiez que :

1. ✅ La page d'accueil se charge correctement
2. ✅ Toutes les sections sont visibles (Hero, Stats, Services, Events, About, Contact, Membres Fondateurs)
3. ✅ Les images et icônes s'affichent correctement
4. ✅ La navigation fonctionne (smooth scroll vers les sections)
5. ✅ Le site est responsive (testez sur mobile et tablette)
6. ✅ Les liens email dans la section Contact fonctionnent
7. ✅ La page 404 s'affiche pour les URLs invalides

## Mise à jour du site

Pour mettre à jour le site :

1. Modifiez les fichiers sources localement
2. Testez en local avec `npm run dev`
3. Générez les nouveaux fichiers statiques avec `npm run export`
4. Uploadez le contenu du dossier `out/` vers votre serveur (écrasez les anciens fichiers)

## Performance

Le site statique offre d'excellentes performances :
- ⚡ Pas de serveur Node.js requis
- ⚡ Temps de chargement très rapide
- ⚡ Compatible avec les CDN
- ⚡ Coûts d'hébergement minimaux
- ⚡ Haute disponibilité

## Hébergement recommandé

Ce site peut être hébergé sur :
- **Serveurs mutualisés** : OVH, O2switch, Hostinger, etc.
- **CDN/Static Hosting** : Netlify, Vercel, Cloudflare Pages, GitHub Pages
- **VPS/Serveurs dédiés** : Via Apache ou Nginx

## Support

Pour toute question sur le déploiement, contactez votre hébergeur ou consultez leur documentation.

---

**Taille du site** : ~1.2 MB
**Technologie** : Next.js 15 (Static Export)
**Dernière mise à jour** : Octobre 2025
