let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 740,
    scene: [Menu, Play],
};

let keyLEFT, keyRIGHT, spacebar;

let game = new Phaser.Game(config);