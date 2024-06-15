# LinkedIn Clone

Ce projet est un clone simplifié de l'interface utilisateur de LinkedIn, construit avec Vite.js et React, et conteneurisé avec Docker.

# Features
1. Authentication : utilisateur existant pour la connction ou créer en 1 : essi@gmail.com; patrick@gmail.com; user@user.com; admin@admin.com / mot de passe de tout les utilisateurs : 123456789
2. Start a Post
3. Update a Post
4. Delete a Post
5. Add Connections
6. Like and Comment on a Post
7. Update Profile
8. See Other Profiles
9. Add a Profile Picture
10. Add Post Images
11. Search For Other Users


## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Docker](https://www.docker.com/products/docker-desktop)

## Installation

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone git@github.com:franckessi237/linkedin-clone.git
   cd linkedin-clone

2. Construisez l'image Docker :

    ```bash
    docker build -t linkedin-clone .

3. Exécutez le conteneur Docker :

    ```bash
    docker run -d -p 8080:80 linkedin-clone

4. Accéder à l'application

    ```bash
    http://localhost:8080


5. Demonstration
