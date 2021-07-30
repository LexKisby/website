import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.131.1-ABR1EJL0AQkCASkHoEad/mode=imports,min/optimized/three.js';

  const scene = new THREE.Scene();

const container = document.querySelector("container");






window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
	
    console.log('hello');
}