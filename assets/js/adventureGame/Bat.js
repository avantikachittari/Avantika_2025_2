import Enemy from './Enemy.js';
import GameEnv from './GameEnv.js';
import Player from './Player.js';

class Bat extends Enemy {
    constructor(data = null) {
        super(data);
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
        var bat = this;
        var names = [];

        var chillguy ;

        if (players.length > 0 && bat) {
            players.forEach(player => {

                if (player.spriteData && player.spriteData.name == 'mainplayer') {
                    chillguy = player
                    //showCustomAlert('hello')
                    // Calculate the distance between the Bat and the player
                    
                    var deltax= player.position.x - this.position.x
                    var deltay = player.position.y - this.position.y

                    // // The Euclidean distance between two points in a 2D space
                    var distance = Math.sqrt(
                         Math.pow(player.position.x - this.position.x, 2) + Math.pow(player.position.y - this.position.y, 2)
                    );
                    // The distance is less than 10 pixels
                     if (distance > 10) {
                        if(deltax>0){
                            this.velocity.x = GameEnv.innerWidth * 0.001 
                        }
                        else{
                            this.velocity.x = GameEnv.innerWidth * -0.001 
                        }
                        if(deltay>0){
                            this.velocity.y = GameEnv.innerHeight * 0.001 
                        }
                        else{
                            this.velocity.y = GameEnv.innerHeight * -0.001 
                        }
                        //this.velocity.x = deltax/200
                        //this.velocity.y = deltay/200
                     }
                    // else {
                    //      this.velocity.x = 0
                    //      this.velocity.y = 0
                    // }

                }
            });
        }


    }

    // Override the jump method for Bat
    jump() {
        // Implement Bat-specific jump logic here
        // console.log("Bat is jumping!");
        //this.y -= 50; // Example: Move the Bat up by 50 pixels
    }

    handleCollisionEvent() {
        //extract player object
        var player = GameEnv.gameObjects.find(obj => obj instanceof Player);
        //collided object is player
        if (player.id = this.collisionData.touchPoints.other.id) {
            
            console.log("Bat collided with player!");
            // make bat jump
            this.jump();
            
            // reset bat velocity to zero
            this.velocity.x = 0;
            this.velocity.y = 0;

            // explode player object with animation
            this.explode(player.position.x,player.position.y);
            player.destroy();
            this.playerDestroyed = true;
        }
    }

    // Override other methods if needed
}


export default Bat;