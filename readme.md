# Bienvenue sur Nuxt-demo 👋
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./license)
[![Twitter: \_YannBertrand](https://img.shields.io/twitter/follow/\_YannBertrand.svg?style=social)](https://twitter.com/\_YannBertrand)

**Stability: 1 - Experimental**

> Démo d'application Nuxt pour tester les différents modes : SPA, Universal, Statique :cloud:

## 🏗 Installer en local

Clonez le repo avec Git. Seuls Node.js (testé en v15.2.1) et Yarn (testé en 1.22.4) sont nécessaires.

Installez les dépendances:

```sh
yarn install
```

## 🧑‍💻 Lancer le projet en dev

### Mode Single Page Application

```sh
yarn spa:start
```

### Mode rendu universel

```sh
yarn universal:start
```

### Mode rendu statique

```sh
yarn static:start
```

## 🚀 Déployer

### Mode Single Page Application

Compiler les sources de l'application avec :

```sh
yarn spa:build
```

Le site est contenu dans le dossier `dist` qu'on peut déployer avec n'importe quelle serveur HTTP.

### Mode rendu universel

Compiler les sources du serveur avec :

```sh
yarn universal:build
```

Pour le lancer il faut ensuite lancer la commande :

```sh
yarn universal:prod
```

### Mode rendu statique

Compiler les sources de l'application avec :

```sh
yarn static:build
```

Le site est disponible dans le dossier `dist` qu'on peut envoyer sur n'importe quel serveur HTTP.

## Montrez votre support

Une petite ⭐️ si ce projet vous a aidé !

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
