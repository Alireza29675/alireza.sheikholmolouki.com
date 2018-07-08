import lights from './Lights'
import Surface from './Surface'

const ease = (from, to, rate = 6) => {
    return from + (to - from) / rate
}

class Scene {
    constructor (options, renderer) {
        this.frame = 0
        this.renderer = renderer
        // Adding Scene
        this.object = new THREE.Scene()
        // Adding Camera
        this.camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.1, 30000)
        this.camera.position.set(0, 0, 0)
        this.wishCameraPosition = { x: 0, y: 10, z: 0 }
        // Mouse move
        window.addEventListener('mousemove', e => {
            // Calculating Mouse Position on screen
            window.MOUSE.x = e.clientX
            window.MOUSE.y = e.clientY
            // Calculating Mouse Position on 3D Scene of Space
            const vector = new THREE.Vector3()
            vector.set((e.clientX / window.innerWidth)*2 - 1, -(e.clientY / window.innerHeight)*2 + 1, 0.5)
            vector.unproject(this.camera)
            const dir = vector.sub(this.camera.position).normalize()
            const distance = -this.camera.position.z / dir.z
            const pos = this.camera.position.clone().add(dir.multiplyScalar(distance))
            window.MOUSE.scene.x = pos.x
            window.MOUSE.scene.y = pos.y
            window.MOUSE.scene.z = pos.z
        })
        // adding lights
        this.object.add(lights.globalAmbient)
        this.object.add(lights.topLight)
        // adding surface
        this.surface = new Surface
        this.object.add(this.surface.getObject3D())
    }
    // onresize
    onResize (W, H) {
        this.camera.aspect	= W / H
		this.camera.updateProjectionMatrix()
    }
    // ease parameters in each frames
    easeParameters () {
        const W = window.innerWidth
        const H = window.innerHeight
        this.camera.position.x = ease (
            this.camera.position.x, // from
            this.wishCameraPosition.x // to
        , 10)
        this.camera.position.y = ease (
            this.camera.position.y, // from
            this.wishCameraPosition.y // to
        , 10)
        this.camera.position.z = ease (
            this.camera.position.z, // from
            this.wishCameraPosition.z // to
        , 10)
    }
    render () {
        this.frame++
        this.surface.render()
        this.easeParameters()
    }
    
}

export default Scene