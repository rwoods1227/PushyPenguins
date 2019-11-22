const Enemy = require("./enemy-penguin");
const Penguin = require("./pushy-penguin");

class Game{
  constructor(){
    this.enemies = [];
    this.penguins = [];
    this.frameLimit = 12;
    
    this.canvasHeight = 700;
    this.canvasWidth = 400;

    this.addEnemies(4);

 
  }

  add(object) {
    if (object instanceof Enemy) {
      this.enemies.push(object);
    } else if (object instanceof Penguin) {
      this.penguins.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  };

  addEnemies(enemy_number) {
    for (let i = 0; i < enemy_number; i++) {
      let enemy = new Enemy({ game: this, positionX: Math.random() * 275 })
      this.add(enemy);
      // enemy.loadImage();
    }
  };

  addPenguin() {
    const penguin = new Penguin({
      positionX: 135,
      positionY: 125,
      game: this
    });

    this.add(penguin);
    // penguin.loadImage();
    

    return penguin;
  };

  allObjects() {
    return [].concat(this.penguins, this.enemies);
  };

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  };

  draw(ctx) {
    ctx.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    
    this.allObjects().forEach((object) => {
      // console.log(ctx)
      object.drawFrame(object.CYCLE_LOOP[object.currentLoopIndex], object.currentDirection, object.positionX, object.positionY, ctx);
    });
  };


  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > this.canvasWidth) || (pos[1] > 150);
  };


  moveObjects(delta) {
    this.allObjects().forEach(function (object) {
         object.update(delta);
      
    });
  };


  remove(object) {
  if (object instanceof Enemy) {
      this.enemies.splice(this.enemies.indexOf(object), 1);
    } else if (object instanceof Penguin) {
      this.penguins.splice(this.penguins.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
  };

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  };

}

module.exports = Game;