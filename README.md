-----

# A-FASHION

-----

## Table des Matières

  - [Description du Projet](https://www.google.com/search?q=%23description-du-projet)
  - [Fonctionnalités](https://www.google.com/search?q=%23fonctionnalit%C3%A9s)
  - [Technologies Utilisées](https://www.google.com/search?q=%23technologies-utilis%C3%A9es)
  - [Installation et Démarrage](https://www.google.com/search?q=%23installation-et-d%C3%A9marrage)
  - [Structure du Projet](https://www.google.com/search?q=%23structure-du-projet)
  - [Utilisation](https://www.google.com/search?q=%23utilisation)
  - [Contribution](https://www.google.com/search?q=%23contribution)
  - [Crédits](https://www.google.com/search?q=%23cr%C3%A9dits)
  - [Licence](https://www.google.com/search?q=%23licence)

-----

## Description du Projet

Ce projet est une application web front-end dynamique (ou "site e-commerce simplifié", "catalogue de produits", etc.) conçue pour présenter des articles de mode. Il intègre des fonctionnalités avancées pour une expérience utilisateur interactive, incluant des filtres de produits, un affichage dynamique des informations de taille, et des animations fluides. L'objectif est de fournir une interface utilisateur intuitive et visuellement agréable.

## Fonctionnalités

Voici les principales fonctionnalités de l'application :

  * **Affichage Dynamique des Produits :** Les articles sont chargés et affichés dynamiquement sur la page principale.
  * **Système de Filtrage Avancé :** Les utilisateurs peuvent filtrer les produits par **genre** (Homme, Femme, Neutre) et par **catégories** (Chaussures, Hauts, Bas, etc.), avec la possibilité de sélectionner **plusieurs catégories** simultanément.
  * **Page de Tableau des Tailles (Size Chart) Dynamique :** Une page dédiée affiche un tableau des tailles spécifique à l'article sélectionné, avec la possibilité de basculer entre les **unités Impériales (pouces) et Métriques (cm)**. Les changements d'unité sont accompagnés d'une animation visuelle.
  * **Animations au Défilement (Scroll) :** Des animations en cascade sont déclenchées lorsque certains éléments (comme les logos des partenaires) entrent dans la vue de l'utilisateur grâce à l'**Intersection Observer**.
  * **Navigation Active :** L'élément de navigation correspondant à la page actuellement visitée est mis en évidence (`active-bar`) pour une meilleure orientation de l'utilisateur.
  * **Gestion Robuste des Images :** Le chargement des images de produit est géré de manière à anticiper et corriger les problèmes de chemin (notamment avec les espaces dans les noms de fichiers).

## Technologies Utilisées

  * **HTML5 :** Structure sémantique du contenu.
  * **CSS3 :** Stylisation et animations (transitions, `@keyframes`).
  * **JavaScript (ES6+) :** Logique front-end dynamique, manipulation du DOM, gestion des événements, **Fetch API** pour le chargement des données, **Intersection Observer** pour les animations au défilement.
  * **(Optionnel: Vite.js) :** Pour un environnement de développement rapide et un build optimisé.

## Installation et Démarrage

Pour obtenir une copie locale fonctionnelle du projet, suivez ces étapes simples.

### Prérequis

  * Un navigateur web moderne (Chrome, Firefox, Edge, Safari).
  * (Optionnel: Node.js et npm/yarn si tu utilises Vite ou d'autres outils de build JS).

### Installation

1.  **Clonez le dépôt :**

    ```bash
    git clone https://github.com/votre-utilisateur/votre-repo.git
    cd A-Fashion-Code-Source
    ```

2.  **Ouvrez les fichiers HTML :**
    Ce projet est principalement basé sur du HTML, CSS et JavaScript côté client. Vous pouvez simplement ouvrir les fichiers `index.html`, `products.html`, ou `sizechart.html` directement dans votre navigateur.

    *Pour un développement local plus robuste ou si vous utilisez Vite :*

    ```bash
    # Si vous utilisez Node.js et npm/yarn
    npm install # ou yarn install
    npm run dev # ou yarn dev (pour démarrer le serveur de développement Vite)
    ```

## Structure du Projet

```
votre-repo/
├── index.html                  # Page d'accueil / affichage des produits
├── products.html               # Page de liste des produits (si séparée)
├── sizechart.html              # Page du tableau des tailles
├── css/
│   └── style.css               # Styles globaux du projet
└── js/
    ├── main.js                 # Logique principale de l'application, gestion des événements
    └── functions.js            # Fonctions utilitaires (création d'éléments, filtres, conversions)
├── images/                     # Dossier pour toutes les images (produits, favicons, etc.)
│   └── assets/                 # Sous-dossier pour les images organisées
│       └── ...
├── data/                       # Dossier pour les fichiers de données (CSV, JSON, etc.)
│   └── items.csv
│   └── tables.json             # Exemple de données pour les tableaux de tailles
└── README.md                   # Ce fichier
```

## Utilisation

  * **Navigation :** Utilisez la barre de navigation pour explorer les différentes sections du site. L'onglet actif est mis en évidence.
  * **Filtrage :** Sur la page des produits, utilisez la sidebar pour affiner votre recherche par genre et catégories. Cliquez sur "Appliquer" pour voir les résultats.
  * **Détails du Produit :** Cliquez sur "See Chart" pour accéder au tableau des tailles spécifique à l'article. Changez les unités via le sélecteur.

## Contribution

Les contributions sont les bienvenues \! Si vous souhaitez améliorer ce projet, n'hésitez pas à :

1.  Forker le dépôt.
2.  Créer une branche pour votre fonctionnalité (`git checkout -b feature/NouvelleFonctionnalite`).
3.  Commiter vos changements (`git commit -m 'Ajout de NouvelleFonctionnalite'`).
4.  Pusher vers la branche (`git push origin feature/NouvelleFonctionnalite`).
5.  Ouvrir une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](https://www.google.com/search?q=LICENSE) pour plus de détails.
