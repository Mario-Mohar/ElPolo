let canvas;
let world_var;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world_var = new world(canvas);


    console.log('My Character is', world_var.character_var);
}

window.addEventListener("keypress", (e) => {
    console.log(e);
});