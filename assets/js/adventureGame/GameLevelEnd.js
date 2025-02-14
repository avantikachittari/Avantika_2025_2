// GameLevelEnd.js
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

class GameLevelEnd {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data for the end level (a celebration background)
    const image_src_end = path + "/images/gamify/end.png"; // be sure to include the path
    const image_data_end = {
        name: 'end',
        greeting: "Congratulations! You've completed the desert challenge. Here's your reward!",
        src: image_src_end,
        pixels: {height: 580, width: 1038}
    };

    // Player data for Butterfly at the end of the game
    const sprite_src_butterfly = path + "/images/gamify/Butterfly.png"; // Chillguy sprite
    const Butterflyutterfly_SCALE_FACTOR = 5;
    const sprite_data_Butterfly = {
        id: 'Butterfly',
        greeting: "Congrats!",
        src: sprite_src_butterfly,
        SCALE_FACTOR: butterfly_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height / _SCALE_FACTOR) }, 
        pixels: {height: 256, width: 192},
        orientation: {rows: 4, columns: 3 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 1, start: 0, columns: 3 },
        right: {row: 2, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // NPC data for the Reward Giver
    const sprite_src_reward_npc = path + "/images/gamify/reward_npc.png"; // Reward NPC sprite
    const sprite_data_reward_npc = {
        id: 'Reward Giver',
        greeting: "You've completed the challenge! Here's your well-earned reward.",
        src: sprite_src_reward_npc,
        SCALE_FACTOR: 10,  // Adjust as needed
        ANIMATION_RATE: 50,
        pixels: {height: 800, width: 600},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 4, columns: 5 },
        down: {row: 0, start: 0, columns: 3 },  // Default direction for NPC
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 }
    };

    // List of objects definitions for the end level
    this.objects = [
      { class: Background, data: image_data_end },
      { class: Player, data: sprite_data_butterfly },
      { class: Npc, data: sprite_data_reward_npc }
    ];
  }
}

export default GameLevelEnd;
