class Cat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.fish = 3;     //fish is health.
        this.moveSpeed = 2;
        this.velocity = 2;       //we probably won't need this until we implement arcade physics
    }

    update() { 
        if(keyLEFT.isDown && this.x >= this.width) {  //MOVEMENT CODE.  Untested.  still need to add listeners and stuff for arrow keys
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x <= game.config.width + this.width) {
            this.x += this.moveSpeed;
        }
    }

    die() {
        //die
    }

}