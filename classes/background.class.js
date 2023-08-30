class BackgroundObject extends MoveableObject {

    width = 800;
    height = 600;
    y = 0;

    constructor(imagePath) {
        super().loadImg(imagePath);
    }

}