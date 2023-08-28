class world {
  character_var = new character();
  enemies = [
    new orc(),
    new orc(),
    new orc()
];
  canvas;
  ctx;

  constructor(canvas){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }




  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.ctx.drawImage(this.character_var.img, this.character_var.x, this.character_var.y, this.character_var.height, this.character_var.width);


    // Draw function in loop
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
    }
  }
