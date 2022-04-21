class Play extends Phaser.Scene {
    constructor() {
        super("play");
        this.ded = false;
    }

    preload() {
    }

    create() {
        
        this.dedCat = this.add.tileSprite(0, 0, 640, 740, 'gameover').setOrigin(0, 0);
        this.harold = new Cat(this, game.config.width/2, game.config.height/7, 'harold', 0).setOrigin(0.5, 0.5);
        this.harold.setScale(0.2);
        this.meteor1 = new Meteor(this, game.config.width/2, game.config.height/2, 'meteor', 0).setOrigin(0.5, 0.5);
        this.meteor1.setScale(0.2);
        //this.dedCat = this.add.tileSprite(0, 0, 640, 740, 'gameover').setOrigin(0, 0);
        this.dedCat.alpha = 0;

        //making phaser listen for KeyCode LEFT and RIGHT.  keyLEFT and keyRIGHT are global vars defined in main.js
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(!this.ded) {
            this.harold.update();
            this.meteor1.update();
        }
        this.ded = this.checkCollision(this.harold, this.meteor1);  //checkCollision is still unfinished
        if (this.ded) this.dedCat.alpha = 1;
    }

    checkCollision(Cat, Meteor) {
        //somehow check collision
        return false;
    }
}