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
        this.load.image('planetOverlay', 'assets/planetOverlay.png');
        this.load.audio('fard', 'assets/fard.wav');
        this.load.audio('fireball', 'assets/fireball.wav');
        //this.load.spritesheet('explosion', './assets/ExplosionSpritemap.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.image('0health', './assets/0health.png');
        this.load.image('1health', './assets/1health.png');
        this.load.image('2health', './assets/2health.png');
        this.load.image('3health', './assets/3health.png');
        this.load.audio('meow', './assets/meow.wav');
    }

    create() {

        //making phaser listen for KeyCode LEFT and RIGHT.  keyLEFT and keyRIGHT are global vars defined in main.js
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(spacebar)) {
            this.sound.play('meow');
            this.scene.start('play');
        }
    }
}