class Platform extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 1;
    }

    update() {
        this.x += this.moveSpeed;
        if(this.y < game.config.width) {
            this.reset();
        }
    }

    reset() {  //teleport the platform below the screen
        this.x = (Math.random()*game.config.width);   //setting x coordinate to be random, but within the game's width
        this.y = 2*game.config.height;
    }
}