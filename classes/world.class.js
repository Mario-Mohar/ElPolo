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
  new BackgroundObject('./img/5_background/first_half_background.png'),
]
  canvas;
  ctx;
  keyboard;

  constructor(canvas, keyboard){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld(){
    this.character_var.world = this;
   }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.backgroundObjects.forEach((bgo) => {
      this.addToMap(bgo);
    });

    this.addToMap(this.character_var);

    this.enemies.forEach(enemy => {
      this.addToMap(enemy);
    });

    this.clouds.forEach(cloud => {
      this.addToMap(cloud);
    });


    // Draw function in loop
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
    }

    addToMap(mo){
      if(mo.otherDirection){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
      }
      this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
      if(mo.otherDirection){
        mo.x = mo.x * -1;
        this.ctx.restore();
      }
  }

  }