let canvas;
let world_var;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world_var = new world(canvas, keyboard);


    console.log('My Character is', world_var.character_var);
}

window.addEventListener("keydown", (e) => {
    if(e.Code === "KeyA") {
        keyboard.LEFT = true;
    }

    if(e.Code === "KeyW") {
        keyboard.UP = true;
    }
    
    if(e.Code === "KeyD") {
        keyboard.RIGHT = true;
    }

    if(e.Code === "KeyS") {
        keyboard.DOWN = true;
    }

    if(e.Code === "Space") {
        keyboard.SPACE = true;
    }

    console.log(e);
});

window.addEventListener("keyup", (e) => {
    if(e.Code === "KeyA") {
        keyboard.LEFT = false;
    }

    if(e.Code === "KeyW") {
        keyboard.UP = false;
    }
    
    if(e.Code === "KeyD") {
        keyboard.RIGHT = false;
    }

    if(e.Code === "KeyS") {
        keyboard.DOWN = false;
    }

    if(e.Code === "Space") {
        keyboard.SPACE = false;
    }

    console.log(e);
});