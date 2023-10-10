class BackgroundObject extends MoveableObject {

    width = 600;
    height = 800;
    y = 0;
    x = 0;

    constructor(imagePath,) {
        super().loadImg(imagePath);
    }
}