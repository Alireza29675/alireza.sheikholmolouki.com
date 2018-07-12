// define lights
const lights = {
    globalAmbient: new THREE.AmbientLight(0xffffff, 0.5),
    topLight: new THREE.PointLight(0xffffff, 0.9)
}
// Changing positions and etc
lights.topLight.position.y = 100
lights.topLight.position.z = -700

// exporting all of them
export default lights