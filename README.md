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

## Documentation des Fonctions
Enquêtes (surveysModule)

    createFile(db, fileData)
    Ajoute une enquête.
    fileData : { "titre": "string", "description": "string", "date_creation": "ISODate", "questions": [ { "id_question": "string", "texte": "string" } ] }

    readFiles(db)
    Récupère toutes les enquêtes.
    Retour : Tableau d'enquêtes.

    updateFile(db, filter, updateData)
    Met à jour une enquête.
    filter : { "id": "string" }
    updateData : { "titre": "string", "description": "string", "date_creation": "ISODate", "questions": [ { "id_question": "string", "texte": "string" } ] }

    deleteFile(db, filter)
    Supprime une enquête.
    filter : { "id": "string" }

Questions (questionsModule)

    createQuestion(db, questionData)
    Ajoute une question.
    questionData : { "texte": "string", "type": "string", "enqueteId": "string", "options": [ { "texte_option": "string", "est_correct": "boolean" } ] }

    readQuestions(db)
    Récupère toutes les questions.
    Retour : Tableau de questions.

    updateQuestion(db, filter, updateData)
    Met à jour une question.
    filter : { "id": "string" }
    updateData : { "texte": "string", "type": "string", "enqueteId": "string", "options": [ { "texte_option": "string", "est_correct": "boolean" } ] }

    deleteQuestion(db, filter)
    Supprime une question.
    filter : { "id": "string" }

Réponses (answersModule)

    createAnswer(db, answerData)
    Ajoute une réponse.
    answerData : { "questionId": "string", "texte": "string", "est_correcte": "boolean" }

    readAnswers(db)
    Récupère toutes les réponses.
    Retour : Tableau de réponses.

    updateAnswer(db, filter, updateData)
    Met à jour une réponse.
    filter : { "id": "string" }
    updateData : { "questionId": "string", "texte": "string", "est_correcte": "boolean" }

    deleteAnswer(db, filter)
    Supprime une réponse.
    filter : { "id": "string" }

Connexion à MongoDB

    connect()
    Connecte à MongoDB et renvoie db et client.



Authors

    Mohamed Abdallahi M'khaitir https://github.com/dashboard