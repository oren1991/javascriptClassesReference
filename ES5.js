function Figure(position, status, x, y, width, height, color){
  this.x = x;
  this.y = y;
  this.selected = false;
  this.position = position
  this.status = status
  this.width = width;
  this.height = height;
  this.color = color;
  this.img = new Image()
  this.img.src = spritesheet
  this.spriteSheetY = 0
  this.spriteSheetX = 0
  this.spriteSheetWidth = 413;
  this.spriteSheetHeight = 550;
  this.spriteElementWidth = 14;
  this.spriteSheetWidthStep = this.spriteSheetWidth/this.spriteElementWidth;
  this.spriteElementHeight = 11
  this.spriteSheetHeightStep = this.spriteSheetHeight/this.spriteElementHeight;

}

Figure.prototype.draw = function(context){
  context.drawImage(
     this.img,
     this.spriteSheetWidthStep * (this.spriteSheetX + 6),
     this.spriteSheetHeightStep * this.spriteSheetY,
     29.5,
     50,
     this.x,
     this.y,
     this.width,
     this.spriteSheetHeightStep)
     if (this.selected){
       context.fillRect(this.x, this.y, 10, 10)
     }
}


module.exports = Figure