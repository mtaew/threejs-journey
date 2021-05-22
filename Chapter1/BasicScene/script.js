// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red'})
const mesh = new THREE.Mesh(geometry, material) // Mesh - Visible object, created by combining geometry and material
scene.add(mesh)

const sizes = {
    width:800,
    height:600
}

/**
 * Camera
 * 1stArg - FOV
 * 2ndArg - Aspect ratio - width of render / height of the render
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 1
camera.position.z = 4
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer ({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
