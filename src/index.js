const { createSurvey, readSurveys, updateSurvey, deleteSurvey } = require('./surveysModule');
const { createQuestion, readQuestions, updateQuestion, deleteQuestion } = require('./questionsModule');
const { createAnswer, readAnswers, updateAnswer, deleteAnswer } = require('./answersModule');

async function testModules() {
    // Test de création
    await createSurvey({ surveyId: 1, title: 'Survey 1', description: 'Description for Survey 1' });
    await createQuestion({ questionId: 1, text: 'Question 1', surveyId: 1 });
    await createAnswer({ answerId: 1, text: 'Answer 1', questionId: 1 });

    // Test de lecture
    await readSurveys();
    await readQuestions();
    await readAnswers();

    // Test de mise à jour
    await updateSurvey(1, { title: 'Updated Survey 1' });
    await updateQuestion(1, { text: 'Updated Question 1' });
    await updateAnswer(1, { text: 'Updated Answer 1' });

    // Test de suppression
    await deleteSurvey(1);
    await deleteQuestion(1);
    await deleteAnswer(1);
}

testModules();
