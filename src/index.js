import './components/analytics'
import App from './components/App'
import './stylesheets/index.sass'
import 'framesflow'

window.$ = (query) => document.querySelector(query);
window.$$ = (query) => document.querySelectorAll(query);

window.after = (time, doWhat) => setTimeout(doWhat, time);
window.every = (time, doWhat) => setInterval(doWhat, time);

window.app = new App;