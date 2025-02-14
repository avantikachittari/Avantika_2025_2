//import Enemy from './Enemy.js';
import GameEnv from "./GameEnv.js";
import GameObject from "./GameObject.js";
import Character from "./Character.js";
import Player from "./Player.js";

class Spider extends Character {
    constructor(data = null) {
        super(data);
        this.playerfound = false;
    }
    
    update() {
        // Update begins by drawing the object object
        this.draw();

        this.checkProximityToPlayer();
        // Ensure the object stays within the canvas boundaries
        // Bottom of the canvas
        if (this.position.y + this.height > GameEnv.innerHeight) {
            this.position.y = GameEnv.innerHeight - this.height;
        }
        // Top of the canvas
        if (this.position.y < 0) {
            this.position.y = 0;
        }
        // Right of the canvas
        if (this.position.x + this.width > GameEnv.innerWidth) {
            this.position.x = GameEnv.innerWidth - this.width;
        }
        // Left of the canvas
        if (this.position.x < 0) {
            this.position.x = 0;
        }
    }
   

    /**
     * Check for proximity of objects.
     * This method checks if any players are within a certain distance of the Bat.
     * If players are within the specified distance, their names are collected and a response is generated.
     */
    checkProximityToPlayer() {
        //this.velocity.x=10
        // Filter all Player objects from the game environment
        var players = GameEnv.gameObjects.filter(obj => obj instanceof Player);
        var spider = this;
        var names = [];

        var chillguy ;

        if (players.length > 0 && spider) {
            players.forEach(player => {

                if (player.spriteData && player.spriteData.name == 'mainplayer') {
                    chillguy = player
                    //console.log("Spider found: ", player.spriteData.name);
                    //showCustomAlert('hello')
                    // Calculate the distance between the Spider and the player
                                // The Euclidean distance between two points in a 2D space
                    var distance = Math.sqrt(
                        Math.pow(player.position.x - this.position.x, 2) + Math.pow(player.position.y - this.position.y, 2)
                    );
                    // The distance is less than 100 pixels
                    if (distance <= 40) {
                        if (true //Math.abs(this.velocity.x)>0 && Math.abs(this.velocity.y)>0
                            ){
                            // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
                            // audio.play();
                            //console.log("Spider found: ", player.spriteData.name);
                            if (!this.playerfound) {
                                this.jump();
                                this.playerfound = true;
                            }
                        }
                    }    
                    //if (distance > 30 && this.playerfound) {
                    else {
                        this.playerfound = false;
                    }                  
                }
            });
        }


    }


    // Override the jump method for Spider
    jump() {
        // Implement spider-specific jump logic here
        console.log("Spider is jumping!");
        var randomZeroOrOne = Math.round(Math.random());
        if (randomZeroOrOne == 0) {
            this.position.y += 30; // Example: Move the spider down by 50 pixels
            this.position.x -= 30; // Example: Move the spider left by 50 pixels
        } else {
            this.position.y -= 30; // Example: Move the spider up by 50 pixels
            this.position.x += 30; // Example: Move the spider right by 50 pixels
        }
    }

    // Override other methods if needed
}


export default Spider;