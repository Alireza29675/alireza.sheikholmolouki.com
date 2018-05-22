const db = require('./db');

const memorySchema = db.Schema({
    conversationId: String,
    message: String,
    questionId: Number,
    fromUser: Boolean,
    confident: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

memorySchema.methods.all = function (cb) {
    return this.model('Memory').find({}, cb);
}

memorySchema.methods.getConversationMessages = function (id, cb) {
    return this.model('Memory').find({ conversationId: id }, cb);
}

memorySchema.methods.getPair = function (conversationId, questionId, cb) {
    return this.model('Memory').find({ conversationId, questionId }, cb);
}

memorySchema.methods.getConversationAlirezaMessages = function (id, cb) {
    return this.model('Memory').find({ conversationId: id, fromUser: false }, cb);
}

memorySchema.methods.getConversationUserMessages = function (id, cb) {
    return this.model('Memory').find({ conversationId: id, fromUser: true }, cb);
}

const Memory = db.model('Memory', memorySchema);

module.exports = Memory;