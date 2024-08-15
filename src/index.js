const { createSurvey, readSurveys, updateSurvey, deleteSurvey } = require('./surveysModule');
const { createQuestion, readQuestions, updateQuestion, deleteQuestion } = require('./questionsModule');
const { createAnswer, readAnswers, updateAnswer, deleteAnswer } = require('./answersModule');

async function testModules() {
    // Données extraites du fichier JSON
    const surveyData = {
        surveyId: 1,
        title: 'Enquête de Satisfaction Test',
        description: 'Description pour le test.'
    };

    const questionData = {
        questionId: 1,
        title: 'Comment évalueriez-vous notre service ?',
        type: 'rating',
        surveyId: 1,
        answers: [
            { answerId: 1, title: 'Très satisfait' },
            { answerId: 2, title: 'Satisfait' }
        ]
    };

    // Test de création
    console.log('Creating survey...');
    await createSurvey(surveyData);

    console.log('Creating question...');
    await createQuestion(questionData);

    console.log('Creating answers...');
    for (const answer of questionData.answers) {
        await createAnswer(answer);
    }

    // Test de lecture
    console.log('Reading surveys...');
    await readSurveys();

    console.log('Reading questions...');
    await readQuestions();

    console.log('Reading answers...');
    await readAnswers();

    // Test de mise à jour
    console.log('Updating survey...');
    await updateSurvey(1, { title: 'Updated Enquête de Satisfaction Test' });

    console.log('Updating question...');
    await updateQuestion(1, { title: 'Updated Question Title' });

    console.log('Updating answers...');
    for (const answer of questionData.answers) {
        await updateAnswer(answer.answerId, { title: 'Updated ' + answer.title });
    }

    // Test de suppression
    console.log('Deleting answers...');
    for (const answer of questionData.answers) {
        await deleteAnswer(answer.answerId);
    }

    console.log('Deleting question...');
    await deleteQuestion(1);

    console.log('Deleting survey...');
    await deleteSurvey(1);
}

testModules();

