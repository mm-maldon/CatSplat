class Menu extends Phaser.Scene { //we can use menu to load all the assets for now
    constructor() {
        super("menu");
    }

    preload() {
        this.load.spritesheet('haroldSheet', 'assets/haroldSheet.png', {frameWidth: 440, frameHeight: 440, startFrame: 0, endFrame: 14});
        this.load.image('meteor', 'assets/meteor.png');
        this.load.image('meteor2', 'assets/meteor2.png');
        this.load.image('gameover', 'assets/gameover.png');
        this.load.image('space', 'assets/space.png');
        this.load.image('planetOverlay', 'assets/planetOverlay.png');
        this.load.audio('fard', 'assets/customFard.wav');
        this.load.audio('fireball', 'assets/fireball.wav');
        //this.load.spritesheet('explosion', './assets/ExplosionSpritemap.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.image('0health', './assets/0health.png');
        this.load.image('1health', './assets/1health.png');
        this.load.image('2health', './assets/2health.png');
        this.load.image('3health', './assets/3health.png');
        this.load.audio('meow', './assets/meow.wav');
        this.load.spritesheet('explosionSheet', 'assets/explosionSheet.png', {frameWidth: 700, frameHeight: 484, startFrame: 0, endFrame: 14});
        this.load.image('titleScreen', 'assets/CatSplatTitle.png');
        this.load.audio('titleMusic', './assets/CatsplatTitle.wav');
        this.load.audio('backgroundMusic', './assets/CatsplatPlay.wav');
        this.load.image('restartImage', './assets/restart.png');
        this.load.audio('explodeSound', './assets/dropReverb&Echo.wav');
    }

    create() {
        this.title = this.add.tileSprite(game.config.width/2, game.config.height/2, 640, 740, 'titleScreen').setOrigin(0.5, 0.5);

        //making phaser listen for KeyCode LEFT and RIGHT.  keyLEFT and keyRIGHT are global vars defined in main.js
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.titleMusic = this.sound.add('titleMusic');
        this.titleMusic.play({ volume : 0.4, loop: true });
        /*let music = this.sound.add('Attack on Oritheia');
        let musicConfig = { loop:true };
        music.play(musicConfig);*/
        this.startMS = 0;
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(spacebar)) {
            this.titleMusic.stop();
            this.sound.play('meow');
            this.scene.start('play');
            this.startMS = this.time.now;
        }
    }
}