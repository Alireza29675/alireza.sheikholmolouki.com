import newsha from 'newsha'
import socket from '../model/socket'

class QuestionBox {

    constructor () {
        this.questionBox = document.querySelector('.question-box');
        this.chatBox = document.querySelector('.chat-box')
        this.mainTitle = document.querySelector('.question-box > .title')
        this.newsha = new Newsha({ lang: 'en' });
        this.newsha.isActive = false;
        this.isTypingMode = false;
        this.canType = false;
        this.isTyping = false;
        this.lastQuestionId = 0;
        this.initNewsha();
        this.initSocket();
        this.init();
    }

    initNewsha () {
        this.newsha.any(this.onResult.bind(this));
        this.newsha.command('alireza', text => {
            if (!this.isTyping && !this.isTypingMode && !this.canType) {
                this.enableTypingMode();
            }
        });
    }

    initSocket () {
        socket.on('answer', data => {
            if (this.lastQuestionId !== data.id) return;
            const answer = document.createElement('p');
            answer.classList.add('alireza');
            answer.innerHTML = data.message;
            this.chatBox.appendChild(answer);
            setTimeout(() => {
                answer.classList.add('show')
            }, 2000)
            setTimeout(() => this.enableTypingMode(), data.message.length * 20 + 3000);
        })
    }

    init () {
        this.questionBox.onclick = () => {
            if (this.isTyping) return;
            if (!this.newsha.isActive) {
                this.newsha.listen()
                this.newsha.isActive = true;
            }
            this.toggleTypingMode();
        }
    }
    
    toggleTypingMode () {
        this.isTypingMode ? this.disableTypingMode() : this.enableTypingMode();
    }

    enableTypingMode () {
        this.isTypingMode = true;
        this.canType = true;
        this.mainTitle.innerHTML = '[Say something]'
        this.questionBox.classList.add('typing-mode');
    }

    disableTypingMode () {
        this.isTypingMode = false;
        this.canType = false;
        this.mainTitle.innerHTML = 'Ask me questions';
        this.questionBox.classList.remove('typing-mode');
    }

    onResult (text) {
        if (!this.canType) return;
        this.type(text)
    }

    type (text) {
        return new Promise((resolve) => {
            const words = text.split(' ');
            let timeout = 0;
            this.canType = false;
            this.isTyping = true;
            for (let i = 0; i < words.length; i++) {
                if (i === 0) this.mainTitle.innerHTML = '';
                timeout += Math.floor(Math.random() * 200) + 100;
                setTimeout(() => {
                    this.mainTitle.innerHTML += words[i] + ' ';
                }, timeout);
            }
            setTimeout(() => {
                this.isTyping = false;
                this.throwTextToChatBox(text)
            }, timeout + 500)
        })
    }

    throwTextToChatBox (text) {
        const pastParagraphs = document.querySelectorAll('.chat-box p');
        for (let p of pastParagraphs) p.classList.add('away');

        setTimeout(() => {
            for (let p of pastParagraphs) p.remove();

            this.mainTitle.innerHTML = '';
            const question = document.createElement('p');

            const top = this.questionBox.offsetTop - this.chatBox.offsetHeight + 22;
            const left = this.questionBox.offsetLeft - 30;

            question.classList.add('user');
            question.innerHTML = text;
            this.chatBox.appendChild(question);

            setTimeout(() => {
                question.classList.add('show')
            }, 100)
            
            this.askServer(text);

            setTimeout(() => {
                this.disableTypingMode();
            }, 500);
        }, 500);
    }

    askServer (text) {
        this.lastQuestionId++;
        socket.emit('question', { id: this.lastQuestionId, message: text });
    }

}

module.exports = QuestionBox;