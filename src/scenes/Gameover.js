class Gameover extends Phaser.Scene {
    constructor() {
        super("gameover");
    }

    preload() {
    }

    create(passedScore) {
        this.score = passedScore;
        //console.log("In constructor.  passedScore: ", passedScore, "   this.score: ", this.score);
        this.dedCat = this.add.tileSprite(game.config.width/2, game.config.height/2, 640, 740, 'gameover').setOrigin(0.5, 0.5);
        this.fard = this.sound.add('fard', {volume: 1.3});
        this.fard.play();
        this.restartImage = this.add.tileSprite(game.config.width/2, game.config.height/2, 640, 740, 'restartImage').setOrigin(0.5, 0.5);
        this.restartImage.alpha = 0;
        this.scoreConfig = {
            fontSize: '56px', 
            color: '#2c5e8a'
        }
        this.scoreText = this.add.text(game.config.width - 290, 132, "", this.scoreConfig);//4494138   #2c5e8a
        this.time.delayedCall(3000, () => { 
            this.restartImage.alpha = 1; 
            this.scoreText.text = passedScore;
        }, null, this);
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        console.log(this.score);
    }

    update() {
        if (this.restartImage.alpha == 1 && Phaser.Input.Keyboard.JustDown(spacebar)) {
            this.sound.play('meow');
            this.scene.start('play');
        }
    }
}