class world {
  character_var = new character();
  enemies = [
    new orc(),
    new orc(),
    new orc()
];
  clouds = [
    new Cloud(),
];
backgroundObjects =[
  new BackgroundObject('/img/background.png'),
]
  canvas;
  ctx;

  constructor(canvas){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.addToMap(this.character_var);

    this.enemies.forEach(enemy => {
      this.addToMap(enemy);
    });

    this.clouds.forEach(cloud => {
      this.addToMap(cloud);
    });

    this.backgroundObjects.forEach((bgo) => {
      this.addToMap(bgo);
    });


    // Draw function in loop
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
    }

    addToMap(mo){
      this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
  }

  }