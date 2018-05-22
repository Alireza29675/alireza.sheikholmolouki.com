const Memory = require('../model/Memory');

class Brain {

    memorize (message = '', conversationId = '', questionId = 0, confident = 0, fromUser = false) {
        const memory = new Memory({
            conversationId: conversationId,
            message: message,
            confident: confident,
            questionId: questionId,
            fromUser: fromUser,
        })
        memory.save(err => {
            if (err) return console.log('Brain has memorizing problem!');
        })
    }

    async think (message) {

        if (message === 'hello') return {
            confident: 1,
            message: 'hey there?'
        }

        return {
            confident: 0.9,
            message: `What do you mean by "${message}"?`
        }

    }

    async hear (message, conversationId = '', questionId = 0) {

        message = message.toLowerCase()

        this.memorize(message, conversationId, questionId, 1, true);
        
        const answer = await this.think(message);

        this.memorize(answer.message, conversationId, questionId, answer.confident, false);

        return answer.message;

    }

}

module.exports = new Brain;