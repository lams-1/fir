# Migration du Front React

Le dossier `front_react` a été extrait vers un dépôt autonome nommé **300_tools** pour faciliter son déploiement et son évolution indépendante.

## Nouveau dépôt

- **Nom du dépôt :** `300_tools` (situé au même niveau que ce projet)
- **Objectif :** Héberger l'application frontend React/Vite de manière isolée.

## Procédure d'extraction réalisée

1.  Copie de l'intégralité du dossier `front_react` vers le nouveau dépôt (exclusion faite de `node_modules` et `dist`).
2.  Ajout du script `scripts/import-assets.mjs` dans le nouveau dépôt pour gérer la dépendance aux assets statiques.
3.  Ce script copie les données nécessaires (catalogue, modèles IA) depuis ce dépôt (`fir`) vers le dossier `public/` du nouveau front.

## Cycle de vie des Assets

Le nouveau dépôt **300_tools** dépend toujours de **fir** pour la génération des données (catalogue Foxhole, entraînement des modèles).

Pour mettre à jour les données dans le nouveau front :

1.  Générer les nouvelles données dans `fir` (via scripts Python existants).
2.  Aller dans `300_tools`.
3.  Lancer `npm run import-assets`.
4.  Rebuilder/Redéployer le front.

> **Note :** Le dossier `front_react` est conservé ici pour l'instant mais est voué à être supprimé ou archivé une fois la migration validée.
