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

    async thinkAboutSentence (question) {

        const message = question.message;

        const words = message.split(' ');
        const answers = [];
        
        for (let word of words) {
            const memories = await Memory.searchQuestions(word);
            for (let memory of memories) {
                answers[memory.answer.message] = {
                    confidence: memory.answer.confidence,
                    question: memory.question.message
                }
            }
        }

        for (let answer in answers) {
            const questionsSimilarity = similarity(question.message, answers[answer].question);
            answers[answer].confidence *= questionsSimilarity;
        }

        for (let mainAnswer in answers) {
            for (let answer in answers) {
                const textSimilarity = similarity(mainAnswer, answer);
                const situationSimilarity = 1;
                answers[answer].confidence *= 0.4 + (answers[mainAnswer].confidence * textSimilarity * situationSimilarity);
            }
        }

        let confidenceMax = 0;
        for (let answer in answers) {
            if (answers[answer].confidence > confidenceMax) confidenceMax = answers[answer].confidence;
        }
        if (confidenceMax > 0.8) {
            for (let answer in answers) {
                answers[answer].confidence /= confidenceMax;
            }
        }

        const finalToughts = [];
        let finalToughtsConfidenceSum = 0;

        for (let answer in answers) {
            if (answers[answer].confidence > 0.7) {
                finalToughts.push({ message: answer, confidence: answers[answer].confidence });
                finalToughtsConfidenceSum += answers[answer].confidence;
            }
        }

        let randSum = 0, randNumber = Math.random() * finalToughtsConfidenceSum, answerTought = null;
        for (let tought of finalToughts) {
            randSum += tought.confidence;
            if (randNumber <= randSum) {
                answerTought = tought;
                break;
            }
        }

        console.log(answerTought, finalToughts);

        if (answerTought) return answerTought;

        return {
            confidence: 0.01,
            message: `What do you mean by "${message}"?`
        }

    }

    async thinkAbout (question, conversationId = '', questionId = 0, onAnswer) {
        
        const sentences = question.message.split(' and ');

        for (let sentence of sentences) {
            const slicedQuestion = {
                message: sentence,
                confidence: question.confidence * 0.9
            }
            const answer = await this.thinkAboutSentence(slicedQuestion);
            // this.memorize(question, answer, conversationId, questionId, false);
            onAnswer(answer)
        }

    }

    async hear (message, conversationId = '', questionId = 0, onAnswer) {

        message = message.toLowerCase();

        const question = { message, confidence: 1 };

        await this.thinkAbout(question, conversationId = '', questionId = 0, onAnswer);

    }

}

module.exports = new Brain;