class Surface {
    constructor () {
        this.frame = 0
        this.geometry = new THREE.PlaneGeometry(1000, 1000, 80, 80)
        this.material = new THREE.MeshPhongMaterial({ color: 0x333333, wireframe: true })
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = -Math.PI / 2
        this.initalVertices = []
        for (let vertice of this.geometry.vertices) this.initalVertices.push(vertice.clone())
    }
    getObject3D () {
        return this.mesh
    }
    setVertices () {
        const w = window.innerWidth, h = window.innerHeight, x = window.MOUSE.x, y = window.MOUSE.y
        for (let [i, vertice] of this.geometry.vertices.entries()) {
            vertice.z = this.initalVertices[i].z + Math.sin((this.frame / 20) + i)
        }
    }
    render () {
        this.frame++
        this.setVertices()
        this.geometry.verticesNeedUpdate = true;
    }
}

export default Surface