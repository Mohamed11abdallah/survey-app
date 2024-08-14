



// // reponsesModule.js
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbName = 'fiches_enquete';

// async function createAnswer(db) {
//     const collection = db.collection('reponses');
//     const result = await collection.insertOne({ questionId: '1234567890', answerText: 'Bleu' });
//     console.log('Réponse insérée avec l\'ID :', result.insertedId);
// }

// async function readAnswers(db) {
//     const collection = db.collection('reponses');
//     const answers = await collection.find({}).toArray();
//     console.log('Réponses trouvées :');
//     answers.forEach(answer => console.log(answer));
// }

// async function updateAnswer(db) {
//     const collection = db.collection('reponses');
//     const result = await collection.updateOne(
//         { answerText: 'Bleu' },
//         { $set: { answerText: 'Vert' } }
//     );
//     console.log('Réponses mises à jour :', result.modifiedCount);
// }

// async function deleteAnswer(db) {
//     const collection = db.collection('reponses');
//     const result = await collection.deleteOne({ answerText: 'Vert' });
//     console.log('Réponses supprimées :', result.deletedCount);
// }

// async function connect() {
//     // Créez un client MongoDB avec des options modernes
//     const client = new MongoClient(url);

//     // const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();
//     console.log('Connecté à MongoDB');
//     const db = client.db(dbName);
//     return { db, client };
// }

// // Exemple d'utilisation
// async function run() {
//     const { db, client } = await connect();

//     try {
//         await createAnswer(db);
//         await readAnswers(db);
//         await updateAnswer(db);
//         await readAnswers(db); // Lire à nouveau pour vérifier la mise à jour
//         await deleteAnswer(db);
//         await readAnswers(db); // Lire à nouveau pour vérifier la suppression
//     } finally {
//         await client.close(); // Fermer la connexion lorsque vous avez terminé
//         console.log('Connexion à MongoDB fermée');
//     }
// }

// run().catch(console.error);

// module.exports = { createAnswer, readAnswers, updateAnswer, deleteAnswer, connect };



// reponsesModule.js
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'fiches_enquete';

async function createAnswer(db, answerData) {
    try {
        const collection = db.collection('reponses');
        const result = await collection.insertOne(answerData);
        console.log('Réponse insérée avec l\'ID :', result.insertedId);
    } catch (error) {
        console.error('Erreur lors de l\'insertion de la réponse :', error);
    }
}

async function readAnswers(db) {
    try {
        const collection = db.collection('reponses');
        const answers = await collection.find({}).toArray();
        console.log('Réponses trouvées :');
        answers.forEach(answer => console.log(answer));
        return answers;
    } catch (error) {
        console.error('Erreur lors de la lecture des réponses :', error);
    }
}

async function updateAnswer(db, filter, updateData) {
    try {
        const collection = db.collection('reponses');
        const result = await collection.updateOne(filter, { $set: updateData });
        console.log('Réponses mises à jour :', result.modifiedCount);
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la réponse :', error);
    }
}

async function deleteAnswer(db, filter) {
    try {
        const collection = db.collection('reponses');
        const result = await collection.deleteOne(filter);
        console.log('Réponses supprimées :', result.deletedCount);
    } catch (error) {
        console.error('Erreur lors de la suppression de la réponse :', error);
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

// Exemple d'utilisation
async function run() {
    const { db, client } = await connect();

    try {
        await createAnswer(db, { questionId: '1234567890', answerText: 'Bleu' });
        await readAnswers(db);
        await updateAnswer(db, { answerText: 'Bleu' }, { answerText: 'Vert' });
        await readAnswers(db); // Lire à nouveau pour vérifier la mise à jour
        await deleteAnswer(db, { answerText: 'Vert' });
        await readAnswers(db); // Lire à nouveau pour vérifier la suppression
    } finally {
        await client.close(); // Fermer la connexion lorsque vous avez terminé
        console.log('Connexion à MongoDB fermée');
    }
}

run().catch(console.error);

module.exports = { createAnswer, readAnswers, updateAnswer, deleteAnswer, connect };
