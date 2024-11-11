import GameEnv from "./GameEnv.js";
import GameObject from "./GameObject.js";

class PlayerThree extends GameObject {
    constructor(data = null) {
        super(data);
    }

    
    update() {
        // Update begins by drawing the object object
        this.draw();

        this.checkProximityToP3();

        // Update or change position according to velocity events
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Ensure the object stays within the canvas boundaries
        // Bottom of the canvas
        if (this.position.y + this.height > GameEnv.innerHeight) {
            this.position.y = GameEnv.innerHeight - this.height;
            this.velocity.y = 0;
        }
        // Top of the canvas
        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        }
        // Right of the canvas
        if (this.position.x + this.width > GameEnv.innerWidth) {
            this.position.x = GameEnv.innerWidth - this.width;
            this.velocity.x = 0;
        }
        // Left of the canvas
        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x = 0;
        }
    }
   

    /**
     * Check for proximity of objects.
     * This method checks if any players are within a certain distance of the P3.
     * If players are within the specified distance, their names are collected and a response is generated.
     */
    checkProximityToP3() {
        //this.velocity.x=10
        // Filter all Player objects from the game environment
        var players = GameEnv.gameObjects.filter(obj => obj instanceof GameObject);
        var p3 = this;
        var names = [];

        var fish ;

        if (players.length > 0 && p3) {
            players.forEach(player => {
                if (player.spriteData.name == 'fish') {
                    fish = player
                    //showCustomAlert('hello')
                    
                    var deltax= player.position.x - this.position.x
                    var deltay = player.position.y - this.position.y
                                    // The Euclidean distance between two points in a 2D space
                    var distance = Math.sqrt(
                        Math.pow(player.position.x - this.position.x, 2) + Math.pow(player.position.y - this.position.y, 2)
                    );
                    // The distance is less than 100 pixels
                    if (distance <= 10) {
                        if (true //Math.abs(this.velocity.x)>0 && Math.abs(this.velocity.y)>0
                            ){

                            this.velocity.x=0;
                            this.velocity.y=0;
                            var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
                            audio.play();
                        }

                    }
                    else {
                        this.velocity.x = deltax/50
                        this.velocity.y = deltay/50
                    }
                      
                }
            });
        }


    }
}



export default PlayerThree;