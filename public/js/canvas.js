import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.131.1-ABR1EJL0AQkCASkHoEad/mode=imports,min/optimized/three.js';
import {RenderPass} from 'https://cdn.skypack.dev/pin/three@v0.131.1-ABR1EJL0AQkCASkHoEad/mode=imports,min/unoptimized/examples/jsm/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'https://cdn.skypack.dev/pin/three@v0.131.1-ABR1EJL0AQkCASkHoEad/mode=imports,min/unoptimized/examples/jsm/postprocessing/UnrealBloomPass.js';
import {EffectComposer} from 'https://cdn.skypack.dev/pin/three@v0.131.1-ABR1EJL0AQkCASkHoEad/mode=imports,min/unoptimized/examples/jsm/postprocessing/EffectComposer.js';

const container = document.querySelector("container");

const renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window)
renderer.toneMapping = THREE.ReinhardToneMapping;
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000002);

const camera = new THREE.PerspectiveCamera(45,	window.innerWidth / window.innerHeight, 1, 500);
camera.position.z = 300;
camera.position.y = 0;
scene.add(camera);

//LIGHTS
///////////////////////////////////////////
scene.add( new THREE.AmbientLight(0x101010));

//PASSES
////////////////////////////////////////////
const renderScene = new RenderPass( scene, camera);

const bloomParams = {
    bloomThreshold: 0,
    exposure: 0.9,
    bloomStrength: 3,
    bloomRadius: 0.52
};

const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = bloomParams.threshold;
bloomPass.strength = bloomParams.bloomStrength;
bloomPass.radius = bloomParams.bloomRadius;

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

//GEOMETRY
////////////////////////////////
const modelGeometry = new THREE.IcosahedronBufferGeometry(70);
const wireFrame = new THREE.WireframeGeometry(modelGeometry);
const line = new THREE.LineSegments(wireFrame);
line.material.depthTest = false;
line.material.opacity = 0.4;

line.material.transparent = true;
line.position.x = -20;
scene.add(line);

const model = line;




window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    console.log(window.innerHeight);
}
let counter = 0;
function animate() {
    requestAnimationFrame(animate);
    composer.render();
    model.rotation.x += 0.02;
	model.rotation.y += -0.02;
	model.rotation.z += 0.03;
	model.position.x += Math.sin(counter);
	counter += 0.05;
    
}

onWindowResize();
animate();