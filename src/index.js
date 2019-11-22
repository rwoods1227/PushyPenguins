const Game = require("../src/game.js");
const GameView = require("../src/game_view");

document.addEventListener("DOMContentLoaded", function () {
  console.log("webpack is working")
  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');
  
  const game = new Game();
  new GameView(game, ctx).start();
});