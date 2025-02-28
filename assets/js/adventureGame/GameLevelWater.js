import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Npc from './Npc.js';
import Character from './Character.js';
import Player from './Player.js';
import Exit from './Exit.js';
import Quiz from './Quiz.js';
import GameControl from './GameControl.js';
import GameLevelStarWars from './GameLevelStarWars.js';

class GameLevelWater {
  constructor(gameEnv) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Values dependent on GameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;    

    // Background data
    const image_src_water = path + "/images/gamify/End.png";
    const image_data_water = {
        id: 'Water',
        src: image_src_water,
        pixels: {height: 597, width: 340}
    };

    // Player Data
    const sprite_src_chillguy = path + "/images/gamify/you.png";
    console.log(`Loading player sprite from: ${sprite_src_chillguy}`); // Log image path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      name: 'mainplayer',
      greeting: "Hi I am Chill Guy, the water wanderer. I am looking for wisdome and adventure!",
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

    const sprite_src_octopus = path + "/images/gamify/you.png"; // be sure to include the path
    const OCTOPUS_SCALE_FACTOR = 10;
    const sprite_data_octopus = {
        id: 'Octopus',
        greeting: "Hi I am Octopus, the water wanderer. I am looking for wisdome and adventure!",
        src: sprite_src_octopus,
        SCALE_FACTOR: OCTOPUS_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/OCTOPUS_SCALE_FACTOR) }, 
        pixels: {height: 250, width: 167},
        orientation: { rows: 4, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 1, start: 0, columns: 3 },
      right: { row: 2, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    }; 
  

    // NPC Data for Byte Nomad (Smaller Version)
    const sprite_src_animwizard = path + "/images/gamify/animwizard.png"; // be sure to include the path
    const sprite_data_animwizard = {
        id: 'GameWizard',
        greeting: "Hi I am your game wizard.  I am very happy to share my knowledge with you! Press key 'e' or 'u' for learning",
        src: sprite_src_animwizard,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 100,
        pixels: {height: 307, width: 813},
        INIT_POSITION: { x: (width * 3 / 4), y: (height * 3 / 4)},
        orientation: {rows: 3, columns: 7 },
        down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
        /*
        quiz: { 
          title: "Jupyter Notebook Command Quiz",
          questions: [
            "Which keyword is used to define a class in Java?\n1. define\n2. class\n3. Class\n4. struct",
            "Which data type is used to store a single character in Java?\n1. String\n2. char\n3. Character\n4. ch",
            "What is the default value of an int variable in Java?\n1. 0\n2. null\n3. undefined\n4. -1",
            "Which of these is NOT a Java access modifier?\n1. public\n2. private\n3. protected\n4. external",
            "What is the purpose of the 'final' keyword in Java?\n1. It defines a constant variable\n2. It prevents method overriding\n3. It prevents class inheritance\n4. All of the above",
            "Which Java loop is guaranteed to execute at least once?\n1. for loop\n2. while loop\n3. do-while loop\n4. foreach loop",
            "What is the parent class of all Java classes?\n1. Object\n2. BaseClass\n3. Root\n4. Core",
            "How do you correctly create a new object in Java?\n1. Object obj = Object();\n2. Object obj = new Object();\n3. Object obj = new();\n4. new Object obj;",
            "Which Java keyword is used to handle exceptions?\n1. throw\n2. try\n3. error\n4. exception",
            "Which Java collection allows key-value pairs?\n1. ArrayList\n2. HashMap\n3. HashSet\n4. LinkedList"
          ] 
        }
        */
        quiz: { 
          title: "Wizard Quiz",
          questions: [ "What do you wish to earn today?\n1. Wisdom\n2. Gold\n3. Power\n4. Fame",
                       "How do you plan to earn it?\n1. Study\n2. Work\n3. Steal\n4. Cheat",
                       "What will you do with it?\n1. Share\n2. Keep\n3. Spend\n4. Waste",
                       "Why do you seek it?\n1. Knowledge\n2. Wealth\n3. Control\n4. Attention",
                       "When will you know you have it?\n1. Never\n2. Always\n3. Sometimes\n4. Later"
          ]
        },
        reaction: function() {
          alert(sprite_data_animwizard.greeting);
        },
        interact: function() {
          // Set a primary game reference from the game environment
          let primaryGame = gameEnv.gameControl;

          console.log('pause primary game');
          // Pause the primary game 
          primaryGame.pause();

          let quiz = new Quiz(gameEnv); // Create a new Quiz instance
          quiz.initialize();
          quiz.openPanel(sprite_data_animwizard.quiz);
          }
      };

      const sprite_src_exit = path + "/images/gamify/wizard.png";
      console.log(`Loading NPC sprite from: ${sprite_src_exit}`); // Log image path
      const sprite_data_exit = {
        id: 'Exit',
        src: sprite_src_exit,
        SCALE_FACTOR: 15,
        ANIMATION_RATE: 50,
        pixels: { height: 185, width: 163 },
        INIT_POSITION: { x: width * 0.85 , y: height * 0.4 },
        orientation: { rows: 1, columns: 1 },
        down: { row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1},
      
      };

    // NPC Data for R2D2
    const sprite_src_r2d2 = path + "/images/gamify/Flower.png"; // be sure to include the path
    const sprite_greet_r2d2 = "Hi I am R2D2.  Leave this planet and help defent the rebel base on Hoth!";
    console.log(`Loading NPC sprite from: ${sprite_src_r2d2}`); // Log image path
    const sprite_data_r2d2 = {
      id: 'StarWarsR2D2',
      greeting: sprite_greet_r2d2,
      src: sprite_src_r2d2,
      SCALE_FACTOR: 7,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {width: 150, height: 42},
      INIT_POSITION: { x: (width * 0.16), y: (height * 0.52)}, // Adjusted position
      orientation: {rows: 1, columns: 1 },
      down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      /* Reaction function
      *  This function is called when the player interacts with the NPC
      *  It displays an alert with the greeting message
      */
      reaction: function() {
        alert(sprite_greet_r2d2);
      },      

      /* Interact function
      *  This function is called when the player interacts with the NPC
      *  It pauses the main game, creates a new GameControl instance with the StarWars level,
      */
      interact: function() {
        // Set a primary game reference from the game environment
        let primaryGame = gameEnv.gameControl;
        // Define the game in game level
        let levelArray = [GameLevelStarWars];
        // Define a new GameControl instance with the StarWars level
        let gameInGame = new GameControl(path,levelArray);
        // Pause the primary game 
        primaryGame.pause();
        // Start the game in game
        gameInGame.start();
        // Setup "callback" function to allow transition from game in gaame to the underlying game
        gameInGame.gameOver = function() {
          // Call .resume on primary game
          primaryGame.resume();
        }
      } 
    }; 

    // List of objects definitions for this level
    this.classes = [
      { class: Background, data: image_data_water },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_animwizard },
      { class: Exit, data: sprite_data_exit },
      { class: Npc, data: sprite_data_r2d2 },
    ];
  }
}

export default GameLevelWater;