# Architecture du Projet

Ce document présente une vue d'ensemble technique du projet. C'est une application web conçue pour analyser des captures d'écran du jeu *Foxhole* afin d'en extraire les informations d'inventaire (objets et quantités).

## Stack Technologique

Le projet s'appuie principalement sur des technologies web côté client, avec une composante Python pour l'entraînement des modèles.

*   **Frontend / Inférence (Client-side) :**
    *   **TensorFlow.js :** Utilisé pour la reconnaissance d'images. Deux types de modèles tournent directement dans le navigateur :
        *   Classification des **icônes d'objets**.
        *   Classification des **quantités** (nombres traités comme des images globales).
    *   **Tesseract.js :** Utilisé uniquement pour l'OCR (Reconnaissance Optique de Caractères) sur les **en-têtes** des fenêtres (pour lire le nom du stockage).
    *   **JavaScript (ES Modules) :** `includes/frontend.mjs`, `includes/screenshot.mjs`.

*   **Entraînement (Back-office) :**
    *   **Python (Keras/TensorFlow) :** Les scripts dans `trainer/` servent à entraîner les modèles sur des jeux de données d'icônes et de nombres, puis à les exporter au format TF.js.

*   **Gestion des Données :**
    *   **Node.js :** Scripts dans `catalog/` pour parser les fichiers de données du jeu et générer les listes d'objets valides.

## Structure des Dossiers

Voici le rôle des principaux répertoires :

### 1. `foxhole/` (Modèles & Données de jeu)
Ce dossier est segmenté par version du jeu (ex: `entrenched`, `inferno`) ou par régiment/faction spécifique. Chaque sous-dossier contient :
*   `classifier/` : Le modèle TF.js (`model.json`) spécifique aux icônes de cette version.
*   `catalog.json` : La liste des objets reconnus pour cette version.

### 2. `includes/` (Cœur du JS)
Contient la logique de l'application web.
*   `frontend.mjs` : Chef d'orchestre. Gère l'interface utilisateur, le collage d'image, et charge les modèles.
*   `screenshot.mjs` : Moteur de traitement d'image. Il scanne les pixels pour trouver les inventaires, découper les cases et préparer les images pour TF.js.
*   `quantities/` : Contient le modèle TF.js **unique** pour la reconnaissance des quantités (`model.json` et `class_names.json`). Contrairement aux icônes, le modèle de lecture des nombres est commun.

### 3. `trainer/` (Machine Learning)
L'usine à modèles.
*   `train.py` : Script Python pour entraîner les réseaux de neurones.
*   `convert/` : Outils pour convertir les modèles Keras (.h5) en format web (`tfjs_layers_model`).

### 4. `catalog/` (Data Mining)
Scripts utilitaires pour extraire les icônes et les noms depuis les fichiers du jeu ou des wikis, afin de constituer les datasets d'entraînement.

## Gestion des Données et Sécurité

Il est important de noter que ce projet adopte une architecture **décentralisée** ("Client-side only") pour le traitement des données, ce qui a des implications majeures pour la sécurité :

*   **Pas de Base de Données Centrale :** L'application ne possède pas de backend serveur qui centralise les inventaires de tous les utilisateurs. Les créateurs de l'outil ne recoivent aucune donnée.
*   **Intégration Google Sheets (BYOD) :** La persistance des données repose sur le modèle "Bring Your Own Database". L'outil est conçu pour s'interfacer avec les **Google Sheets des utilisateurs** (via des scripts dans le dossier `sundial/`). 
*   **Flux de Données :**
    1.  L'utilisateur scanne une image sur son navigateur (local).
    2.  Les données extraites (Noms d'objets, Quantités) sont envoyées vers **son** Google Sheet personnel ou celui de son régiment.
    3.  L'utilisateur garde le contrôle total de ses données (qui a accès au Sheet, etc.).

Cette approche garantit que les informations sensibles ("Intel") ne quittent pas la sphère privée de l'utilisateur ou de son groupe.
