
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
		this.img.src = '../dist/images/penguin-gray.png';
	}

	

	drawFrame(frameX, frameY, canvasX, canvasY, ctx) {
		ctx.drawImage(this.img,
			frameX, frameY, this.WIDTH, this.HEIGHT,
			canvasX, canvasY, this.SCALED_WIDTH, this.SCALED_HEIGHT);
	}

	
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

	if (this.game.isOutOfBounds([this.positionX, this.positionY])) {

		this.remove();
	}

}


	collideWith(otherObject) {
		// default do nothing
	};

	remove() {
		this.game.remove(this);

		// also trigger lose conditionw
	};


}

module.exports = Penguin;
