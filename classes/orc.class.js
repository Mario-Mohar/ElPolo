class orc extends MoveableObject {

    constructor() {
        super().loadImg('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500;
        this.y = 500;
        this.width = 80;
        this.height = 100;
    }

}