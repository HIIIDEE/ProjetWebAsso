# Guide de Déploiement - ANAPNA

## Prérequis
- Node.js 18+ installé
- Accès FTP/SFTP à votre hébergement mutualisé
- Domaine configuré (ex: nap-dz.org)

## Étapes de Déploiement

### 1. Build de Production

```bash
npm run deploy
```

Cette commande va :
- Générer le site statique dans le dossier `/out`
- Optimiser tous les assets (JS, CSS, images)
- Créer le sitemap.xml automatiquement

### 2. Vérification Locale

Avant de déployer, vérifiez le build :

```bash
# Installer un serveur HTTP simple
npm install -g serve

# Tester le build localement
serve out
```

Ouvrez http://localhost:3000 et vérifiez que tout fonctionne.

### 3. Upload sur le Serveur

#### Via FTP/SFTP (FileZilla, WinSCP, etc.)

1. Connectez-vous à votre serveur
2. Naviguez vers le dossier public_html (ou www, public, etc.)
3. **Uploadez TOUT le contenu du dossier `/out`** (pas le dossier lui-même)

Structure attendue sur le serveur :
```
public_html/
├── index.html
├── adhesion/
│   └── index.html
├── _next/
│   └── static/
├── .htaccess
├── robots.txt
├── sitemap.xml
├── manifest.json
└── napdz_logo.png
```

#### Via cPanel File Manager

1. Connectez-vous à cPanel
2. Ouvrez "File Manager"
3. Allez dans public_html
4. Cliquez "Upload"
5. Uploadez tous les fichiers du dossier `/out`

### 4. Configuration du Domaine

Assurez-vous que :
- Le domaine pointe vers le dossier contenant les fichiers
- HTTPS est activé (certificat SSL)
- Le fichier `.htaccess` est bien présent

### 5. Vérifications Post-Déploiement

#### Tests Fonctionnels
- [ ] Page d'accueil charge correctement
- [ ] Navigation vers /adhesion/ fonctionne
- [ ] Toutes les sections sont visibles
- [ ] Formulaire de contact fonctionne
- [ ] Images chargent correctement
- [ ] Responsive fonctionne (mobile/tablet)

#### Tests SEO
- [ ] Vérifier https://nap-dz.org/sitemap.xml
- [ ] Vérifier https://nap-dz.org/robots.txt
- [ ] Tester avec Google Search Console
- [ ] Vérifier Open Graph : https://www.opengraph.xyz/

#### Tests Performance
- [ ] Google PageSpeed Insights : https://pagespeed.web.dev/
- [ ] GTmetrix : https://gtmetrix.com/
- [ ] Lighthouse (Chrome DevTools)

### 6. Optimisations Serveur (Optionnel)

Si votre hébergeur le permet :

#### Activer Brotli (meilleur que Gzip)
Contactez votre hébergeur pour activer Brotli compression.

#### Configurer le CDN
Si vous utilisez Cloudflare :
1. Ajoutez votre site à Cloudflare
2. Activez "Auto Minify" (HTML, CSS, JS)
3. Activez "Brotli"
4. Configurez les règles de cache

## Mises à Jour

Pour mettre à jour le site :

1. Modifiez les fichiers source
2. Testez en local : `npm run dev`
3. Buildez : `npm run deploy`
4. Uploadez uniquement les fichiers modifiés

**Astuce** : Gardez une copie du dossier `/out` pour comparer les changements.

## Dépannage

### Erreur 404 sur les pages
- Vérifiez que `.htaccess` est présent
- Vérifiez que `trailingSlash: true` est dans next.config.ts
- Vérifiez que les URLs se terminent par `/`

### Images ne chargent pas
- Vérifiez que le dossier `/public` a bien été uploadé
- Vérifiez les permissions des fichiers (644 pour fichiers, 755 pour dossiers)

### CSS/JS ne charge pas
- Videz le cache du navigateur (Ctrl+Shift+R)
- Vérifiez que le dossier `/_next/static/` est complet
- Vérifiez les headers de cache dans `.htaccess`

### HTTPS ne fonctionne pas
- Contactez votre hébergeur pour activer SSL
- Utilisez Let's Encrypt (gratuit) si disponible
- Vérifiez la redirection HTTP → HTTPS dans `.htaccess`

## Support

Pour toute question technique :
- Consultez la documentation Next.js : https://nextjs.org/docs
- Vérifiez les logs de votre hébergeur
- Contactez le support de votre hébergeur

## Checklist Finale

Avant de considérer le déploiement comme terminé :

- [ ] Site accessible via HTTPS
- [ ] Toutes les pages fonctionnent
- [ ] Score Lighthouse > 90
- [ ] Sitemap soumis à Google Search Console
- [ ] Robots.txt accessible
- [ ] Open Graph fonctionne (test Facebook/LinkedIn)
- [ ] Site responsive testé
- [ ] Formulaires testés
- [ ] Analytics configuré (si applicable)

---

**Félicitations !** Votre site ANAPNA est maintenant en ligne ! 🎉
