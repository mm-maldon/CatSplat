let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 740,
    autoCenter: true,
    scene: [Menu, Play],
};

let keyLEFT, keyRIGHT, keyUP, keyDOWN, spacebar;

let game = new Phaser.Game(config);