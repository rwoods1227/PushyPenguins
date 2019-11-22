// const SCALE = 0.5;
// const WIDTH = 43;
// const HEIGHT = 36;
// const SCALED_WIDTH = SCALE * WIDTH;
// const SCALED_HEIGHT = SCALE * HEIGHT;
// const CYCLE_LOOP = [0, 47, 101, 144];
// const FRAME_LIMIT = 12;
// const MOVEMENT_SPEED = 2;

// // let canvas = document.querySelector('canvas');
// // let ctx = canvas.getContext('2d');
// //ctx.imageSmoothingEnabled = false;
// // let keyPresses = {};
// let currentDirection = 3;
// let currentLoopIndex = 0;
// let frameCount = 0;
// let positionX = Math.random() *275;
// let positionY = 0;
// let enemy = new Image();


// function loadImage() {
//   enemy.src = '../images/paperMarioPenguin.png';
//   enemy.onload = function () {
//     window.requestAnimationFrame(gameLoop);
//   };
// }

// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(enemy,
//     frameX, frameY, WIDTH, HEIGHT,
//     canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
// }

// loadImage();

// function gameLoop() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   let hasMoved = true;
//   positionY += 0.5;
//   if (hasMoved) {
//     frameCount++;
//     if (frameCount >= FRAME_LIMIT) {
//       frameCount = 0;
//       currentLoopIndex++;
//       if (currentLoopIndex >= CYCLE_LOOP.length) {
//         currentLoopIndex = 0;
//       }
//     }
//   }


//   drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
//   window.requestAnimationFrame(gameLoop);
// }



const Penguin = require("./pushy-penguin") 

class Enemy{
  constructor(props){
    this.SCALE = 0.5;
    this.WIDTH = 43;
    this.HEIGHT = 36;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
    this.CYCLE_LOOP = [0, 47, 101, 144];
    this.FRAME_LIMIT = 12;
    this.MOVEMENT_SPEED = props.movementSpeed;
    this.game = props.game;

     this.currentDirection = 3;
     this.currentLoopIndex = 0;
     this.frameCount = 0;
     this.positionX = props.positionX
     this.positionY = 2;
     this.enemy = new Image();
     this.enemy.src = '../images/paperMarioPenguin.png';

  }

  // loadImage() {

  //   ****not sure what to do with this */
  //   this.enemy.onload = function () {
  //     window.requestAnimationFrame(this.game.gameLoop);
  //   };
  // }

  drawFrame(frameX, frameY, canvasX, canvasY, ctx) {
    ctx.drawImage(this.enemy,
      frameX, frameY, this.WIDTH, this.HEIGHT,
      canvasX, canvasY, this.SCALED_WIDTH, this.SCALED_HEIGHT);
  }

  update(delta) {
    this.positionY += (delta/20) * this.MOVEMENT_SPEED;

    //ctx.clearRect(0, 0, canvas.width, canvas.height);

   let hasMoved = true;
    if (hasMoved) {
      this.frameCount++;
      if (this.frameCount >= this.FRAME_LIMIT) {
        this.frameCount = 0;
        this.currentLoopIndex++;
        if (this.currentLoopIndex >= this.CYCLE_LOOP.length) {
          this.currentLoopIndex = 0;
        }
      }
    }
    let randArr = [1,2,3];
    // let pos = [this.positionX, this.positionY];
    if (this.game.isOutOfBounds([this.positionX, this.positionY])) {
      
      this.game.addEnemies(Math.ceil(Math.random() * 1.02));
      this.remove();
      }
    

  }

  isCollidedWith(otherObject) {
    // Check x and y for overlap
    let x1 = this.positionX;
    let x2 = otherObject.positionX;
    let y1 = this.positionY;
    let y2 = otherObject.positionY;
    let w1 = this.SCALED_WIDTH;
    let w2 = otherObject.SCALED_WIDTH;
    let h1 = this.SCALED_HEIGHT;
    let h2 = otherObject.SCALED_HEIGHT;
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
      return false;
    }
    return true;
  }

  remove() {
    this.game.remove(this);
  };


  collideWith(otherObject) {
    if (otherObject instanceof Penguin) {
      otherObject.velY = this.MOVEMENT_SPEED;
      return true;
    } 
    return false;
  };

}

module.exports = Enemy;