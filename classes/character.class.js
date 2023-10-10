 class character extends MoveableObject {

    height = 350;
    width = 350;
    y = 240;

    constructor() {
        super().loadImg('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages([
            './img/2_character_pepe/2_walk/W-21.png',
            './img/2_character_pepe/2_walk/W-22.png',
            './img/2_character_pepe/2_walk/W-23.png',
            './img/2_character_pepe/2_walk/W-24.png',
            './img/2_character_pepe/2_walk/W-25.png',
            './img/2_character_pepe/2_walk/W-26.png',
        ])
    }

    jump() {
        console.log('jump');
    }

 }