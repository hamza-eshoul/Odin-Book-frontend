## Frontend du Projet Odin Book

[![en](https://img.shields.io/badge/lang-en-red)](README.md)

Ce dépôt comprend la partie frontend du Full Stack Odin Book projet créé pour [Odin Project](https://www.theodinproject.com/lessons/nodejs-odin-book).

L'objectif du projet est de créer un clone de la plateforme de médias sociaux Facebook en implémentant les principales fonctionnalités de la plateforme, à savoir les utilisateurs, les profils, les publications, les « likes », les « amis » ainsi que le fil d'actualité.

- Lien du projet - https://odin-book-project.onrender.com/
- Dépôt principal du projet - https://github.com/skynter/Odin-Book-frontend
- Dépôt backend du projet - https://github.com/skynter/Odin-Book-backend

## Technologies Utilisées

- ReactJS
- Tailwind CSS

## Principales Fonctionnalités

- Intégration avec une RESTful backend API
- Interface Utilisateur Intuitive
- Interface Utilisateur Responsive

## Installation

Pour exécuter le projet localement sur votre machine :

- Exécutez la commande suivante pour installer les dépendances du projet :

```
npm install
```

- Exécutez la commande suivante pour pour générer un serveur local de développement

```
npm start
```

- Ouvrez http://localhost:3000 avec votre navigateur pour accéder à la version locale du frontend de votre projet

- Les points de terminaison de l'API figurant au niveau du dépôt backend du projet sont accessibles à travers l'API hébergé sur https://odin-book-api-g5zs.onrender.com

- Les deux points de terminaisons principaux de l'API sont le POST https://odin-book-api-g5zs.onrender.com/posts et le POST https://odin-book-api-g5zs.onrender.com/users/:user_id/send_friend_request
