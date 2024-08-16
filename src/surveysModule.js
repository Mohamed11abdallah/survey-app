const { connectDB } = require('./config/database');

async function createSurvey(survey) {
    try {
        const db = await connectDB();
        const existingSurvey = await db.collection('surveys').findOne({ surveyId: survey.surveyId });
        if (existingSurvey) {
            throw new Error('Survey already exists');
        }
        const result = await db.collection('surveys').insertOne(survey);
        console.log('Survey created:', result.insertedId);
        return result;
    } catch (err) {
        console.error('Error creating survey:', err.message);
    }
}


async function readSurveys() {
    try {
        const db = await connectDB();
        const surveys = await db.collection('surveys').find().toArray();
        console.log('Surveys:', surveys);
        return surveys;
    } catch (err) {
        console.error('Error reading surveys:', err.message);
    }
}

async function updateSurvey(surveyId, update) {
    try {
        const db = await connectDB();
        const existingSurvey = await db.collection('surveys').findOne({ surveyId: surveyId });
        if (!existingSurvey) {
            throw new Error('Survey not found');
        }
        const result = await db.collection('surveys').updateOne(
            { surveyId: surveyId },
            { $set: update }
        );
        console.log('Number of documents modified:', result.modifiedCount);
        return result;
    } catch (err) {
        console.error('Error updating survey:', err.message);
    }
}

async function deleteSurvey(surveyId) {
    try {
        const db = await connectDB();
        const existingSurvey = await db.collection('surveys').findOne({ surveyId: surveyId });
        if (!existingSurvey) {
            throw new Error('Survey not found');
        }
        const result = await db.collection('surveys').deleteOne({ surveyId: surveyId });
        console.log('Number of documents deleted:', result.deletedCount);
        return result;
    } catch (err) {
        console.error('Error deleting survey:', err.message);
    }
}


module.exports = { createSurvey, readSurveys, updateSurvey, deleteSurvey };
