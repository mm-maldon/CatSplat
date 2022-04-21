class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
    }

    create() {
        this.harold = new Cat(this, game.config.width/2, game.config.height/10, 'harold', 0).setOrigin(0.5, 0.5);
        this.harold.setScale(0.2);
    }

    update() {
        //implement movement listening here
    }
}