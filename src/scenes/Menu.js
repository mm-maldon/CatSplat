class Menu extends Phaser.Scene { //we can use menu to load all the assets for now
    constructor() {
        super("menu");
    }

    preload() {
        this.load.image('harold', 'assets/harold.png');
        this.load.image('meteor', 'assets/meteor.png');
        this.load.image('meteor2', 'assets/meteor2.png');
        this.load.image('gameover', 'assets/gameover.png');
        this.load.image('space', 'assets/space.png');
        this.load.audio('fard', 'assets/fard.wav');
        this.load.audio('fireball', 'assets/fireball.wav');
        //this.load.spritesheet('explosion', './assets/ExplosionSpritemap.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.spritesheet('healthbar', './assets/healthsprites.png', {frameWidth: 164, frameHeight: 66, startFrame: 0, endFrame: 3});
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