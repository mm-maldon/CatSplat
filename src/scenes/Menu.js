class Menu extends Phaser.Scene { //we can use menu to load all the assets for now
    constructor() {
        super("menu");
    }

    preload() {
        this.load.image('harold', 'assets/harold.png');
        this.load.image('meteor', 'assets/meteor.png');
        this.load.image('gameover', 'assets/gameover.png');
        this.load.image('space', 'assets/space.png');
    }

    create() {
        this.scene.start('play');

        //making phaser listen for KeyCode LEFT and RIGHT.  keyLEFT and keyRIGHT are global vars defined in main.js
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
    }

    update() {

    }
}