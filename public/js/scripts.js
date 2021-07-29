const canvas = document.querySelector("canvas");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

document.addEventListener('DOMContentLoaded', function(event) {
    resizeCanvas();
}, false);

window.addEventListener('resize', function(event){
    resizeCanvas();
  });