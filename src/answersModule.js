// const { connectDB } = require('./config/database');

// async function createAnswer(answer) {
//     try {
//         const db = await connectDB();
//         const result = await db.collection('answers').insertOne(answer);
//         console.log('Answer created:', result.insertedId);
//         return result;
//     } catch (err) {
//         console.error('Error creating answer:', err.message);
//     }
// }

// async function readAnswers() {
//     try {
//         const db = await connectDB();
//         const answers = await db.collection('answers').find().toArray();
//         console.log('Answers:', answers);
//         return answers;
//     } catch (err) {
//         console.error('Error reading answers:', err.message);
//     }
// }

// async function updateAnswer(answerId, update) {
//     try {
//         const db = await connectDB();
//         const result = await db.collection('answers').updateOne(
//             { answerId: answerId },
//             { $set: update }
//         );
//         console.log('Number of documents modified:', result.modifiedCount);
//         return result;
//     } catch (err) {
//         console.error('Error updating answer:', err.message);
//     }
// }

// async function deleteAnswer(answerId) {
//     try {
//         const db = await connectDB();
//         const result = await db.collection('answers').deleteOne({ answerId: answerId });
//         console.log('Number of documents deleted:', result.deletedCount);
//         return result;
//     } catch (err) {
//         console.error('Error deleting answer:', err.message);
//     }
// }

// module.exports = { createAnswer, readAnswers, updateAnswer, deleteAnswer };








const { connectDB } = require('./config/database');

// Créer une nouvelle réponse
async function createAnswer(answer) {
    try {
        const db = await connectDB();
        const result = await db.collection('answers').insertOne(answer);
        console.log('Answer created:', result.insertedId);
        return result;
    } catch (err) {
        console.error('Error creating answer:', err.message);
    }
}

// Lire toutes les réponses
async function readAnswers() {
    try {
        const db = await connectDB();
        const answers = await db.collection('answers').find().toArray();
        // Utiliser JSON.stringify pour afficher les réponses de manière lisible
        console.log('Answers:', JSON.stringify(answers, null, 2));
        return answers;
    } catch (err) {
        console.error('Error reading answers:', err.message);
    }
}

// Mettre à jour une réponse
async function updateAnswer(answerId, update) {
    try {
        const db = await connectDB();
        const result = await db.collection('answers').updateOne(
            { answerId: answerId },
            { $set: update }
        );
        console.log('Number of documents modified:', result.modifiedCount);
        return result;
    } catch (err) {
        console.error('Error updating answer:', err.message);
    }
}

// Supprimer une réponse
async function deleteAnswer(answerId) {
    try {
        const db = await connectDB();
        const result = await db.collection('answers').deleteOne({ answerId: answerId });
        console.log('Number of documents deleted:', result.deletedCount);
        return result;
    } catch (err) {
        console.error('Error deleting answer:', err.message);
    }
}

module.exports = { createAnswer, readAnswers, updateAnswer, deleteAnswer };

