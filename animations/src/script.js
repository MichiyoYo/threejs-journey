import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.OctahedronGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 1200,
  height: 800,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations

// let time = Date.now();

// const tick = () => {
//   //time
//   // calculating the delta of the time is making the
//   // animation run at the same FPS of the computer
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;
//   console.log(deltaTime);
//   //update object
//   mesh.rotation.y += 0.002 * deltaTime;
//   //render
//   renderer.render(scene, camera);
//   //call tick on next frame
//   window.requestAnimationFrame(tick);
// };

//clock
// const clock = new THREE.Clock();
gsap.to(mesh.position, { duration: 1, delay: 0, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 1, x: 0 });

const tick = () => {
  //clocl
  // const elapsedTime = clock.getElapsedTime();
  // console.log(elapsedTime);

  // //a revolution per second
  // //mesh.rotation.y = elapsedTime * Math.PI * 2;

  // mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.x = Math.cos(elapsedTime);
  // camera.lookAt(mesh.position);

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
