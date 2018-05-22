const similarity = require('string-similarity').compareTwoStrings;

const Memory = require('../model/Memory');

class Brain {

    memorize (question, answer, conversationId = '', questionId = 0) {

        const memory = new Memory({
            conversationId,
            question,
            answer,
            questionId
        })
        memory.save(err => {
            if (err) {
                console.log(question, answer)
                return console.log('Brain has memorizing problem!');
            }
        })

    }

    async thinkAbout (question) {

        const message = question.message;

        const words = message.split(' ');
        const answers = [];
        
        for (let word of words) {
            const memories = await Memory.searchQuestions(word);
            for (let memory of memories) {
                answers[memory.answer.message] = memory.answer.confidence;
            }
        }

        for (let mainAnswer in answers) {
            for (let answer in answers) {
                const textSimilarity = similarity(mainAnswer, answer);
                const situationSimilarity = 1;
                answers[answer] *= 1 + (answers[mainAnswer] * textSimilarity * situationSimilarity);
            }
        }

        let confidenceMax = 0;
        for (let answer in answers) {
            if (answers[answer] > confidenceMax) confidenceMax = answers[answer];
        }
        if (confidenceMax > 0.8) {
            for (let answer in answers) {
                answers[answer] /= confidenceMax;
            }
        }

        const finalToughts = [];

        for (let answer in answers) {
            if (answers[answer] > 0.7) {
                finalToughts.push({ message: answer, confidence: answers[answer] });
            }
        }

        console.log(finalToughts);

        return {
            confidence: 0.01,
            message: `What do you mean by "${message}"?`
        }

    }

    async hear (message, conversationId = '', questionId = 0) {

        message = message.toLowerCase();

        const question = { message, confidence: 1 };
        const answer = await this.thinkAbout(question);

        // this.memorize(question, answer, conversationId, questionId, false);

        return answer.message;

    }

}

module.exports = new Brain;