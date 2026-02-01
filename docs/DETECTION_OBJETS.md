# Détection et Classification d'Objets

Ce document détaille le processus par lequel l'application identifie quel objet (Rifle, Ammo, Mats, etc.) est présent dans une case d'inventaire.

## Pipeline de Reconnaissance

Le flux de traitement part d'une capture d'écran brute pour arriver au nom de l'objet. Ce processus est principalement géré par `includes/screenshot.mjs`.

### 1. Prétraitement de l'image
Lorsqu'un utilisateur colle une image (`Ctrl+V`), le script analyse les pixels pour isoler la fenêtre d'inventaire. Il repère les contours sombres caractéristiques de l'interface utilisateur de Foxhole.

### 2. Segmentation (La stratégie "Anchor")
Plutôt que de chercher les icônes directement (qui sont très variées en forme et couleur), l'algorithme cherche d'abord les **Quantités**.
*   Dans l'interface du jeu, chaque objet a une petite case grise dans le coin inférieur droit indiquant le nombre d'objets.
*   L'algorithme scanne l'image pour trouver ces boîtes grises (`quantity box`).
*   Une fois une boîte grise trouvée, le système déduit que la zone située immédiatement **à gauche et au-dessus** contient l'icône de l'objet associé.

### 3. Extraction et Normalisation
*   La zone correspondant à l'icône est découpée ("crop").
*   L'image découpée est redimensionnée à une taille standard de **32x32 pixels**.
*   C'est ce format standardisé qui est attendu par le réseau de neurones.

### 4. Classification (TensorFlow.js)
*   L'image 32x32 est passée au modèle chargé (situé dans `foxhole/<version>/classifier/model.json`).
*   Le modèle retourne un vecteur de probabilités correspondant chacune à un objet connu (définis dans `class_names.json`).
*   L'application sélectionne la classe avec la plus haute probabilité.

## Entraînement du Modèle

Le modèle est entraîné en Python (`trainer/train.py`).
*   **Entrée :** Milliers d'images d'icônes 32x32 extraites du jeu.
*   **Sortie :** Le nom de l'objet.
*   Une fois entraîné, le modèle est converti pour être utilisable dans le navigateur sans backend serveur.
