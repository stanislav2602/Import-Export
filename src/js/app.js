const gameModule = require('./game.js');

const Game = gameModule.Game;
const GameSavingData = gameModule.GameSavingData;
const loadGame = gameModule.readGameSaving;
const saveGame = gameModule.writeGameSaving;

const game = new Game();
game.start();