const brain = require('./brain/brain');

class Server {

    constructor () {
        this._io = null;
    }

    set io (io) {
        this._io = io;
        this.init();
    }

    get io () {
        return this._io;
    }

    init () {
        this.io.on('connection', onUserConnected);
    }

}

const onUserConnected = socket => {
    socket.on('question', data => {
        brain.hear(data.message, socket.id, data.id).then(answer => {
            socket.emit('answer', {
                id: data.id,
                message: answer
            })
        })
    });
};
const server = new Server;

module.exports = server;