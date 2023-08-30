class orc extends MoveableObject {

    constructor() {
        super().loadImg('../img/orc/Walk.png');

        this.x = 200 + Math.random() * 500;
        this.y = 425;
        this.width = 80;
        this.height = 100;
    }

}