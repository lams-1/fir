# React front — Documentation de session

## Objet du document
Ce fichier documente ce qui a été réalisé pendant la session, ainsi que le fonctionnement du client React (front_react) pour faciliter les évolutions futures, y compris par des agents IA.

## Résumé des actions de la session
- Création d’un front React séparé dans le dossier front_react (Vite + TypeScript).
- Séparation claire entre UI et logique de détection (dossier src/stockpile).
- Intégration TFJS pour la classification d’icônes et quantités.
- Intégration Tesseract.js (OCR) avec assets locaux (worker/wasm/lang).
- Ajout d’un pipeline d’assets pour le dev et le build (scripts Node).
- Mise en place d’un JSON brut en sortie (items + quantity + isCrated + DisplayName + CodeName).
- Stabilisation du pipeline OCR (problèmes de chemins + signature createWorker v5).
- Alignement du traitement screenshot sur la logique historique.
- Ajout de Mantine v7 (AppShell + Notifications) et routing côté front.
- Mise en place d’un AppShell et d’un layout multi-routes (Dashboard + Stockpile).
- Dark mode activé par défaut via Mantine.
- Ajout d’une page Stockpile en grille d’icônes (responsive), avec quantités en badge.
- Ajout d’une page Stockpile (multi screen) permettant l’import de plusieurs images via un Dropzone.
- Mise en place de l’agrégation des quantités par item (CodeName + isCrated) pour le multi-upload.
- Intégration de @mantine/dropzone pour une meilleure expérience d’upload (drag-and-drop).
- Optimisation du traitement multi-fichiers en séquentiel pour garantir la stabilité de l’OCR.
- Mise en place d’une file d’attente manuelle pour le multi-upload : les images s’accumulent et l’analyse est déclenchée par un bouton dédié.
- Ajout d’une galerie de prévisualisation des fichiers sélectionnés avec affichage des noms de fichiers.

## Architecture du client React
### Dossiers clés
- front_react/src
  - App.tsx : AppShell + routing (Dashboard/Stockpile).
  - pages/ : pages routées (Dashboard, Stockpile).
  - stockpile/ : logique de traitement indépendante de l’UI.
    - config.ts : Définition de la version du jeu (par défaut `airborne-63`).
  - pages/StockpileIconsPage.tsx : grille d’icônes + quantités (masque les items à 0).
  - pages/StockpileMultiScreenPage.tsx : version multi-images avec cumul automatique des quantités via Dropzone.
- front_react/public
  - tesseract/ : assets OCR (worker, wasm, langues).

### Modules principaux (src/stockpile)
- config.ts
  - Gère la version via une constante ou `VITE_APP_FOXHOLE_VERSION`.
- resources.ts
  - Construit les URLs d’assets (catalogue, class_names, modèles).
- detector.ts
  - Pipeline de détection : charge l’image, crée un canvas, appelle Screenshot.process, normalise le résultat en JSON minimal.
- screenshot.ts
  - Implémentation de la détection (stockpile + items + quantités + header).
- ocr.ts
  - Wrapper Tesseract.js (scheduler + workers + paramètres OCR).

## Fonctionnement du pipeline
1) UI
- StockpilePage récupère la version via `loadConfig()` (donnée locale/env).
- L’utilisateur upload une image.
- StockpilePage appelle createDetector().processFile(file).

2) Chargement des ressources
- resources.ts construit les URLs selon VITE_ASSET_BASE ou le serveur Vite.
- Chargement du catalogue, des class_names et des modèles TFJS.

3) Détection stockpile
- screenshot.ts tente d’extraire la zone de stockpile.
- Découpe en lignes/colonnes, identifie icônes et quantités.

4) Classification
- TFJS classe les icônes et les quantités.
- OCR Tesseract est utilisé pour les en‑têtes (type + nom + quantité globale si possible).

5) Normalisation JSON
- detector.ts mappe la sortie en structure minimale par item :
  - CodeName, DisplayName, quantity, isCrated

## OCR (Tesseract) — Configuration finale
- Tesseract.js v5 utilisé en mode worker.
- createWorker est appelé avec la langue eng directement (API v5).
- Assets locaux servis depuis public/tesseract.
- Fichier requis : public/tesseract/lang/eng.traineddata
- Paramètres OCR :
  - tessedit_pageseg_mode = 7
  - tessedit_char_whitelist selon usage

## Développement local
Scripts utiles (front_react/package.json) :
- npm run dev
  - Lance Vite + serveur racine pour assets repo (par défaut).
- npm run dev:app
  - Vite standard (front uniquement).
- npm run dev:root-assets
  - Lance Vite + serveur racine pour assets repo.

En dev, le front lit les assets depuis :
- VITE_ASSET_BASE (ou proxy Vite), configuré dans vite.config.ts

## Build de production
- npm run build:bundle-assets
  - Build Vite dans dist-bundle
  - Copie des assets nécessaires dans dist-bundle

## Déploiement en production (VPS)
Objectif : servir un site statique (dist-bundle) via un serveur web (ex: Nginx).

### Étapes côté VPS
1) Pré-requis
- Node.js (compatible avec la version du projet).
- Nginx (ou autre serveur statique).

2) Récupération du projet
- Cloner le dépôt sur le VPS ou déployer un artefact (zip) contenant front_react.

3) Build
- Dans front_react :
  - npm install
  - npm run build:bundle-assets
- Le dossier prêt à servir est front_react/dist-bundle

4) Déploiement des fichiers
- Copier front_react/dist-bundle vers un répertoire public (ex: /var/www/front_react).

5) Nginx (exemple minimal)
- Racine : /var/www/front_react
- Index : index.html
- Assurer le fallback SPA vers index.html

Exemple de bloc serveur (adapter domaine/chemin) :

server {
  listen 80;
  server_name <votre_domaine>;

  root /var/www/front_react;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}

6) Vérifications
- Ouvrir l’URL publique.
- Vérifier que les assets OCR sont chargés :
  - /tesseract/worker.min.js
  - /tesseract/tesseract-core-simd.wasm.js
  - /tesseract/lang/eng.traineddata

### Déploiement derrière un sous-chemin (ex: /front_react/)
Si le front est servi sous un sous-chemin, il faut configurer la base Vite :
- Mettre base: '/front_react/' dans front_react/vite.config.ts
- Rebuild (npm run build:bundle-assets)
- Nginx doit servir dist-bundle sous /front_react/

### Remarques
- Le build produit tous les assets nécessaires (TFJS + Tesseract + modèles).
- Aucun backend n’est requis pour le front lui-même.

## Déploiement en production (Docker)
Le front est déployable en conteneur via un build multi‑stage (Node -> Nginx).

### Fichiers ajoutés
- front_react/Dockerfile
- front_react/nginx.conf

### Build de l’image
- Construire depuis le dossier front_react.
- Le build exécute : npm install + npm run build:bundle-assets.

### Exemple d’exécution
- Lancer un conteneur exposant le port 80.
- Le contenu statique servi est /usr/share/nginx/html.

### Remarques Docker
- Si vous servez sous un sous‑chemin, ajuster base dans vite.config.ts avant build.
- Vérifier que les assets OCR sont bien accessibles : /tesseract/worker.min.js, /tesseract/tesseract-core-simd.wasm.js, /tesseract/lang/eng.traineddata.

### Dokploy + Traefik
- Nginx n’est pas obligatoire si Dokploy expose le conteneur via Traefik.
- Vous pouvez garder Nginx (simple et léger) ou remplacer par un serveur statique Node.

### Déploiement Dokploy (production)
Déploiement actuel : https://300.lams-cloud1.work/

Paramètres recommandés :
- Build context : racine du dépôt (repo root)
- Dockerfile : front_react/Dockerfile
- Container port : 80
- Domain path : /

Notes TLS/DNS :
- Cloudflare proxy désactivé pendant l’émission du certificat (DNS only).
- HTTPS/TLS activé côté Dokploy (Traefik gère le certificat).

## Points de vigilance connus
- Tesseract.js v5 requiert l’API createWorker('eng', ...).
- Les chemins d’assets OCR doivent être servis par Vite (public/tesseract).
- Le résultat dépend fortement de la qualité et du cadrage de la capture.
- L’UI est désormais routée (AppShell), la page Stockpile est accessible via /stockpile.
- La page Stockpile multi-screen (/stockpile-multi) utilise un Dropzone pour accumuler les fichiers, puis traite la file séquentiellement après déclenchement manuel.
- La page Stockpile icônes charge les images depuis /foxhole/<version>/icons/<CodeName>(-crated).png.

## Fichiers importants à consulter
- front_react/src/stockpile/ocr.ts
- front_react/src/stockpile/screenshot.ts
- front_react/src/stockpile/detector.ts
- front_react/src/stockpile/resources.ts
- front_react/src/App.tsx
- front_react/src/pages/StockpilePage.tsx
- front_react/src/pages/StockpileIconsPage.tsx
- front_react/src/pages/StockpileMultiScreenPage.tsx
- front_react/src/pages/DashboardPage.tsx
- front_react/vite.config.ts
- front_react/scripts/prepare-tesseract-assets.mjs
- front_react/scripts/build-bundle-assets.mjs

## Notes pour évolutions futures (agents IA)
- Préserver la séparation UI / stockpile.
- Modifier la logique de détection dans screenshot.ts en priorité.
- Adapter resources.ts pour supporter plusieurs versions en prod.
- Ajouter un mode multi‑upload dans App.tsx.
- Vérifier la compatibilité de Tesseract.js lors des upgrades.
