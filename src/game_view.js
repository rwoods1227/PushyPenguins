
class GameView{
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;
    this.penguin = this.game.addPenguin();
    //  x spaces, y spaces, FACING_X corresponding number
    this.moves = {
      w: [0, -2, 6],
      a: [-3, 0, 102],
      s: [0, 2, 70],
      d: [3, 0, 38],
    };
    this.i = 0;
    // this.canvasX = 400;
    // this.canvasY = 700;
  
    
    window.addEventListener('keydown', (e)=>{
      switch (e.code) {
        case 'KeyW':
          this.penguin.moveCharacter(0, -2, 6)
          break;
        case 'KeyA':
          this.penguin.moveCharacter(-5, 0, 102)
          break;
        case 'KeyS':
          this.penguin.moveCharacter(0, 2, 70)
          break;
        case 'KeyD':
          this.penguin.moveCharacter(5, 0, 38)
          break;
        default:
          break;
      }
    });
    window.addEventListener('keyup', (e)=>{
      switch (e.code) {
        case 'KeyW':
          this.penguin.moveCharacter(0, 0, 6)
          break;
        case 'KeyA':
          this.penguin.moveCharacter(0, 0, 102)
          break;
        case 'KeyS':
          this.penguin.moveCharacter(0, 0, 70)
          break;
        case 'KeyD':
          this.penguin.moveCharacter(0, 0, 38)
          break;
        default:
          break;
      }
    });

  }
 


  start() {
    // this.keyDownListener(event);
    // this.keyDownListener(event);
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.gameLoop.bind(this));
  };


  gameLoop(time) {
    const timeDelta = time - this.lastTime;
    if (time < 1000){
      this.i = 1500;
    }
    if(time > this.i){
      this.game.addEnemies(Math.ceil(Math.random() * 1.05));
      this.i += 3500;
    }

    this.game.step(timeDelta);// similar to moveCharacter
    this.game.draw(this.ctx);// similar to draw
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.gameLoop.bind(this));
  };

}
module.exports = GameView;