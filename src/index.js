// // index.js
// const { createFile, readFiles, updateFile, deleteFile, connect: connectFiles } = require('./fichiersModule');
// const { createQuestion, readQuestions, updateQuestion, deleteQuestion, connect: connectQuestions } = require('./questionsModule');
// const { createAnswer, readAnswers, updateAnswer, deleteAnswer, connect: connectAnswers } = require('./reponsesModule');

// async function main() {
//     try {
//         // Connexion et opérations pour la collection "fichiers"
//         const { db: dbFiles, client: clientFiles } = await connectFiles();
//         await createFile(dbFiles);
//         await readFiles(dbFiles);
//         await updateFile(dbFiles);
//         await deleteFile(dbFiles);
//         await clientFiles.close();

//         // Connexion et opérations pour la collection "questions"
//         const { db: dbQuestions, client: clientQuestions } = await connectQuestions();
//         await createQuestion(dbQuestions);
//         await readQuestions(dbQuestions);
//         await updateQuestion(dbQuestions);
//         await deleteQuestion(dbQuestions);
//         await clientQuestions.close();

//         // Connexion et opérations pour la collection "reponses"
//         const { db: dbAnswers, client: clientAnswers } = await connectAnswers();
//         await createAnswer(dbAnswers);
//         await readAnswers(dbAnswers);
//         await updateAnswer(dbAnswers);
//         await deleteAnswer(dbAnswers);
//         await clientAnswers.close();
//     } catch (error) {
//         console.error('Erreur lors de l\'exécution des opérations CRUD:', error);
//     }
// }

// main();



const { createFile, readFiles, updateFile, deleteFile, connect: connectFiles } = require('./fichiersModule');
const { createQuestion, readQuestions, updateQuestion, deleteQuestion, connect: connectQuestions } = require('./questionsModule');
const { createAnswer, readAnswers, updateAnswer, deleteAnswer, connect: connectAnswers } = require('./reponsesModule');

async function main() {
    try {
        // Connexion et opérations pour la collection "fichiers"
        const { db: dbFiles, client: clientFiles } = await connectFiles();
        await createFile(dbFiles, { name: 'Nouveau fichier', type: 'PDF' }); // Exemple de données pour createFile
        await readFiles(dbFiles);
        await updateFile(dbFiles, { name: 'Nouveau fichier' }, { type: 'DOCX' }); // Exemple de filtre et données de mise à jour
        await deleteFile(dbFiles, { name: 'Nouveau fichier' }); // Exemple de filtre pour deleteFile
        await clientFiles.close();

        // Connexion et opérations pour la collection "questions"
        const { db: dbQuestions, client: clientQuestions } = await connectQuestions();
        await createQuestion(dbQuestions, { questionText: 'Quelle est la couleur du ciel ?' }); // Exemple de données pour createQuestion
        await readQuestions(dbQuestions);
        await updateQuestion(dbQuestions, { questionText: 'Quelle est la couleur du ciel ?' }, { questionText: 'Quelle est la couleur de l\'herbe ?' }); // Exemple de filtre et données de mise à jour
        await deleteQuestion(dbQuestions, { questionText: 'Quelle est la couleur de l\'herbe ?' }); // Exemple de filtre pour deleteQuestion
        await clientQuestions.close();

        // Connexion et opérations pour la collection "reponses"
        const { db: dbAnswers, client: clientAnswers } = await connectAnswers();
        await createAnswer(dbAnswers, { questionId: '1234567890', answerText: 'Bleu' }); // Exemple de données pour createAnswer
        await readAnswers(dbAnswers);
        await updateAnswer(dbAnswers, { answerText: 'Bleu' }, { answerText: 'Vert' }); // Exemple de filtre et données de mise à jour
        await deleteAnswer(dbAnswers, { answerText: 'Vert' }); // Exemple de filtre pour deleteAnswer
        await clientAnswers.close();
    } catch (error) {
        console.error('Erreur lors de l\'exécution des opérations CRUD:', error);
    }
}

main();

























// const { connect, createFile, readFiles, updateFile, deleteFile } = require('./fichiersModule');
// const { createQuestion, readQuestions, updateQuestion, deleteQuestion } = require('./questionsModule');
// const { createResponse, readResponses, updateResponse, deleteResponse } = require('./reponsesModule');

// async function main() {
//     const { db, client } = await connect();

//     try {
//         // Opérations CRUD sur la collection "fichiers"
//         await cconreateFile(db, { filename: 'document2.pdf', size: 2048 });
//         await readFiles(db);
//         await updateFile(db, { filename: 'document1.pdf' }, { size: 4096 });
//         await deleteFile(db, { filename: 'document1.pdf' });

//         // Opérations CRUD sur la collection "questions"
//         await createQuestion(db, { fichierId: "66bb58887e2586bdf0c4e49b", titre: "Nouvelle question", type: "rating", options: { valeurMin: 1, valeurMax: 5, pas: 1 }, reponses: [{ titre: "Très satisfait" }], multipleSelectionsAutorisees: false });
//         await readQuestions(db);
//         await updateQuestion(db, { titre: "Comment évalueriez-vous notre service ?" }, { titre: "Nouvelle question modifiée" });
//         await deleteQuestion(db, { titre: "Nouvelle question modifiée" });

//         // Opérations CRUD sur la collection "réponses"
//         await createResponse(db, { fichierId: "66bb58887e2586bdf0c4e49b", repondantId: "ID_RESPONDANT", reponses: [{ questionId: "66bb58997e2586bdf0c4e49d", reponse: 4 }] });
//         await readResponses(db);
//         await updateResponse(db, { questionId: "1234567890" }, { answerText: "Rouge" });
//         await deleteResponse(db, { questionId: "1234567890" });

//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);
