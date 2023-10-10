class MoveableObject {
    x = 120;
    y = 400;
    img;
    height = 150;
    width = 100;
    imgCache = {};


// loadImg('img/orc.png')
    loadImg(path) {
        this.img = new Image(); // gleich wie this.img = documentGetElementById('image');
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    moveRight() {
        console.log('move right');
    }

    moveLeft() {
        console.log('move left');
    }
}