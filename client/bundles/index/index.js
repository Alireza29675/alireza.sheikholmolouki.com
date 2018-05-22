import QuestionBox from './components/QuestionBox'

class App {
    
    constructor () {
        this.questionBox = new QuestionBox();
    }
    
    onLoad () {
        document.body.classList.add('ready')
    }

}

const app = new App
window.onload = () => app.onLoad()