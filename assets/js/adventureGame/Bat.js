//import Enemy from './Enemy.js';
import GameEnv from "./GameEnv.js";
import GameObject from "./GameObject.js";
import Character from "./Character.js";
import Player from "./Player.js";

class Bat extends Character {
    constructor(data = null) {
        super(data);
        this.playerDestroyed = false;
    }
    
    update() {
        // Update begins by drawing the object object
        this.draw();

        if(!this.playerDestroyed) {
            this.checkProximityToPlayer();
        }

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
                                    // The Euclidean distance between two points in a 2D space
                    var distance = Math.sqrt(
                        Math.pow(player.position.x - this.position.x, 2) + Math.pow(player.position.y - this.position.y, 2)
                    );
                    // The distance is less than 100 pixels
                    if (distance <= 10) {
                        if (true //Math.abs(this.velocity.x)>0 && Math.abs(this.velocity.y)>0
                            ){

                            console.log("Bat found: ", player.spriteData.name);
                            this.velocity.x=0;
                            this.velocity.y=0;
                            // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
                            // audio.play();

                            this.explode(chillguy.position.x,chillguy.position.y);
                            chillguy.destroy();
                            this.playerDestroyed = true;
                        }

                    }
                    else {
                        this.velocity.x = deltax/200
                        this.velocity.y = deltay/200
                    }
                      
                }
            });
        }


    }
    /**
    * Create an explosion effect when the Enemy is destroyed.
    */
    explode(x,y) {
        const shards = 20; // Number of shards
        for (let i = 0; i < shards; i++) {
            const shard = document.createElement('div');
            shard.style.position = 'absolute';
            shard.style.width = '5px';
            shard.style.height = '5px';
            shard.style.backgroundColor = 'brown'; // Color of the shards
            shard.style.left =  `${x}px`;
            shard.style.top = `${GameEnv.top+y}px`;
            this.canvas.parentElement.appendChild(shard); // Add shard to the canvas

            const angle = Math.random() * 2 * Math.PI;
            const speed = Math.random() * 5 + 2;

            const shardX = Math.cos(angle) * speed;
            const shardY = Math.sin(angle) * speed;

            shard.animate(
                [
                    { transform: 'translate(0, 0)', opacity: 1 },
                    { transform: `translate(${shardX * 20}px, ${shardY * 20}px)`, opacity: 0 },
                ],
                {
                    duration: 1000,
                    easing: 'ease-out',
                    fill: 'forwards',
                }
            );

            setTimeout(() => {
                shard.remove(); // Remove shard after animation
            }, 1000);
        }
        //this.canvas.style.opacity = 0; // Make the Bat disappear
    } 


    // Override the jump method for Bat
    jump() {
        // Implement Bat-specific jump logic here
        console.log("Bat is jumping!");
        this.y -= 50; // Example: Move the Bat up by 50 pixels
    }

    // Override other methods if needed
}


export default Bat;