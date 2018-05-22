const db = require('./db');

const memorySchema = db.Schema({
    conversationId: String,
    message: String,
    questionId: Number,
    question: {
        confidence: Number,
        message: String,
    },
    answer: {
        confidence: Number,
        message: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

memorySchema.statics.getAll = function (cb) {
    return this.find({}, cb);
}

memorySchema.statics.getConversationMessages = function (conversationId, cb) {
    return this.find({ conversationId }, cb);
}

memorySchema.statics.getByQuestionId = function (conversationId, questionId, cb) {
    return this.find({ conversationId, questionId }, cb);
}

memorySchema.statics.searchQuestions = async function (query, cb) {
    return this.find({ 'question.message': new RegExp(query, 'i'), 'question.confidence': { $gt: 0.3 } }).limit(20).exec(cb);
}

const Memory = db.model('Memory', memorySchema);

module.exports = Memory;