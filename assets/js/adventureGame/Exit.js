import GameEnv from "./GameEnv.js";
import GameObject from "./GameObject.js";
import Npc from "./Npc.js";

class Exit extends Npc {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.alertTimeout = null;
    }

    /**
     * Override the update method to draw the NPC.
     * This NPC is stationary, so the update method only calls the draw method.
     * 
     * @override
     */
    update() {
        this.draw();
        // Check for collision with other objects if the level is not complete
        if (this.gameEnv.gameControl.currentLevel.continue) {
            this.collisionChecks();
        }

    }

    collisionChecks() {
        let collisionDetected = false;
        for (var gameObj of this.gameEnv.gameObjects) {
            if (gameObj.canvas && this != gameObj) {
                this.isCollision(gameObj);
                if (this.collisionData.hit && (this.collisionData.touchPoints.other.id == 'Chill Guy'
                    || this.collisionData.touchPoints.other.id == 'Octopus')
                ) {
                    collisionDetected = true;
                    this.gameEnv.gameControl.currentLevel.continue = false;
                    console.log('Player ', this.collisionData.touchPoints.other.id, ' completed level');
                }
            }
        }
    }
}

export default Exit;