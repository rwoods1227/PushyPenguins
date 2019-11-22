/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enemy-penguin.js":
/*!******************************!*\
  !*** ./src/enemy-penguin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const SCALE = 0.5;\n// const WIDTH = 43;\n// const HEIGHT = 36;\n// const SCALED_WIDTH = SCALE * WIDTH;\n// const SCALED_HEIGHT = SCALE * HEIGHT;\n// const CYCLE_LOOP = [0, 47, 101, 144];\n// const FRAME_LIMIT = 12;\n// const MOVEMENT_SPEED = 2;\n\n// // let canvas = document.querySelector('canvas');\n// // let ctx = canvas.getContext('2d');\n// //ctx.imageSmoothingEnabled = false;\n// // let keyPresses = {};\n// let currentDirection = 3;\n// let currentLoopIndex = 0;\n// let frameCount = 0;\n// let positionX = Math.random() *275;\n// let positionY = 0;\n// let enemy = new Image();\n\n\n// function loadImage() {\n//   enemy.src = '../images/paperMarioPenguin.png';\n//   enemy.onload = function () {\n//     window.requestAnimationFrame(gameLoop);\n//   };\n// }\n\n// function drawFrame(frameX, frameY, canvasX, canvasY) {\n//   ctx.drawImage(enemy,\n//     frameX, frameY, WIDTH, HEIGHT,\n//     canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);\n// }\n\n// loadImage();\n\n// function gameLoop() {\n//   ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n//   let hasMoved = true;\n//   positionY += 0.5;\n//   if (hasMoved) {\n//     frameCount++;\n//     if (frameCount >= FRAME_LIMIT) {\n//       frameCount = 0;\n//       currentLoopIndex++;\n//       if (currentLoopIndex >= CYCLE_LOOP.length) {\n//         currentLoopIndex = 0;\n//       }\n//     }\n//   }\n\n\n//   drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);\n//   window.requestAnimationFrame(gameLoop);\n// }\n\n\n\nconst Penguin = __webpack_require__(/*! ./pushy-penguin */ \"./src/pushy-penguin.js\") \n\nclass Enemy{\n  constructor(props){\n    this.SCALE = 0.5;\n    this.WIDTH = 43;\n    this.HEIGHT = 36;\n    this.SCALED_WIDTH = this.SCALE * this.WIDTH;\n    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;\n    this.CYCLE_LOOP = [0, 47, 101, 144];\n    this.FRAME_LIMIT = 12;\n    this.MOVEMENT_SPEED = props.movementSpeed;\n    this.game = props.game;\n\n     this.currentDirection = 3;\n     this.currentLoopIndex = 0;\n     this.frameCount = 0;\n     this.positionX = props.positionX\n     this.positionY = 2;\n     this.enemy = new Image();\n     this.enemy.src = '../images/paperMarioPenguin.png';\n\n  }\n\n  // loadImage() {\n\n  //   ****not sure what to do with this */\n  //   this.enemy.onload = function () {\n  //     window.requestAnimationFrame(this.game.gameLoop);\n  //   };\n  // }\n\n  drawFrame(frameX, frameY, canvasX, canvasY, ctx) {\n    ctx.drawImage(this.enemy,\n      frameX, frameY, this.WIDTH, this.HEIGHT,\n      canvasX, canvasY, this.SCALED_WIDTH, this.SCALED_HEIGHT);\n  }\n\n  update(delta) {\n    this.positionY += (delta/20) * this.MOVEMENT_SPEED;\n\n    //ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n   let hasMoved = true;\n    if (hasMoved) {\n      this.frameCount++;\n      if (this.frameCount >= this.FRAME_LIMIT) {\n        this.frameCount = 0;\n        this.currentLoopIndex++;\n        if (this.currentLoopIndex >= this.CYCLE_LOOP.length) {\n          this.currentLoopIndex = 0;\n        }\n      }\n    }\n    let randArr = [1,2,3];\n    // let pos = [this.positionX, this.positionY];\n    if (this.game.isOutOfBounds([this.positionX, this.positionY])) {\n      \n      this.game.addEnemies(Math.ceil(Math.random() * 1.02));\n      this.remove();\n      }\n    \n\n  }\n\n  isCollidedWith(otherObject) {\n    // Check x and y for overlap\n    let x1 = this.positionX;\n    let x2 = otherObject.positionX;\n    let y1 = this.positionY;\n    let y2 = otherObject.positionY;\n    let w1 = this.SCALED_WIDTH;\n    let w2 = otherObject.SCALED_WIDTH;\n    let h1 = this.SCALED_HEIGHT;\n    let h2 = otherObject.SCALED_HEIGHT;\n    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {\n      return false;\n    }\n    return true;\n  }\n\n  remove() {\n    this.game.remove(this);\n  };\n\n\n  collideWith(otherObject) {\n    if (otherObject instanceof Penguin) {\n      otherObject.velY = this.MOVEMENT_SPEED;\n      return true;\n    } \n    return false;\n  };\n\n}\n\nmodule.exports = Enemy;\n\n//# sourceURL=webpack:///./src/enemy-penguin.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Enemy = __webpack_require__(/*! ./enemy-penguin */ \"./src/enemy-penguin.js\");\nconst Penguin = __webpack_require__(/*! ./pushy-penguin */ \"./src/pushy-penguin.js\");\n\nclass Game{\n  constructor(){\n    this.enemies = [];\n    this.penguins = [];\n    this.frameLimit = 12;\n    \n    this.canvasHeight = 700;\n    this.canvasWidth = 400;\n\n    this.addEnemies(4);\n\n \n  }\n\n  add(object) {\n    if (object instanceof Enemy) {\n      this.enemies.push(object);\n    } else if (object instanceof Penguin) {\n      this.penguins.push(object);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  };\n\n  addEnemies(enemy_number) {\n    for (let i = 0; i < enemy_number; i++) {\n      let enemy = new Enemy({ game: this, positionX: Math.random() * 275, movementSpeed: (Math.random() + 0.2)})\n      this.add(enemy);\n      // enemy.loadImage();\n    }\n  };\n\n  addPenguin() {\n    const penguin = new Penguin({\n      positionX: 135,\n      positionY: 125,\n      game: this\n    });\n\n    this.add(penguin);\n    // penguin.loadImage();\n    \n\n    return penguin;\n  };\n\n  allObjects() {\n    return [].concat(this.penguins, this.enemies);\n  };\n\n  checkCollisions() {\n    const allObjects = this.allObjects();\n    for (let i = 0; i < allObjects.length; i++) {\n      for (let j = 0; j < allObjects.length; j++) {\n        const obj1 = allObjects[i];\n        const obj2 = allObjects[j];\n\n        if (obj1.isCollidedWith(obj2)) {\n          const collision = obj1.collideWith(obj2);\n          if (collision) return;\n        }\n      }\n    }\n  };\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.canvasWidth,this.canvasHeight);\n    \n    this.allObjects().forEach((object) => {\n      // console.log(ctx)\n      object.drawFrame(object.CYCLE_LOOP[object.currentLoopIndex], object.currentDirection, object.positionX, object.positionY, ctx);\n    });\n  };\n\n\n  isOutOfBounds(pos) {\n    return (pos[0] < 0) || (pos[1] < 0) ||\n      (pos[0] > this.canvasWidth) || (pos[1] > 150);\n  };\n\n\n  moveObjects(delta) {\n    this.allObjects().forEach(function (object) {\n         object.update(delta);\n      \n    });\n  };\n\n\n  remove(object) {\n  if (object instanceof Enemy) {\n      this.enemies.splice(this.enemies.indexOf(object), 1);\n    } else if (object instanceof Penguin) {\n      this.penguins.splice(this.penguins.indexOf(object), 1);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  };\n\n  step(delta) {\n    this.moveObjects(delta);\n    this.checkCollisions();\n  };\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass GameView{\n  constructor(game, ctx){\n    this.ctx = ctx;\n    this.game = game;\n    this.penguin = this.game.addPenguin();\n    //  x spaces, y spaces, FACING_X corresponding number\n    this.moves = {\n      w: [0, -2, 6],\n      a: [-3, 0, 102],\n      s: [0, 2, 70],\n      d: [3, 0, 38],\n    };\n    this.i = 0;\n    // this.canvasX = 400;\n    // this.canvasY = 700;\n  \n    \n    window.addEventListener('keydown', (e)=>{\n      switch (e.code) {\n        case 'KeyW':\n          this.penguin.moveCharacter(0, -2, 6)\n          break;\n        case 'KeyA':\n          this.penguin.moveCharacter(-5, 0, 102)\n          break;\n        case 'KeyS':\n          this.penguin.moveCharacter(0, 2, 70)\n          break;\n        case 'KeyD':\n          this.penguin.moveCharacter(5, 0, 38)\n          break;\n        default:\n          break;\n      }\n    });\n    window.addEventListener('keyup', (e)=>{\n      switch (e.code) {\n        case 'KeyW':\n          this.penguin.moveCharacter(0, 0, 6)\n          break;\n        case 'KeyA':\n          this.penguin.moveCharacter(0, 0, 102)\n          break;\n        case 'KeyS':\n          this.penguin.moveCharacter(0, 0, 70)\n          break;\n        case 'KeyD':\n          this.penguin.moveCharacter(0, 0, 38)\n          break;\n        default:\n          break;\n      }\n    });\n\n  }\n \n\n\n  start() {\n    // this.keyDownListener(event);\n    // this.keyDownListener(event);\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.gameLoop.bind(this));\n  };\n\n\n  gameLoop(time) {\n    const timeDelta = time - this.lastTime;\n    if (time < 1000){\n      this.i = 1500;\n    }\n    if(time > this.i){\n      this.game.addEnemies(Math.ceil(Math.random() * 1.05));\n      this.i += 3500;\n    }\n\n    this.game.step(timeDelta);// similar to moveCharacter\n    this.game.draw(this.ctx);// similar to draw\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.gameLoop.bind(this));\n  };\n\n}\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ../src/game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ../src/game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"webpack is working\")\n  let canvas = document.querySelector('canvas');\n  let ctx = canvas.getContext('2d');\n  \n  const game = new Game();\n  new GameView(game, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pushy-penguin.js":
/*!******************************!*\
  !*** ./src/pushy-penguin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//const SCALE = 0.75;\n// const WIDTH = 18;\n// const HEIGHT = 26;\n// const SCALED_WIDTH = SCALE * WIDTH; \n// const SCALED_HEIGHT = SCALE * HEIGHT;\n// const CYCLE_LOOP = [26, 3, 26, 51];\n// const FACING_DOWN = 70;\n// const FACING_UP = 6;\n// const FACING_LEFT = 102;\n// const FACING_RIGHT = 38;\n// const FRAME_LIMIT = 12;\n// const MOVEMENT_SPEED = 2;\n\n// let canvas = document.querySelector('canvas');\n// let ctx = canvas.getContext('2d');\n// //ctx.imageSmoothingEnabled = false;\n// let keyPresses = {};\n// let currentDirection = FACING_DOWN;\n// let currentLoopIndex = 0;\n// let frameCount = 0;\n// let positionX = 135;\n// let positionY = 125;\n// let img = new Image();\n\n\n\n\n// function loadImage() {\n// \timg.src = './images/penguin-gray.png';\n// \timg.onload = function () {\n// \t\twindow.requestAnimationFrame(gameLoop);\n// \t};\n// }\n\n// function drawFrame(frameX, frameY, canvasX, canvasY) {\n// \tctx.drawImage(img,\n// \t\tframeX, frameY, WIDTH, HEIGHT,\n// \t\tcanvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);\n// }\n\n// loadImage();\n\n// function gameLoop() {\n// \tctx.clearRect(0, 0, canvas.width, canvas.height);\n\n// \tlet hasMoved = false;\n\n\t// if (keyPresses.w) {\n\t// \tmoveCharacter(0, -MOVEMENT_SPEED, FACING_UP);\n\t// \tcurrentDirection = FACING_UP;\n\t// \thasMoved = true;\n\t// } else if (keyPresses.s) {\n\t// \tmoveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);\n\t// \tcurrentDirection = FACING_DOWN;\n\t// \thasMoved = true;\n\t// }\n\t// if (keyPresses.a) {\n\t// \tmoveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);\n\t// \tcurrentDirection = FACING_LEFT;\n\t// \thasMoved = true;\n\t// } else if (keyPresses.d) {\n\t// \tmoveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);\n\t// \tcurrentDirection = FACING_RIGHT;\n\t// \thasMoved = true;\n\t// }\n\n// make my own listeners \n//on key down im setting velocity to whatever\n// on keyup set to zero \n// call update with velocity in pushy-penguin\n\n\n\n\n// \tif (hasMoved) {\n// \t\tframeCount++;\n// \t\tif (frameCount >= FRAME_LIMIT) {\n// \t\t\tframeCount = 0;\n// \t\t\tcurrentLoopIndex++;\n// \t\t\tif (currentLoopIndex >= CYCLE_LOOP.length) {\n// \t\t\t\tcurrentLoopIndex = 0;\n// \t\t\t}\n// \t\t}\n// \t}\n\n\n// \tif (!hasMoved) {\n// \t\tcurrentLoopIndex = 0;\n// \t}\n\n// \tdrawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);\n// \twindow.requestAnimationFrame(gameLoop);\n// }\n\n\n\n// function moveCharacter(deltaX, deltaY, direction) {\n// \tif (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {\n// \t\tpositionX += deltaX;\n// \t}\n// \tif (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {\n// \t\tpositionY += deltaY;\n// \t}\n// \tcurrentDirection = direction;\n// }\n\n\nclass Penguin{\n\tconstructor(props){\n\t\tthis.SCALE = 0.75;\n\t\tthis.WIDTH = 18;\n\t\tthis.HEIGHT = 26;\n\t\tthis.SCALED_WIDTH = this.SCALE * this.WIDTH;\n\t\tthis.SCALED_HEIGHT = this.SCALE * this.HEIGHT;\n\t\tthis.CYCLE_LOOP = [26, 3, 26, 51];\n\t\tthis.FACING_DOWN = 70;\n\t\tthis.FACING_UP = 6;\n\t\tthis.FACING_LEFT = 102;\n\t\tthis.FACING_RIGHT = 38;\n\t\tthis.FRAME_LIMIT = 12;\n\t\tthis.MOVEMENT_SPEED = 2;\n\t\tthis.ctx = props.ctx;\n\t\tthis.velX = 0;\n\t\tthis.velY = 0;\n\t\t\n\t\tthis.keyPresses = {};\n\t\tthis.currentDirection = this.FACING_DOWN;\n\t\tthis.currentLoopIndex = 0;\n\t\tthis.frameCount = 0;\n\t\tthis.positionX = 135;\n\t\tthis.positionY = 125;\t\n\t\tthis.canvasHeight = 700;\n\t\tthis.canvasWidth = 400;\n\t\tthis.game = props.game;\n\n\t\t\n\t\tthis.img = new Image();\n\t\tthis.img.src = '../images/penguin-gray.png';\n\t}\n\n\t// loadImage() {\n\t// this.img.onload = function () {\n\t// \t \twindow.requestAnimationFrame(this.game.gameLoop);\n\t// \t };\n\t// }\n\n\tdrawFrame(frameX, frameY, canvasX, canvasY, ctx) {\n\t\tctx.drawImage(this.img,\n\t\t\tframeX, frameY, this.WIDTH, this.HEIGHT,\n\t\t\tcanvasX, canvasY, this.SCALED_WIDTH, this.SCALED_HEIGHT);\n\t}\n\n\t\n\t\t// if (keyPresses.w) {\n\t\t// \tmoveCharacter(0, -this.MOVEMENT_SPEED, this.FACING_UP);\n\t\t// \tthis.currentDirection = this.FACING_UP;\n\t\t// \thasMoved = true;\n\t\t// } else if (keyPresses.s) {\n\t\t// \tmoveCharacter(0, this.MOVEMENT_SPEED, this.FACING_DOWN);\n\t\t// \tthis.currentDirection = this.FACING_DOWN;\n\t\t// \thasMoved = true;\n\t\t// }\n\t\t// if (keyPresses.a) {\n\t\t// \tmoveCharacter(-this.MOVEMENT_SPEED, 0, this.FACING_LEFT);\n\t\t// \tthis.currentDirection = this.FACING_LEFT;\n\t\t// \thasMoved = true;\n\t\t// } else if (keyPresses.d) {\n\t\t// \tmoveCharacter(this.MOVEMENT_SPEED, 0, this.FACING_RIGHT);\n\t\t// \tthis.currentDirection = this.FACING_RIGHT;\n\t\t// \thasMoved = true;\n\t\t// }\n\n\t\t// if (hasMoved) {\n\t\t// \tthis.frameCount++;\n\t\t// \tif (frameCount >= this.FRAME_LIMIT) {\n\t\t// \t\tthis.frameCount = 0;\n\t\t// \t\tthis.currentLoopIndex++;\n\t\t// \t\tif (this.currentLoopIndex >= this.CYCLE_LOOP.length) {\n\t\t// \t\t\tthis.currentLoopIndex = 0;\n\t\t// \t\t}\n\t\t// \t}\n\t\t// }\n\n\n\t\t// if (!hasMoved) {\n\t\t// \tcurrentLoopIndex = 0;\n\t\t// }\n\n\t//\tdrawFrame(this.CYCLE_LOOP[currentLoopIndex], this.currentDirection, this.positionX, this.positionY);\n\t//\twindow.requestAnimationFrame(gameLoop);\n\t\n\n\t\n\t\n\tisCollidedWith(otherObject) {\n\t\t// Check x and y for overlap\n\t\tlet x1 = this.positionX;\n\t\tlet x2 = otherObject.positionX;\n\t\tlet y1 = this.positionYl\n\t\tlet y2 = otherObject.positionY;\n\t\tlet w1 = this.SCALED_WIDTH;\n\t\tlet w2 = otherObject.SCALED_WIDTH;\n\t\tlet h1 = this.SCALED_HEIGHT;\n\t\tlet h2 = otherObject.SCALED_HEIGHT;\n\t\tif (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n\t\n\tmoveCharacter(deltaX, deltaY, direction) {\n\t\t// if (this.positionX + deltaX > 0 && this.positionX + this.SCALED_WIDTH + deltaX < this.canvasWidth) {\n\t\t// \tthis.positionX += deltaX;\n\t\t// }\n\t\t// if (this.positionY + deltaY > 0 && this.positionY + this.SCALED_HEIGHT + deltaY < this.canvasHeight) {\n\t\t// \tthis.positionY += deltaY;\n\t\t// }\n\t\tthis.velX = deltaX;\n\t\tthis.velY = deltaY;\n\t\tthis.currentDirection = direction;\n\t}\n\n\t// move(timeDelta) {\n\t// \t// timeDelta is number of milliseconds since last move\n\t// \t// if the computer is busy the time delta will be larger\n\t// \t// in this case the MovingObject should move farther in this frame\n\t// \t// velocity of object is how far it should move in 1/60th of a second\n\t//   const NORMAL_FRAME_TIME_DELTA = 1000/30;\n\t// \tconst velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n\t// \t\toffsetX = this.MOVEMENT_SPEED * velocityScale,\n\t// \t\toffsetY = this.MOVEMENT_SPEED * velocityScale;\n\n\t// \tthis.pos = [this.positionX + offsetX, this.positionY + offsetY];\n\n\t// \tif (this.game.isOutOfBounds(this.pos)) {\n\t// \t\tif (this.isWrappable) {\n\t// \t\t\tthis.pos = this.game.wrap(this.pos);\n\t// \t\t} else {\n\t// \t\t\tthis.remove();\n\t// \t\t}\n\t// \t}\n\t// };\n\nupdate(delta) {\n\n\tthis.positionX += (delta / 20) * this.velX;\n\tthis.positionY += (delta / 20) * this.velY;\n\n\tlet hasMoved = true;\n\tif (hasMoved) {\n\t\tthis.frameCount++;\n\t\tif (this.frameCount >= this.FRAME_LIMIT) {\n\t\t\tthis.frameCount = 0;\n\t\t\tthis.currentLoopIndex++;\n\t\t\tif (this.currentLoopIndex >= this.CYCLE_LOOP.length) {\n\t\t\t\tthis.currentLoopIndex = 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n\n\tcollideWith(otherObject) {\n\t\t// default do nothing\n\t};\n\n\n}\n\nmodule.exports = Penguin;\n\n\n//# sourceURL=webpack:///./src/pushy-penguin.js?");

/***/ })

/******/ });