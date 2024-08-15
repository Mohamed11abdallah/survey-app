# Survey App

Survey App est une application JavaScript conçue pour gérer les enquêtes de satisfaction des clients. Elle utilise MongoDB pour le stockage des données et permet de réaliser des opérations CRUD (Create, Read, Update, Delete) sur les fiches, questions et réponses des enquêtes.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/Mohamed11abdallah/survey-app.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Modifiez les paramètres de connexion dans le fichier `config/database.js` pour correspondre à votre configuration MongoDB.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

Fonctionnalités
Gestion des Enquêtes (surveysModule)

    Ajouter une enquête : createFile(db, fileData)
        Insère une enquête dans la collection surveysModule.
        Affiche l'ID de l'enquête ajoutée ou une erreur.

    Lire toutes les enquêtes : readFiles(db)
        Récupère toutes les enquêtes de la collection surveysModule.
        Affiche les enquêtes ou une erreur.

    Mettre à jour une enquête : updateFile(db, filter, updateData)
        Met à jour une enquête selon le filtre et les nouvelles données.
        Affiche le nombre d'enquêtes modifiées ou une erreur.

    Supprimer une enquête : deleteFile(db, filter)
        Supprime une enquête selon le filtre.
        Affiche le nombre d'enquêtes supprimées ou une erreur.

Gestion des Questions (questionsModule)

    Ajouter une question : createQuestion(db, questionData)
        Ajoute une question à la collection questionsModule.
        Affiche l'ID de la question ajoutée ou une erreur.

    Lire toutes les questions : readQuestions(db)
        Récupère toutes les questions de la collection questionsModule.
        Affiche les questions ou une erreur.

    Mettre à jour une question : updateQuestion(db, filter, updateData)
        Met à jour une question selon le filtre et les nouvelles données.
        Affiche le nombre de questions modifiées ou une erreur.

    Supprimer une question : deleteQuestion(db, filter)
        Supprime une question selon le filtre.
        Affiche le nombre de questions supprimées ou une erreur.

Gestion des Réponses (answersModule)

    Ajouter une réponse : createAnswer(db, answerData)
        Ajoute une réponse à la collection answersModule.
        Affiche l'ID de la réponse ajoutée ou une erreur.

    Lire toutes les réponses : readAnswers(db)
        Récupère toutes les réponses de la collection answersModule.
        Affiche les réponses ou une erreur.

    Mettre à jour une réponse : updateAnswer(db, filter, updateData)
        Met à jour une réponse selon le filtre et les nouvelles données.
        Affiche le nombre de réponses modifiées ou une erreur.

    Supprimer une réponse : deleteAnswer(db, filter)
        Supprime une réponse selon le filtre.
        Affiche le nombre de réponses supprimées ou une erreur.

Connexion à MongoDB

    Se connecter à MongoDB : connect()
        Se connecte à MongoDB et renvoie les instances db et client ou une erreur.



Authors

    Mohamed Abdallahi M'khaitir