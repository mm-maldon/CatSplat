class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
    }

    create() {
        this.harold = this.add.tileSprite(0, 0, 440, 440, 'harold').setOrigin(0,0);
        this.harold.setScale(0.2);
    }

    update() {

    }
}