const makeBox = function () {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshNormalMaterial();
    return new THREE.Mesh(geometry, material)
};

class Game {
    constructor (query) {
        this.container = $(query);
        this.initScene();
        this.initObjects();
        window.framesFlow.render(this.render.bind(this))
    }
    initScene () {
        // Defining Scene
        this.scene = new THREE.Scene();
        // Defining Renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        // Defining Camera
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        this.scene.add(this.camera)
    }
    initObjects () {
        this.ambient = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(this.ambient);
        this.box = makeBox();
        this.scene.add(this.box)
    }
    changes () {
        this.camera.position.z += 0.1;
        this.box.rotation.x += 0.1;
        this.box.rotation.y += 0.1;
    }
    render () {
        this.changes();
        this.renderer.render(this.scene, this.camera)
    }
}

export default Game