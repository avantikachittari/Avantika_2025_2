import Enemy from './Enemy.js';
import GameEnv from './GameEnv.js';
import Player from './Player.js';

class Spider extends Enemy {
    constructor(data = null) {
        super(data);
    }
   

    /**
     * Check for proximity of objects.
     * This method checks if any players are within a certain distance of the Spider.
     */
    checkProximityToPlayer() {
        // No action

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

    /**
     * Handle collision event of spider with player.
     * Spider jumps when it collides with the player and tries to evade the player.
     * player earns points when it collides with the spider.
     */

    handleCollisionEvent() {
        this.jump();
        //implement player score increment
    }

    // Override other methods if needed
}


export default Spider;