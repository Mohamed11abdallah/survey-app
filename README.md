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
createSurvey(survey)
Ajoute une nouvelle enquête et renvoie l'ID inséré.
        survey (object)
            surveyId (int)
            title (string)
            description (string)
            questions (array)

readSurveys()
Récupère toutes les enquêtes et renvoie un tableau d'enquêtes.

updateSurvey(surveyId, update)
Met à jour une enquête par surveyId et renvoie le nombre de modifications.
        surveyId (int) 
        update (object) 
            title (string)
            description (string)
            questions (array) 


deleteSurvey(surveyId)
Supprime une enquête par surveyId et renvoie le nombre de suppressions.
        surveyId (int) 

Questions (questionsModule)
createQuestion(question)
Ajoute une nouvelle question et renvoie l'ID inséré.
        question (object) 
            questionId (int)
            title (string) 
            type (string) 
            surveyId (int) 
            answers (array) 

readQuestions()
Récupère toutes les questions et renvoie un tableau de questions.

updateQuestion(questionId, update)
Met à jour une question par questionId et renvoie le nombre de modifications.
        questionId (int)
        update (object) 
            title (string)
            type (string)
            answers (array) 

deleteQuestion(questionId)
Supprime une question par questionId et renvoie le nombre de suppressions.
        questionId (int) 

Réponses (answersModule)
createAnswer(answer)
Ajoute une nouvelle réponse et renvoie l'ID inséré. 
        answer (object) 
            answerId (int) 
            questionId (int)
            title (string) 

readAnswers()
Récupère toutes les réponses et renvoie un tableau de réponses.

updateAnswer(answerId, update)
Met à jour une réponse par answerId et renvoie le nombre de modifications.
        answerId (int) 
        update (object)
            title (string) 

deleteAnswer(answerId)
Supprime une réponse par answerId et renvoie le nombre de suppressions.
        answerId (int) 


## Authors

[GitHub Profile](https://github.com/Mohamed11abdallah)