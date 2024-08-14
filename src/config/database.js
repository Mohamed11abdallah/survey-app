

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'fiches_enquete';

const client = new MongoClient(url);

client.connect()
    .then(() => {
        console.log('Connecté à MongoDB');
        const db = client.db(dbName);

    })
    .catch(err => {
        console.error('Erreur lors de la connexion à MongoDB:', err);
    });

// Exporter la connexion à la base de données
function getDb() {
    if (!db) {
        throw new Error("La connexion à la base de données n'est pas encore établie");
    }
    return db;
}

module.exports = { getDb };