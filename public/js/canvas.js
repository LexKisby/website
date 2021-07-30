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

const camera = new THREE.PerspectiveCamera(45,	window.innerWidth / window.innerHeight, 1, 1000);
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
    bloomRadius: 0.3
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
var num_tris = 150;
var geometry = [];

const geo = new THREE.BoxGeometry(10,10,10); 
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); 
const cube = new THREE.Mesh( geo, material ); 
scene.add( cube ); 



function initGeometry() {
    const g = new THREE.TetrahedronGeometry(14);
    const w = new THREE.WireframeGeometry(g);
    const m = new THREE.LineBasicMaterial({color: 0xbb3434, linewidth: 20});
    for (let i = 0; i < num_tris; i++) {
        var object = new THREE.LineSegments(w,m);

        object.scale.x = Math.random() * 2 + 1;
	    object.scale.y = Math.random() * 2 + 1;
	    object.scale.z = Math.random() * 2 + 1;


        object.position.x = 400*(Math.random() * 2 -1);
        object.position.y = 400*(Math.random() * 2 -1);
        object.position.z = 1300*(Math.random() -1);

        object.rotation.x = Math.random() * 2 * Math.PI;
	    object.rotation.y = Math.random() * 2 * Math.PI;
	    object.rotation.z = Math.random() * 2 * Math.PI;

        
        object.material.depthTest = false;
        object.material.opacity = 0.4;

        object.material.transparent = true;

        scene.add(object);
        geometry.push(object);


    }
}
initGeometry();




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
    for (var i = 0; i<num_tris; i++) {
        geometry[i].rotation.x += 0.002;
        geometry[i].rotation.y += 0.001;
        geometry[i].rotation.z += 0.003;

    
        //geometry[i].position.x += 0.3;
        geometry[i].position.z += 2;
        if (geometry[i].position.z > 300) {
            geometry[i].position.z = -1000;
        }


    }
	counter += 0.05;
    
}

onWindowResize();
animate();