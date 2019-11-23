
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
    this.j = 0;
    this.k = 0;
    this.startTime =0;
    this.p = 0;
    this.openingClass1 = "openingFirst";
    this.openingClass2 = "openingSecond";
    this.openingClass3 = "openingThird";
    this.openingClass4 = "openingFourth";
    this.openingClass5 = "openingFifth";
    this.openingClass6 = "openingSixth";
    this.openingClass7 = "gameTime";

    this.openingText1 = "The following expostion is based(loosely) on the events of a real Penguin: \n \n  One day, Grape-Kun, a penguin living at the Tobu Zoo in Japan, found true love. His enclosure now contained stoic female penguin, who was more beautiful than any other. \n\n Click Next To continue the story";
    this.openingText2 = "Grape-Kun and Hululu enjoyed many amazing months together. Hululu would remain on her stone platform while Grape-kun spent as much time as possible with her.";
    this.openingText3 = "But the happy times soon ended. The Zookeepers decided to snatch away his beloved Hululu no matter how hard he pleaded.";
    this.openingText4 = "As he watched her go, Grape-kun was filled with despair. He was certain that he would never see Hululu again. He grew weaker and almost gave up hope.";
    this.openingText5 = "But then he saw her, shimmering like an angel inside the zookeper's office. Grape-kun mustered up all of his remaining stength and broke out of his enclosure and into the office. In front of the shining doorway to another world, Grape-kun faked his death and leapt inside....";
    this.openingText6 = "This game provides an alternate ending to the real-life death of a penguin who fell in love with a 2D penguin-girl and died due to this love and heartbreak regarding said Hululu. \n \n Help Grape-Kun get his happily-ever after by navigating him through a swarm of pushy 2D penguins that try to push him into deadly waters. If Grape-Kun touches any border, the game will be lost. \n\n Use common WASD controls to move Grape-Kun through the penguins and survive long enough for a good-end";
    this.openingText7 = "gameTime";

    this.goodEnd = "good-end";
    this.badEnd = "bad-end"


    this.openingArr = [this.openingClass1, this.openingClass2, this.openingClass3, this.openingClass4, this.openingClass5, this.openingClass6, this.openingClass7];
    this.openingTextArr = [this.openingText1, this.openingText2, this.openingText3, this.openingText4, this.openingText5, this.openingText6, this.openingText7];
    // this.canvasX = 400;
    // this.canvasY = 700;
    document.getElementById("next").addEventListener('click', (event)=> {
      event.preventDefault();
      console.log(this.openingArr);
      // cycle through opening frames
      if (this.j < this.openingArr.length-2) {
        document.getElementById("pushy-penguin").classList.remove(this.openingArr[this.j]);
        document.getElementById("story-text").innerHTML = this.openingTextArr[this.j +1];

        this.j += 1;
        document.getElementById("pushy-penguin").classList.add(this.openingArr[this.j]);

        console.log(event.target);
      }
       else if(this.p ===0){
        document.getElementById("pushy-penguin").classList.remove(this.openingArr[this.j]);
        document.getElementById("story-text").innerHTML = this.openingTextArr[this.j];

        this.j += 1;
        document.getElementById("pushy-penguin").classList.add(this.openingArr[this.j]);
        this.p +=1;
        document.getElementById("next").classList.add("hidden")
        document.getElementById("story").classList.add("hidden")
        // document.getElementsByClassName("story-text").classList.add("hidden")
        this.start();
      }
    });
      // If the clicked element doesn't have the right selector, bail
     

      // Don't follow the link
      
 
  
    
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
    
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.gameLoop.bind(this));
  };


  gameLoop(time) {
    if (this.k ===0){
      this.k =1;
     this.startTime = time;
    }
    time = time - this.startTime;

    if (time > 80000){

      this.game.allObjects().forEach(object => {
        this.game.remove(object);
      });
      this.game.draw(this.ctx)
        
      //this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      document.getElementById("pushy-penguin").classList.add(this.goodEnd)
      document.getElementById("story").classList.remove("hidden");
      document.getElementById("story-text").innerHTML = "You Win, refresh to play again";
      return true
    } else if (this.game.lose){
     
      this.game.allObjects().forEach(object => {
        this.game.remove(object);
      });
      this.game.draw(this.ctx)
      //this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      document.getElementById("pushy-penguin").classList.add(this.badEnd)
      document.getElementById("story").classList.remove("hidden");
      document.getElementById("story-text").innerHTML = "You Lose, refresh to try again";
      return false
    }
    else{
      const timeDelta = time - this.lastTime;
      if (time < 1000){
        this.i = 1500;
      }
      if(time > this.i){
        this.game.addEnemies(Math.ceil(Math.random() * 1.05));
        this.i += 3500;
      }
  
  
      // this.game.won? lost? 
  
      this.game.step(timeDelta);// similar to moveCharacter
      this.game.draw(this.ctx);// similar to draw
      this.lastTime = time;
  
      // every call to animate requests causes another call to animate
      requestAnimationFrame(this.gameLoop.bind(this));
    }
    
  };

}
module.exports = GameView;