class Surface {
    constructor () {
        this.speed = 1;
        this.power = 1;
        this.y = 0;
        window.addEventListener('mousedown', () => {
            this.speed = 0.8;
            this.power = 10;
            this.y = -2;
        });
        window.addEventListener('mouseup', () => {
            this.speed = 1;
            this.power = 1;
            this.y = 0;
        });
        this.frame = 0
        this.geometry = new THREE.PlaneGeometry(800, 800, 80, 80)
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
        const allVertices = this.geometry.vertices.entries();
        for (let [i, vertice] of allVertices) {
            vertice.z = this.initalVertices[i].z + Math.sin((this.frame / 20 * this._speed) + i) * this._power;
        }
    }
    smoothVars () {
        if (!this._speed) this._speed = this.speed;
        if (!this._power) this._power = this.power;
        this._power += (this.power - this._power) / 10;
        this._speed += (this.speed - this._speed) / 10;
        this.mesh.position.y += (this.y - this.mesh.position.y) / 10;
    }
    render () {
        this.frame++;
        this.smoothVars();
        this.setVertices()
        this.geometry.verticesNeedUpdate = true;
    }
}

export default Surface