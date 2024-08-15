# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

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
    - Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Documentation des fonction

createFile(db, fileData)

Insère un fichier dans la collection surveys. Affiche l'ID du fichier ou une erreur.
readFiles(db)

Récupère tous les fichiers de la collection fichiers. Affiche les fichiers ou une erreur.
updateFile(db, filter, updateData)

Met à jour un fichier selon le filtre et les nouvelles données. Affiche le nombre de fichiers modifiés ou une erreur.
deleteFile(db, filter)

Supprime un fichier selon le filtre. Affiche le nombre de fichiers supprimés ou une erreur.
connect()

Se connecte à MongoDB. Renvoie les instances db et client ou une erreur.

--------------------

createQuestion(db, questionData)

Ajoute une question à la collection questions. Affiche l'ID de la question ou une erreur.
readQuestions(db)

Récupère toutes les questions de la collection questions. Renvoie un tableau ou une erreur.
updateQuestion(db, filter, updateData)

Met à jour une question selon le filtre et les nouvelles données. Affiche le nombre de questions modifiées ou une erreur.
deleteQuestion(db, filter)

Supprime une question selon le filtre. Affiche le nombre de questions supprimées ou une erreur.
connect()

Se connecte à MongoDB. Renvoie les instances db et client ou une erreur.



---------------------

createAnswer(db, answerData)

Ajoute une réponse à la collection answers. Affiche l'ID de la réponse ou une erreur.
readAnswers(db)

Récupère toutes les réponses de la collection reponses. Affiche les réponses ou une erreur.
updateAnswer(db, filter, updateData)

Met à jour une réponse selon le filtre et les nouvelles données. Affiche le nombre de réponses modifiées ou une erreur.
deleteAnswer(db, filter)

Supprime une réponse selon le filtre. Affiche le nombre de réponses supprimées ou une erreur.
connect()

Se connecte à MongoDB. Renvoie les instances db et client ou une erreur.



## Authors

Mohamed Abdallahi M'khaitir
