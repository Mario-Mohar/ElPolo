class orc extends MoveableObject {

    Images_Walking = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor() {
        super().loadImg('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.Images_Walking);

        this.x = 200 + Math.random() * 500;
        this.y = 490;
        this.width = 50;
        this.height = 80;
        this.animate();
        this.speed = 0.15 + Math.random() * 0.25;
    }


    animate(){
        this.moveLeft();

        setInterval( () => {
            let i = this.currentImage % this.Images_Walking.length;
            let path = this.Images_Walking[i];
            this.img = this.imgCache[path];
            this.currentImage++;
        }, 200);
    }

}