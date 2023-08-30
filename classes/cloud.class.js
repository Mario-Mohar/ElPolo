class Cloud extends MoveableObject {

    y = 50;


    constructor() {
        super().loadImg('../img/clouds/1.png');

        this.x = 200 + Math.random() * 500;
        this.width = 300;
        this.height = 300;
    }

}