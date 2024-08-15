const { connectDB } = require('./config/database');

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

async function readAnswers() {
    try {
        const db = await connectDB();
        const answers = await db.collection('answers').find().toArray();
        console.log('Answers:', answers);
        return answers;
    } catch (err) {
        console.error('Error reading answers:', err.message);
    }
}

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
