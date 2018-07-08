// define lights
const lights = {
    globalAmbient: new THREE.AmbientLight(0xffffff, 0.5),
    topLight: new THREE.PointLight(0xffffff, 0.6)
}
// Changing positions and etc
lights.topLight.position.y = 100
lights.topLight.position.z = -1000
// exporting all of them
export default lights