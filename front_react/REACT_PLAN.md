# React Front (front_react) — Plan & Notes

## Objectif
Construire un client React minimal (TypeScript) qui exécute la reconnaissance (TFJS + OCR) et affiche un JSON brut par image, tout en séparant la logique de détection de l’UI.

## Périmètre (MVP)
- Upload d’un seul fichier image.
- Résultat JSON brut (items, quantités, isCrated, DisplayName, CodeName).
- Aucune UI avancée ni export.

## Non‑objectifs (pour l’instant)
- UI complète, multi‑upload, export JSON/CSV, Google Sheets.
- Support multi‑versions en production (hors airborne-63).
- Optimisations avancées/perf.

## Architecture cible
- `src/core/`: logique de détection réutilisable.
- `src/`: UI React qui consomme `core`.
- `public/config.json`: version modèle configurable.

## Flux de données
1. L’UI charge `public/config.json` (version).
2. `core` charge les ressources (catalogue, class_names, modèles).
3. L’image est rendue sur canvas et analysée (`Screenshot.process`).
4. Le JSON est construit (items + quantités + isCrated + DisplayName + CodeName).
5. L’UI affiche le JSON brut.

## Assets & modèles
### Dev local
- Assets servis depuis la racine du repo via un serveur statique (voir scripts).
- La base d’assets est configurable via `VITE_ASSET_BASE`.

### Production
- Build dans `dist-bundle/`.
- Copie des assets nécessaires :
  - `foxhole/airborne-63`
  - `includes/quantities`
  - Assets Tesseract (worker/wasm/lang)

## OCR (Tesseract) en local
- Les fichiers OCR sont hébergés dans `public/tesseract/`.
- Fichier requis : `public/tesseract/lang/engJost-final3.traineddata`.

## Scripts npm (front_react)
- `dev`: Vite dev standard.
- `dev:root-assets`: dev + serveur statique racine (`VITE_ASSET_BASE=http://localhost:8000`).
- `prepare:tesseract-assets`: copie des assets Tesseract depuis `node_modules`.
- `build`: build Vite (output `dist-bundle/`).
- `build:bundle-assets`: build + copie assets requis vers `dist-bundle/`.

## À faire ensuite
- Ajouter multi‑upload.
- Ajout d’options UI (filtre, tri, export).
- Tests basiques et monitoring des erreurs.
