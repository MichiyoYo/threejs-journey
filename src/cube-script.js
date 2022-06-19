import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// mesh is my object
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// the set method is to set the coordinates at the same time (x, y, z)
mesh.position.set(0.7, -0.6, 1);

// Scale is also a vector3
// mesh.scale.x = 0.5;
// mesh.scale.y = 0.2;
// mesh.scale.z = 1;
mesh.scale.set(0.5, 0.5, 0.5);

// Rotation is not a vector3, it's a EULER

// we have to set a different order of rotation for the axis because each axis affects the others
// the correct order is y, x, z
mesh.rotation.reorder("YXZ");

// this is the Pigreco (π) which is the value for a half rotation
const π = 3.14159;
mesh.rotation.x = π * 0.25;
//for full rotation
mesh.rotation.y = 2 * π;
//another way to use PI
//quarter rotation
mesh.rotation.y = 0.5 * Math.PI;

scene.add(mesh);

// this method reduces the vector's length to 1
//mesh.position.normalize();\

// Axis Helper
// shows the axes on the canvas
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

//lookAt takes a Vector3 as argument
camera.lookAt(new THREE.Vector3(3, 0, 0));
//but we can use the object's position which is also a vector3
camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

/** VECTOR3 METHODS */

// Position in not just an object, it is actually a Vector3
// the length of the vector is the distance between the center of the scene and the object's position
console.log(mesh.position.length());

// the distance between the object and the camera
console.log(mesh.position.distanceTo(camera.position));
