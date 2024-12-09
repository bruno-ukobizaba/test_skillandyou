````markdown
# Strapi - Next

## Description

Ce projet est composé d'une application frontend et backend. Suivez les instructions ci-dessous pour installer et exécuter le projet.

## Prérequis

- Node.js
- npm
- Git

## Installation et Configuration

### Configuration Initiale

```bash
git clone https://github.com/bruno-ukobizaba/test_skillandyou.git
cd test_skillandyou
```
````

### Backend en Strapi

1. Accédez au dossier backend :

```bash
cd backend
```

2. Configurez l'environnement :

- Créez un fichier `.env` à la racine du dossier backend
- Copiez le contenu de `.env.example` dans votre nouveau fichier `.env`
- Modifiez les variables selon votre configuration

3. Installez les dépendances :

```bash
npm install
```

4. Démarrez le serveur :

```bash
npm run develop
```

Le serveur backend sera accessible à l'adresse : `http://localhost:1337`

### Frontend en Nextjs 15

1. Accédez au dossier frontend :

```bash
cd frontend
```

2. Configurez l'environnement :

- Créez un fichier `.env` à la racine du dossier frontend
- Copiez le contenu de `.env.example` dans votre nouveau fichier `.env`
- Modifiez les variables selon votre configuration

3. Installez les dépendances :

```bash
npm install
```

**Note**: En cas d'erreurs lors de l'installation, utilisez :

```bash
npm install --legacy-peer-deps
```

4. Démarrez l'application :

```bash
npm run dev
```

L'application frontend sera accessible à l'adresse : `http://localhost:3000`