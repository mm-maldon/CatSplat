class Meteor extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 5;
    }

    update() {
        this.y -= this.moveSpeed;
        if (this.y < - this.height*this.scale) {
            this.reset();
        }
    }

    reset() {  //teleport the platform below the screen
        this.x = (Math.random()*game.config.width);   //setting x coordinate to be random, but within the game's width
        this.y = 2*game.config.height;
    }

    setSpeed(newSpeed) {
        this.moveSpeed = newSpeed;
    }
}