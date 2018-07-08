import './Analytics'
import Scene from './components/Scene'

window.MOUSE = {
    x: 0, y: 0,
    scene: {x: 0, y: 0},
    isDown: false
}
window.addEventListener('mousedown', e => window.MOUSE.isDown = true)
window.addEventListener('mouseup', e => window.MOUSE.isDown = false)
// Initializing keyboard status
window.KEYBOARD = {
    keysPressed: {},
    checkPressed: (key) => window.KEYBOARD.keysPressed[key] === true
}
window.addEventListener('keydown', e => window.KEYBOARD.keysPressed[e.key] = true)
window.addEventListener('keyup', e => window.KEYBOARD.keysPressed[e.key] = false)

// App
class App {
    constructor (query) {
        // Getting the base canvas
        this.canvas = document.querySelector(query)
        // application options
        this.options = {
            background: 0xffffff,
            W: window.innerWidth,
            H: window.innerHeight
        }
        // define the scene and renderer
        this.renderer = this.makeRenderer()
        this.scene = new Scene(this.options, this.renderer)
        // Responsive
        window.addEventListener('resize', this.onResize.bind(this))
        // start rendering
        this.render()
    }
    onResize () {
        this.options.W = window.innerWidth
        this.options.H = window.innerHeight
        this.renderer.setSize(this.options.W, this.options.H)
        this.scene.onResize(this.options.W, this.options.H)
    }
    makeRenderer () {
        // defining the renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('canvas'),
            antialias: true
        })
        renderer.setClearColor(this.options.background)
        renderer.setPixelRatio(devicePixelRatio)
        renderer.setSize(this.options.W, this.options.H)
        return renderer
    }
    render () {
        // making a loop for rendering
        requestAnimationFrame(this.render.bind(this))
        // flow rendering to the scene
        this.scene.render()
        // paint THREE.js export to the canvas
        this.renderer.render(this.scene.object, this.scene.camera)
    }
}

// Running the App
window.App = App