//========================================================
// CatSplat
// By Casey Chen, Eliana Cadelina, and Malachi Maldonado
// Completed 5/1/22
// 
// CatSplat has great visual and audio design thanks to Casey
// and Eli. We gave the game a very distinct sense of humor
// and made sure that the gameplay, visuals, and sound all 
// worked together to enhance that sense of humor.
//
// Programming - Casey Chen, Malachi Maldonado
// Audio - Casey Chen
// Art - Eliana Cadelina
// Character/UI Design - Eliana Cadelina 
//========================================================
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 740,
    autoCenter: true,
    scene: [Menu, Play, Gameover],
};

let keyLEFT, keyRIGHT, keyUP, keyDOWN, spacebar;

let game = new Phaser.Game(config);
