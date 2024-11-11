// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js';
import PlayerOne from './PlayerOne.js';
import PlayerTwo from './PlayerTwo.js';
import PlayerThree from './PlayerThree.js';

// Minimal Definition
class GameLevelSquares {
  constructor(path) {
    this.objects = [
      { class: Background, data: {} },
      { class: PlayerOne },
      { class: PlayerTwo },
      { class: PlayerThree },
    ];
  }
}

export default GameLevelSquares;