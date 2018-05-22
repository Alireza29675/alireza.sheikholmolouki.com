const Memory = require('../model/Memory');

class Brain {

    memorize (message, conversationId = '', questionId = 0, confident = 0, fromUser = false) {
        const memory = new Memory({
            conversationId: conversationId,
            message: message,
            confident: confident
            questionId: questionId,
            fromUser: fromUser,
        })
        memory.save(err => {
            if (err) return console.log('Brain has memorizing problem!');
            console.log('new memory: ' + message);
        })
    }

    async hear (message, conversationId = '', questionId = 0) {

        message = message.toLowerCase()

        this.memorize(message, conversationId, questionId, 1, true);
        
        if (message === 'hello') return 'hey there!'

    }

}

module.exports = new Brain;