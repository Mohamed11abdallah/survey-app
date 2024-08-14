
// // fichiersModule.js
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbName = 'fiches_enquete';

// async function createFile(db, fileData) {
//     try {
//         const collection = db.collection('fichiers');
//         const result = await collection.insertOne(fileData);
//         console.log('Fichier inséré avec l\'ID :', result.insertedId);
//     } catch (error) {
//         console.error('Erreur lors de l\'insertion du fichier:', error);
//     }
// }

// async function readFiles(db) {
//     try {
//         const collection = db.collection('fichiers');
//         const files = await collection.find({}).toArray();
//         console.log('Fichiers trouvés :', files);
//         return files;
//     } catch (error) {
//         console.error('Erreur lors de la lecture des fichiers:', error);
//     }
// }

// async function updateFile(db, filter, updateData) {
//     try {
//         const collection = db.collection('fichiers');
//         const result = await collection.updateOne(filter, { $set: updateData });
//         console.log('Fichiers mis à jour :', result.modifiedCount);
//     } catch (error) {
//         console.error('Erreur lors de la mise à jour du fichier:', error);
//     }
// }

// async function deleteFile(db, filter) {
//     try {
//         const collection = db.collection('fichiers');
//         const result = await collection.deleteOne(filter);
//         console.log('Fichiers supprimés :', result.deletedCount);
//     } catch (error) {
//         console.error('Erreur lors de la suppression du fichier:', error);
//     }
// }

// async function connect() {
//     try {
//         const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();
//         console.log('Connecté à MongoDB');
//         const db = client.db(dbName);
//         return { db, client };
//     } catch (error) {
//         console.error('Erreur lors de la connexion à MongoDB:', error);
//     }
// }

// module.exports = { createFile, readFiles, updateFile, deleteFile, connect };




// fichiersModule.js
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'fiches_enquete';

async function createFile(db, fileData) {
    try {
        const collection = db.collection('fichiers');
        const result = await collection.insertOne(fileData);
        console.log('Fichier inséré avec l\'ID :', result.insertedId);
    } catch (error) {
        console.error('Erreur lors de l\'insertion du fichier:', error);
    }
}

async function readFiles(db) {
    try {
        const collection = db.collection('fichiers');
        const files = await collection.find({}).toArray();
        console.log('Fichiers trouvés :', files);
        return files;
    } catch (error) {
        console.error('Erreur lors de la lecture des fichiers:', error);
    }
}

async function updateFile(db, filter, updateData) {
    try {
        const collection = db.collection('fichiers');
        // Vérifiez que le filtre est un objet valide
        if (typeof filter !== 'object' || filter === null) {
            throw new Error('Le filtre doit être un objet JavaScript valide.');
        }
        const result = await collection.updateOne(filter, { $set: updateData });
        console.log('Fichiers mis à jour :', result.modifiedCount);
    } catch (error) {
        console.error('Erreur lors de la mise à jour du fichier:', error);
    }
}

async function deleteFile(db, filter) {
    try {
        const collection = db.collection('fichiers');
        // Vérifiez que le filtre est un objet valide
        if (typeof filter !== 'object' || filter === null) {
            throw new Error('Le filtre doit être un objet JavaScript valide.');
        }
        const result = await collection.deleteOne(filter);
        console.log('Fichiers supprimés :', result.deletedCount);
    } catch (error) {
        console.error('Erreur lors de la suppression du fichier:', error);
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
        console.error('Erreur lors de la connexion à MongoDB:', error);
    }
}

module.exports = { createFile, readFiles, updateFile, deleteFile, connect };
