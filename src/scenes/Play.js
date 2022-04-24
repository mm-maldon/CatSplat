class Play extends Phaser.Scene {//comment
    constructor() {
        super("play");
        this.ded = 0;
        this.fardplayed = false;
        this.decimal = 0.8;
    }

    preload() {
    }

    create() {
        this.space = this.add.tileSprite(0, 0, 640, 740, 'space').setOrigin(0, 0);
        this.harold = new Cat(this, game.config.width/2, game.config.height/7, 'harold', 0).setOrigin(0, 0);
        this.harold.setScale(0.2);
        this.meteor1 = new Meteor(this, Math.random()*game.config.width, game.config.height*1.5, 'meteor', 0).setOrigin(0, 0);
        this.meteor1.setScale(0.2);
        this.meteor2 = new Meteor(this, Math.random()*game.config.width, game.config.height*2, 'meteor2', 0).setOrigin(0, 0);
        this.meteor2.setScale(0.2);
        this.dedCat = this.add.tileSprite(game.config.width/2, game.config.height/2, 746, 753, 'gameover').setOrigin(0.5, 0.5);
        this.dedCat.alpha = 0;
        //making phaser listen for KeyCode LEFT and RIGHT.  keyLEFT and keyRIGHT are global vars defined in main.js
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.swoosh = this.sound.add('fireball');
        //let littleBoom = this.add.sprite(ship.x, ship.y, 'sparrowExplosion').setOrigin(1,0);
        this.haroldHealth = 3
        this.healthbar = this.add.sprite(game.config.width/70, game.config.height/90, 'healthbar').setOrigin(0,0);
        this.anims.create({
            key: 'health',
            frames: this.anims.generateFrameNumbers('healthbar', { start: 0, end: 3, first: 0}),
            frameRate: 0,
        })

    }

    update() {


        

        this.space.tilePositionY -= 2;
        if(!this.ded) {
            this.harold.update();
            this.meteor1.update();
            this.meteor2.update();
            this.ded += this.checkCollision(this.harold, this.meteor1);  
            this.ded += this.checkCollision(this.harold, this.meteor2);
        }
        //this.ded = this.checkCollision(this.harold, this.meteor1);  
        //this.ded = this.checkCollision(this.harold, this.meteor2);
        if (this.ded>0) this.dedCat.alpha = 1;
        if (this.ded>0 && !this.fardplayed) {
            this.swoosh.stop();
            this.sound.play('fard');
            this.fardplayed = true;
        }


        if (this.meteor1.y == 0) {
            this.swoosh.play();
        }


    }

    checkCollision(Cat, Meteor) {
        this.haroldHealth--;
        this.healthbar.anims.play()
        if (Cat.x < Meteor.x + Meteor.width*Meteor.scale*this.decimal &&
            Meteor.x < Cat.x + Cat.width*Cat.scale*this.decimal &&
            Cat.y < Meteor.y + Meteor.height*Meteor.scale*this.decimal &&
            Meteor.y < Cat.y + Cat.height*Cat.scale*this.decimal) return 1;
        else return 0;
    }
}