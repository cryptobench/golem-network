<template>
  <div class="home">
    <Hero />
    <Stats />
    <Sdk />
    <Platform2 />
    <Blog />
    <Banner class="z-30" />
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from "@/components/Stats.vue"
import Hero from "@/components/Hero.vue"
import Blog from "@/components/Blog.vue"
import Banner from "@/components/Banner.vue"
import Platform2 from "@/components/Platform2.vue"
import Sdk from "@/components/Sdk.vue"
import * as THREE from "three"
export default {
  name: "Home",
  components: {
    Stats,
    Blog,
    Banner,
    Hero,
    Sdk,
    Platform2,
  },
}

let camera, scene, renderer
let geometry, material, mesh

init()

function init() {
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
  camera.position.z = 1

  scene = new THREE.Scene()

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  material = new THREE.MeshNormalMaterial()

  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animation)
  document.body.appendChild(renderer.domElement)
}

function animation(time) {
  mesh.rotation.x = time / 2000
  mesh.rotation.y = time / 1000

  renderer.render(scene, camera)
}
</script>
