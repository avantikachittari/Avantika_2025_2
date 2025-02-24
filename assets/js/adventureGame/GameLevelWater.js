import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Npc from './Npc.js';
import Character from './Character.js';
import Player from './Player.js';
import Exit from './Exit.js';

class GameLevelWater {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data
    const image_src_water = path + "/images/gamify/End.png";
    const image_data_water = {
        id: 'Water',
        src: image_src_water,
        pixels: {height: 597, width: 340}
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


    // List of objects definitions for this level
    this.objects = [
      { class: Background, data: image_data_water },
      { class: Player, data: sprite_data_octopus },
      { class: Npc, data: sprite_data_animwizard },
      { class: Exit, data: sprite_data_exit },
    ];
  }
}

export default GameLevelWater;