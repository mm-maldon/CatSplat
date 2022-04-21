class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
    }

    create() {
        this.harold = new Cat(this, game.config.width/2, game.config.height/7, 'harold', 0).setOrigin(0.5, 0.5);
        this.harold.setScale(0.2);

        //making phaser listen for KeyCode LEFT and RIGHT.  keyLEFT and keyRIGHT are global vars defined in main.js
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.harold.update();
    }
}