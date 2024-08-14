
// // questionsModule.js
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbName = 'fiches_enquete';

// async function createQuestion(db, questionData) {
//     try {
//         const collection = db.collection('questions');
//         const result = await collection.insertOne(questionData);
//         console.log('Question insérée avec l\'ID :', result.insertedId);
//     } catch (error) {
//         console.error('Erreur lors de l\'insertion de la question:', error);
//     }
// }

// async function readQuestions(db) {
//     try {
//         const collection = db.collection('questions');
//         const questions = await collection.find({}).toArray();
//         console.log('Questions trouvées :', questions);
//         return questions;
//     } catch (error) {
//         console.error('Erreur lors de la lecture des questions:', error);
//     }
// }

// async function updateQuestion(db, filter, updateData) {
//     try {
//         const collection = db.collection('questions');
//         const result = await collection.updateOne(filter, { $set: updateData });
//         console.log('Questions mises à jour :', result.modifiedCount);
//     } catch (error) {
//         console.error('Erreur lors de la mise à jour de la question:', error);
//     }
// }

// async function deleteQuestion(db, filter) {
//     try {
//         const collection = db.collection('questions');
//         const result = await collection.deleteOne(filter);
//         console.log('Questions supprimées :', result.deletedCount);
//     } catch (error) {
//         console.error('Erreur lors de la suppression de la question:', error);
//     }
// }

// async function connect() {
//     try {
//         // const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
//         const client = new MongoClient(url);

//         await client.connect();
//         console.log('Connecté à MongoDB');
//         const db = client.db(dbName);
//         return { db, client };
//     } catch (error) {
//         console.error('Erreur lors de la connexion à MongoDB:', error);
//     }
// }

// module.exports = { createQuestion, readQuestions, updateQuestion, deleteQuestion, connect };


// questionsModule.js
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'fiches_enquete';

async function createQuestion(db, questionData) {
    try {
        const collection = db.collection('questions');
        const result = await collection.insertOne(questionData);
        console.log('Question insérée avec l\'ID :', result.insertedId);
    } catch (error) {
        console.error('Erreur lors de l\'insertion de la question :', error);
    }
}

async function readQuestions(db) {
    try {
        const collection = db.collection('questions');
        const questions = await collection.find({}).toArray();
        console.log('Questions trouvées :', questions);
        return questions;
    } catch (error) {
        console.error('Erreur lors de la lecture des questions :', error);
    }
}

async function updateQuestion(db, filter, updateData) {
    try {
        const collection = db.collection('questions');
        // Vérifiez que le filtre est un objet valide
        if (typeof filter !== 'object' || filter === null) {
            throw new Error('Le filtre doit être un objet JavaScript valide.');
        }
        const result = await collection.updateOne(filter, { $set: updateData });
        console.log('Questions mises à jour :', result.modifiedCount);
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la question :', error);
    }
}

async function deleteQuestion(db, filter) {
    try {
        const collection = db.collection('questions');
        // Vérifiez que le filtre est un objet valide
        if (typeof filter !== 'object' || filter === null) {
            throw new Error('Le filtre doit être un objet JavaScript valide.');
        }
        const result = await collection.deleteOne(filter);
        console.log('Questions supprimées :', result.deletedCount);
    } catch (error) {
        console.error('Erreur lors de la suppression de la question :', error);
    }
}

async function connect() {
    try {
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connecté à MongoDB');
        const db = client.db(dbName);
        return { db, client };
    } catch (error) {
        console.error('Erreur lors de la connexion à MongoDB :', error);
    }
}

module.exports = { createQuestion, readQuestions, updateQuestion, deleteQuestion, connect };

