class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    preload() {
        this.load.image('harold', 'assets/harold.png');
    }

    create() {
        this.harold = this.add.tileSprite(0, 200, 440, 440, 'harold').setOrigin(0,0);
        this.harold.setScale(0.2);
        this.harold.setInteractive();
        this.harold.on('pointerup', () => {
            this.scene.start('play');
        });
    }

    update() {

    }
}