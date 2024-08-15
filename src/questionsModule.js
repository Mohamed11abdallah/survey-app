// const { connectDB } = require('./config/database');

// async function createQuestion(question) {
//     try {
//         const db = await connectDB();
//         const result = await db.collection('questions').insertOne(question);
//         console.log('Question created:', result.insertedId);
//         return result;
//     } catch (err) {
//         console.error('Error creating question:', err.message);
//     }
// }

// async function readQuestions() {
//     try {
//         const db = await connectDB();
//         const questions = await db.collection('questions').find().toArray();
//         console.log('Questions:', questions);
//         return questions;
//     } catch (err) {
//         console.error('Error reading questions:', err.message);
//     }
// }

// async function updateQuestion(questionId, update) {
//     try {
//         const db = await connectDB();
//         const result = await db.collection('questions').updateOne(
//             { questionId: questionId },
//             { $set: update }
//         );
//         console.log('Number of documents modified:', result.modifiedCount);
//         return result;
//     } catch (err) {
//         console.error('Error updating question:', err.message);
//     }
// }

// async function deleteQuestion(questionId) {
//     try {
//         const db = await connectDB();
//         const result = await db.collection('questions').deleteOne({ questionId: questionId });
//         console.log('Number of documents deleted:', result.deletedCount);
//         return result;
//     } catch (err) {
//         console.error('Error deleting question:', err.message);
//     }
// }

// module.exports = { createQuestion, readQuestions, updateQuestion, deleteQuestion };





const { connectDB } = require('./config/database');

// Créer une nouvelle question
async function createQuestion(question) {
    try {
        const db = await connectDB();
        const result = await db.collection('questions').insertOne(question);
        console.log('Question created:', result.insertedId);
        return result;
    } catch (err) {
        console.error('Error creating question:', err.message);
    }
}

// Lire toutes les questions
async function readQuestions() {
    try {
        const db = await connectDB();
        const questions = await db.collection('questions').find().toArray();
        // Utiliser JSON.stringify pour afficher les questions de manière lisible
        console.log('Questions:', JSON.stringify(questions, null, 2));
        return questions;
    } catch (err) {
        console.error('Error reading questions:', err.message);
    }
}

// Mettre à jour une question
async function updateQuestion(questionId, update) {
    try {
        const db = await connectDB();
        const result = await db.collection('questions').updateOne(
            { questionId: questionId },
            { $set: update }
        );
        console.log('Number of documents modified:', result.modifiedCount);
        return result;
    } catch (err) {
        console.error('Error updating question:', err.message);
    }
}

// Supprimer une question
async function deleteQuestion(questionId) {
    try {
        const db = await connectDB();
        const result = await db.collection('questions').deleteOne({ questionId: questionId });
        console.log('Number of documents deleted:', result.deletedCount);
        return result;
    } catch (err) {
        console.error('Error deleting question:', err.message);
    }
}

module.exports = { createQuestion, readQuestions, updateQuestion, deleteQuestion };

