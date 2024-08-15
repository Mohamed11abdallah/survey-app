const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'survey_management';
let db = null;

async function connectDB() {
    if (db) return db; // Si la connexion est déjà établie, la renvoyer

    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connecté à MongoDB');
        db = client.db(dbName);
        return db;
    } catch (error) {
        console.error('Erreur lors de la connexion à MongoDB:', error.message);
        throw error;
    }
}

module.exports = { connectDB };
