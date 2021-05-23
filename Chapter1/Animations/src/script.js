import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

console.log(gsap)
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock
// const clock = new THREE.Clock()

// GSAP Library has its own tick, meaning internally, library is doing request animation from on its own
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

// Animations
const tick = () =>
{
    /** 
     *  Need delta to make sure object is being animated at same speed regardless of the framerate
     */
    
    // const elapsedTime = clock.getElapsedTime()

    // To achieve 1RPM need pi*2
    // mesh.rotation.y = elapsedTime * Math.PI * 2
    
    //  mesh.position.x = Math.cos(elapsedTime)
    //  mesh.position.y = Math.sin(elapsedTime)

    // Can also use it on camera
    // camera.position.x = Math.cos(elapsedTime)
    // camera.position.y = Math.sin(elapsedTime)
    // camera.lookAt(mesh.position)
    
    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()