# Dépendances et Intégration avec le Dépôt Principal

Ce document détaille les liens forts entre l'application `front_react` et le reste du dépôt `fir` (le "Dépôt Principal"). Comprendre ces dépendances est crucial pour la maintenance et les mises à jour futures.

## 1. Duplication de Logique (Code "Jumeau")

Pour fonctionner de manière autonome côté client (navigateur) tout en garantissant des résultats identiques à l'outil legacy, certaines logiques métier critiques ont été portées de JavaScript (`.mjs`) vers TypeScript (`.ts`).

| Composant                   | Fichier React (TypeScript)    | Source Originale (Legacy) | Niveau de Risque |
| :-------------------------- | :---------------------------- | :------------------------ | :--------------- |
| **Algorithme de Découpage** | `src/stockpile/screenshot.ts` | `includes/screenshot.mjs` | 🔴 **Élevé**     |
| **Moteur OCR**              | `src/stockpile/ocr.ts`        | `includes/ocr.mjs`        | 🟡 **Moyen**     |

### Impacts & Maintenance

- **Si `screenshot.mjs` change :** `screenshot.ts` **DOIT** être mis à jour manuellement. Toute modification des seuils de couleur, de la logique de fusion des boîtes ou du redimensionnement dans le fichier source entraînera une divergence silencieuse des résultats si elle n'est pas reportée.
- **Si `ocr.mjs` change :** Vérifier si les paramètres de Tesseract (whitelist, mode de segmentation) ont évolué et les reporter dans `ocr.ts`.

> **Note :** Le code TypeScript a été volontairement écrit pour ressembler structurellement au code JavaScript original (mêmes noms de variables, structure des fonctions) afin de faciliter les "diffs" et le report de code.

## 2. Dépendances de Données (Runtime)

L'application React ne contient pas les données du jeu (icônes, modèles IA, catalogue). Elle les télécharge dynamiquement au lancement.

### Structure attendue à la racine

L'application s'attend à trouver l'arborescence suivante à la racine du serveur web (ou du dépôt en dev) :

```text
/
├── foxhole/
│   └── <VERSION>/               # Ex: airborne-63 (défini dans config.ts)
│       ├── catalog.json         # Données des items
│       └── classifier/
│           ├── model.json       # Modèle TFJS Icônes
│           └── class_names.json # Labels
└── includes/
    └── quantities/
        ├── model.json           # Modèle TFJS Quantités
        └── class_names.json     # Labels (chiffres)
```

### Impacts

- **Changement de version Foxhole :** Si une nouvelle mise à jour sort (nouveau dossier `foxhole/inferno-xx`), il faut mettre à jour la variable `DEFAULT_FOXHOLE_VERSION` dans `src/stockpile/config.ts`.
- **Changement de format JSON :** Si le script Python qui génère `catalog.json` change sa structure, le typage TypeScript dans `src/stockpile/resources.ts` devra être ajusté, sinon l'application plantera au chargement.

## 3. Dépendances de Build (Pipeline)

Le processus de build pour la production (`npm run build:bundle-assets`) n'est pas isolé. Il dépend de fichiers situés **en dehors** du dossier `front_react`.

### Script : `scripts/build-bundle-assets.mjs`

Ce script est responsable de l'auto-suffisance de l'application compilée. Il copie les ressources du dépôt principal vers le dossier de sortie `dist-bundle`.

**Ce qu'il copie :**

1.  Le dossier de la version courante : `../../foxhole/airborne-63` ➡️ `dist-bundle/foxhole/airborne-63`
2.  Le dossier des modèles quantités : `../../includes/quantities` ➡️ `dist-bundle/includes/quantities`

### Impacts

- **Renommage de dossiers racine :** Si le dossier `foxhole` est renommé ou déplacé à la racine du projet, le script de build échouera.
- **Mise à jour de version :** Le script de build contient actuellement la version `airborne-63` en dur. Si la version par défaut change, il faut modifier ce script pour copier le bon dossier.

## Résumé des points de vigilance

1.  **Surveiller `includes/screenshot.mjs`** : Toute modif doit être répliquée.
2.  **Mettre à jour `config.ts`** quand une nouvelle guerre/update Foxhole sort.
3.  **Vérifier le script de build** pour s'assurer qu'il embarque les bons assets.
