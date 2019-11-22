//const SCALE = 0.75;
// const WIDTH = 18;
// const HEIGHT = 26;
// const SCALED_WIDTH = SCALE * WIDTH; 
// const SCALED_HEIGHT = SCALE * HEIGHT;
// const CYCLE_LOOP = [26, 3, 26, 51];
// const FACING_DOWN = 70;
// const FACING_UP = 6;
// const FACING_LEFT = 102;
// const FACING_RIGHT = 38;
// const FRAME_LIMIT = 12;
// const MOVEMENT_SPEED = 2;

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');
// //ctx.imageSmoothingEnabled = false;
// let keyPresses = {};
// let currentDirection = FACING_DOWN;
// let currentLoopIndex = 0;
// let frameCount = 0;
// let positionX = 135;
// let positionY = 125;
// let img = new Image();




// function loadImage() {
// 	img.src = './images/penguin-gray.png';
// 	img.onload = function () {
// 		window.requestAnimationFrame(gameLoop);
// 	};
// }

// function drawFrame(frameX, frameY, canvasX, canvasY) {
// 	ctx.drawImage(img,
// 		frameX, frameY, WIDTH, HEIGHT,
// 		canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
// }

// loadImage();

// function gameLoop() {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// 	let hasMoved = false;

	// if (keyPresses.w) {
	// 	moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
	// 	currentDirection = FACING_UP;
	// 	hasMoved = true;
	// } else if (keyPresses.s) {
	// 	moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
	// 	currentDirection = FACING_DOWN;
	// 	hasMoved = true;
	// }
	// if (keyPresses.a) {
	// 	moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
	// 	currentDirection = FACING_LEFT;
	// 	hasMoved = true;
	// } else if (keyPresses.d) {
	// 	moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
	// 	currentDirection = FACING_RIGHT;
	// 	hasMoved = true;
	// }

// make my own listeners 
//on key down im setting velocity to whatever
// on keyup set to zero 
// call update with velocity in pushy-penguin




// 	if (hasMoved) {
// 		frameCount++;
// 		if (frameCount >= FRAME_LIMIT) {
// 			frameCount = 0;
// 			currentLoopIndex++;
// 			if (currentLoopIndex >= CYCLE_LOOP.length) {
// 				currentLoopIndex = 0;
// 			}
// 		}
// 	}


// 	if (!hasMoved) {
// 		currentLoopIndex = 0;
// 	}

// 	drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
// 	window.requestAnimationFrame(gameLoop);
// }



// function moveCharacter(deltaX, deltaY, direction) {
// 	if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
// 		positionX += deltaX;
// 	}
// 	if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
// 		positionY += deltaY;
// 	}
// 	currentDirection = direction;
// }


class Penguin{
	constructor(props){
		this.SCALE = 0.75;
		this.WIDTH = 18;
		this.HEIGHT = 26;
		this.SCALED_WIDTH = this.SCALE * this.WIDTH;
		this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
		this.CYCLE_LOOP = [26, 3, 26, 51];
		this.FACING_DOWN = 70;
		this.FACING_UP = 6;
		this.FACING_LEFT = 102;
		this.FACING_RIGHT = 38;
		this.FRAME_LIMIT = 12;
		this.MOVEMENT_SPEED = 2;
		this.ctx = props.ctx;
		this.velX = 0;
		this.velY = 0;
		
		this.keyPresses = {};
		this.currentDirection = this.FACING_DOWN;
		this.currentLoopIndex = 0;
		this.frameCount = 0;
		this.positionX = 135;
		this.positionY = 125;	
		this.canvasHeight = 700;
		this.canvasWidth = 400;
		this.game = props.game;

		
		this.img = new Image();
		this.img.src = '../images/penguin-gray.png';
	}

	// loadImage() {
	// this.img.onload = function () {
	// 	 	window.requestAnimationFrame(this.game.gameLoop);
	// 	 };
	// }

	drawFrame(frameX, frameY, canvasX, canvasY, ctx) {
		ctx.drawImage(this.img,
			frameX, frameY, this.WIDTH, this.HEIGHT,
			canvasX, canvasY, this.SCALED_WIDTH, this.SCALED_HEIGHT);
	}

	
		// if (keyPresses.w) {
		// 	moveCharacter(0, -this.MOVEMENT_SPEED, this.FACING_UP);
		// 	this.currentDirection = this.FACING_UP;
		// 	hasMoved = true;
		// } else if (keyPresses.s) {
		// 	moveCharacter(0, this.MOVEMENT_SPEED, this.FACING_DOWN);
		// 	this.currentDirection = this.FACING_DOWN;
		// 	hasMoved = true;
		// }
		// if (keyPresses.a) {
		// 	moveCharacter(-this.MOVEMENT_SPEED, 0, this.FACING_LEFT);
		// 	this.currentDirection = this.FACING_LEFT;
		// 	hasMoved = true;
		// } else if (keyPresses.d) {
		// 	moveCharacter(this.MOVEMENT_SPEED, 0, this.FACING_RIGHT);
		// 	this.currentDirection = this.FACING_RIGHT;
		// 	hasMoved = true;
		// }

		// if (hasMoved) {
		// 	this.frameCount++;
		// 	if (frameCount >= this.FRAME_LIMIT) {
		// 		this.frameCount = 0;
		// 		this.currentLoopIndex++;
		// 		if (this.currentLoopIndex >= this.CYCLE_LOOP.length) {
		// 			this.currentLoopIndex = 0;
		// 		}
		// 	}
		// }


		// if (!hasMoved) {
		// 	currentLoopIndex = 0;
		// }

	//	drawFrame(this.CYCLE_LOOP[currentLoopIndex], this.currentDirection, this.positionX, this.positionY);
	//	window.requestAnimationFrame(gameLoop);
	

	
	
	isCollidedWith(otherObject) {
		// Check x and y for overlap
		let x1 = this.positionX;
		let x2 = otherObject.positionX;
		let y1 = this.positionYl
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
	
	moveCharacter(deltaX, deltaY, direction) {
		// if (this.positionX + deltaX > 0 && this.positionX + this.SCALED_WIDTH + deltaX < this.canvasWidth) {
		// 	this.positionX += deltaX;
		// }
		// if (this.positionY + deltaY > 0 && this.positionY + this.SCALED_HEIGHT + deltaY < this.canvasHeight) {
		// 	this.positionY += deltaY;
		// }
		this.velX = deltaX;
		this.velY = deltaY;
		this.currentDirection = direction;
	}

	// move(timeDelta) {
	// 	// timeDelta is number of milliseconds since last move
	// 	// if the computer is busy the time delta will be larger
	// 	// in this case the MovingObject should move farther in this frame
	// 	// velocity of object is how far it should move in 1/60th of a second
	//   const NORMAL_FRAME_TIME_DELTA = 1000/30;
	// 	const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
	// 		offsetX = this.MOVEMENT_SPEED * velocityScale,
	// 		offsetY = this.MOVEMENT_SPEED * velocityScale;

	// 	this.pos = [this.positionX + offsetX, this.positionY + offsetY];

	// 	if (this.game.isOutOfBounds(this.pos)) {
	// 		if (this.isWrappable) {
	// 			this.pos = this.game.wrap(this.pos);
	// 		} else {
	// 			this.remove();
	// 		}
	// 	}
	// };

update(delta) {

	this.positionX += (delta / 20) * this.velX;
	this.positionY += (delta / 20) * this.velY;

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
}


	collideWith(otherObject) {
		// default do nothing
	};


}

module.exports = Penguin;
