# Analyse de Stock (Reconnaissance des Quantités)

L'une des particularités de ce projet est sa méthode pour lire les nombres (quantités d'objets). Contrairement aux attentes traditionnelles, il n'utilise pas un moteur OCR standard (comme Tesseract) pour cette tâche spécifique.

## Pourquoi pas d'OCR classique ?

*   Les polices de caractères dans les jeux vidéo sont souvent stylisées, de petite taille, ou ont un anti-aliasing qui perturbe les OCR classiques conçus pour du texte scanné sur papier.
*   La segmentation caractère par caractère ("1", "0", "0") peut être fragile sur des petits nombres flous.

## L'Approche "Classification d'Image"

Le projet traite chaque nombre complet comme une **image unique**. Le nombre "100" n'est pas lu comme "1" suivi de "0" et "0", mais reconnu comme le symbole visuel "100".

### Le Processus

1.  **Extraction de la "Grey Box" :**
    *   Comme décrit dans la détection d'objets, l'algorithme isole la petite boîte grise en bas à droite de chaque slot d'inventaire.
    *   Cette boîte contient le texte de la quantité (ex: "16", "200", "5k").

2.  **Seuillage (Thresholding) :**
    *   L'image de la boîte est convertie en noir et blanc pour maximiser le contraste du texte blanc sur fond gris.

3.  **Classification (Modèle `includes/quantities/`) :**
    *   L'image entière est envoyée à un modèle TensorFlow.js dédié.
    *   Ce modèle a été entraîné pour reconnaître environ **3000 classes** différentes.
    *   Chaque classe correspond à une valeur possible (ex: une classe pour l'image "1", une classe pour l'image "50k+").

### Avantages et Inconvénients

*   **Avantage :** Extrêmement rapide et précis pour les valeurs connues et récurrentes (stacks standards).
*   **Inconvénient :** Si le jeu introduit une nouvelle quantité jamais vue (un nombre bizarre non présent dans l'entraînement), le modèle ne pourra pas le "lire", il devinera la forme la plus proche ou échouera. C'est pourquoi le dossier `quantities` contient une liste massive de classes.

## Tesseract.js : Le Rôle Secondaire

Le projet utilise tout de même la librairie `Tesseract.js` (OCR classique), mais uniquement pour une tâche :
*   Lire l'**en-tête de la fenêtre** (le titre du stockage, ex: "Seaport", "Base Supplies").
*   Comme ce texte est plus grand et moins standardisé que les quantités fixes, l'OCR classique est plus adapté ici.
