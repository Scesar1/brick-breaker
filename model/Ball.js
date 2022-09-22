import Sprite from "./Sprite.js";

class Ball extends Sprite {
 
  bounce(canvasWidth, canvasHeight) {
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      this.dx *= -1.05;
    }

    if (this.y < 0) {
      this.dy *= -1.05;
    } else if(this.y + this.height > canvasHeight) {
      return false;
    }

    return true;
  }

  collides(paddle) {
    if (this.intersects(paddle)) {
      this.dy *= -1;
    }
  }
}

export default Ball;