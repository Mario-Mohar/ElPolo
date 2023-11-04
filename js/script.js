let canvas;
let world_var;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world_var = new world(canvas, keyboard);


    console.log('My Character is', world_var.character_var);
}

window.addEventListener("keydown", (e) => {
    if(e.code === "KeyA") {
        keyboard.LEFT = true;
    }

    if(e.code === "KeyW") {
        keyboard.UP = true;
    }
    
    if(e.code === "KeyD") {
        keyboard.RIGHT = true;
    }

    if(e.code === "KeyS") {
        keyboard.DOWN = true;
    }

    if(e.code === "Space") {
        keyboard.SPACE = true;
    }

    console.log(e);
});

window.addEventListener("keyup", (e) => {
    if(e.code === "KeyA") {
        keyboard.LEFT = false;
    }

    if(e.code === "KeyW") {
        keyboard.UP = false;
    }
    
    if(e.code === "KeyD") {
        keyboard.RIGHT = false;
    }

    if(e.code === "KeyS") {
        keyboard.DOWN = false;
    }

    if(e.code === "Space") {
        keyboard.SPACE = false;
    }

    console.log(e);
});