import newsha from 'newsha'

class QuestionBox {

    constructor () {
        this.questionBox = document.querySelector('.question-box');
        this.newsha = new Newsha({ lang: 'en' });
        this.init();
        this.newsha.listen();
    }

    init () {
        const newsha = this.newsha;
        newsha.any(text => {
            console.log(text)
        });
    }

}

module.exports = QuestionBox;