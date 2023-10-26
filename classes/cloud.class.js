class Cloud extends MoveableObject {

    width = 500;
    height = 300;
    y = 50;
    speed = 0.15;


    constructor() {
        super().loadImg('./img/clouds/1.png');

        this.x = 200 + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}