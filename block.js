class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.c = 70;  }
  
  display() {
    noFill();
    stroke(this.c);
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    rect(0,0,size - offset,size - offset);
    pop();
  }
  
  move() {
    // If the mouse is moving, check distance between mouse loc and center of square
    let distance;
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
       distance = dist(mouseX, mouseY, this.x, this.y);
       if (distance < distMouse) {
       this.angle += 1; 
       this.c = 255
      }
     }
    
    // If squares are already rotating, keep rotating until = 90
    if (this.angle > 0 && this.angle < 90) { 
      this.angle += 2;
      if (this.c > 100) {
          this.c -= 5;
      }
      this.c -= 3;
    } else {
      this.angle = 0;
      this.c = 70;
    }
  }
}
  