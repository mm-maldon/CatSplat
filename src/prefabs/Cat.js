class Cat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.fish = 3;     //fish is health.
        this.moveSpeed = 4;
        this.velocity = 2;       //we probably won't need this until we implement arcade physics
    }

    update() { 
        //console.log(this.x, " > ", this.width*this.scale);
        if (keyLEFT.isDown && this.x > this.width*this.scale - 90) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x < game.config.width - this.width*this.scale) {
            this.x += this.moveSpeed;
        } else if (keyUP.isDown && this.y > this.height*this.scale - 90) {
            this.y -= this.moveSpeed - 1;
        } else if (keyDOWN.isDown && this.y < game.config.height - this.height*this.scale) {
            this.y += this.moveSpeed - 1;
        }
    }

    die() {
        //die
    }

}