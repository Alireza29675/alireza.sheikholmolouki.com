import App from './components/App'

window.$ = (query) => document.querySelector(query);
window.$$ = (query) => document.querySelectorAll(query);

window.after = (time, doWhat) => setTimeout(doWhat, time);
window.every = (time, doWhat) => setInterval(doWhat, time);

window.app = new App;