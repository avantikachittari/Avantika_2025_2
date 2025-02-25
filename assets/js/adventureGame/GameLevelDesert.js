import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Bat from './Bat.js';
import Spider from './Spider.js';
import Exit from './Exit.js';
//import Spider from './Spider.js';

class GameLevelDesert {
  constructor(path, canvas) {  // Accept `canvas` as an argument
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;


    // Background data
    const image_src_desert = path + "/images/gamify/cave.png"; // be sure to include the path
    const image_data_desert = {
        name: 'Desert',
        greeting: "Welcome to the cave!  It is wet and must!",
        src: image_src_desert,
        pixels: {height: 1062, width: 1867}
    };

    // Player Data
    const sprite_src_chillguy = path + "/images/gamify/you.png";
    console.log(`Loading player sprite from: ${sprite_src_chillguy}`); // Log image path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      name: 'mainplayer',
      greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
      src: sprite_src_chillguy,
      SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / CHILLGUY_SCALE_FACTOR) },
      pixels: { height: 256, width: 192 },
      orientation: { rows: 4, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 1, start: 0, columns: 3 },
      right: { row: 2, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // NPC Data
    const sprite_src_bat = path + "/images/gamify/bat.png";
    console.log(`Loading NPC sprite from: ${sprite_src_bat}`); // Log image path
    const sprite_data_bat = {
      id: 'Bat',
      greeting: "I will kill you!!!!",
      src: sprite_src_bat,
      SCALE_FACTOR: 10,
      ANIMATION_RATE: 50,
      pixels: { height: 1200, width: 1000 },
      INIT_POSITION: { x: width / 2, y: height / 2 },
      orientation: { rows: 12, columns: 5 },
      down: { row: 5, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
    };

    const sprite_src_spider = path + "/images/gamify/spider.png";
    console.log(`Loading NPC sprite from: ${sprite_src_spider}`); // Log image path
    const sprite_data_spider = {
      id: 'Spider',
      greeting: "Time to dieeeee-",
      src: sprite_src_spider,
      SCALE_FACTOR: 15,
      ANIMATION_RATE: 50,
      pixels: { height: 655, width: 390 },
      INIT_POSITION: { x: width / 4, y: height / 4 },
      orientation: { rows: 4, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.3, heightPercentage: 0.3 },
    };

    const sprite_src_exit = path + "/images/gamify/wizard.png";
    console.log(`Loading NPC sprite from: ${sprite_src_exit}`); // Log image path
    const sprite_data_exit = {
      id: 'Exit',
      src: sprite_src_exit,
      SCALE_FACTOR: 15,
      ANIMATION_RATE: 50,
      pixels: { height: 185, width: 163 },
      INIT_POSITION: { x: width * 0.7 , y: height * 0.53 },
      orientation: { rows: 1, columns: 1 },
      down: { row: 0, start: 0, columns: 1 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1},
    };

    const sprite_src_robot = path + "/images/rpg/fishies.png"; // be sure to include the path
    const sprite_data_robot = {
        id: 'Fish',
        greeting: "Hi I am your game Fish.  I am very happy to share my knowledge with you! \nWant to get out of this cave? You must run fast so the bat wont kill you and make sure you don't get too close to the Spider ;) \nPress key 'e' or 'u' for learning",
        src: sprite_src_robot,
        SCALE_FACTOR: 16,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 100,
        pixels: {height: 256, width: 384},
        INIT_POSITION: { x: (width * 1 / 4), y: (height * 3 / 4)},
        orientation: {rows: 8, columns: 12 },
        down: {row: 0, start: 0, columns: 6 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
        quiz: { 
          title: "Wizard Quiz",
          questions: [ "What do you wish to earn today?\n1. Wisdom\n2. Gold\n3. Power\n4. Fame",
            "How do you plan to earn it?\n1. Study\n2. Work\n3. Steal\n4. Cheat",
            "What will you do with it?\n1. Share\n2. Keep\n3. Spend\n4. Waste",
            "Why do you seek it?\n1. Knowledge\n2. Wealth\n3. Control\n4. Attention",
            "When will you know you have it?\n1. Never\n2. Always\n3. Sometimes\n4. Later"
]
        }
      };

    // Create instances of Bat and Spider using `canvas`
    //const bat = new Bat(canvas, sprite_src_bat, sprite_data_bat, 0.5, 0.5, 'Bat', 100);
    //const spider = new Spider(canvas, sprite_src_spider, sprite_data_spider, 0.25, 0.25, 'Spider', 50);

    // Objects list
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Bat, data: sprite_data_bat },
      { class: Spider, data: sprite_data_spider },
      { class: Npc, data: sprite_data_robot },
      { class: Exit, data: sprite_data_exit },
    ];
  }

  // Update & Render Method
  updateAndRender(ctx) {
    this.objects.forEach(obj => {
      obj.instance.update();
      obj.instance.render(ctx);
    });
  }
}

export default GameLevelDesert;
