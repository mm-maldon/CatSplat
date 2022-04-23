class Play extends Phaser.Scene {
    constructor() {
        super("play");
        this.ded = false;
        this.fardplayed = false;
        this.decimal = 1;
    }

    preload() {
    }

    create() {
        this.space = this.add.tileSprite(0, 0, 640, 740, 'space').setOrigin(0, 0);
        this.harold = new Cat(this, game.config.width/2, game.config.height/7, 'harold', 0).setOrigin(0.5, 0.5);
        this.harold.setScale(0.2);
        this.meteor1 = new Meteor(this, Math.random()*game.config.width, game.config.height*1.5, 'meteor', 0).setOrigin(0.5, 0.5);
        this.meteor1.setScale(0.2);
        this.dedCat = this.add.tileSprite(game.config.width/2-20, game.config.height/2, 746, 753, 'gameover').setOrigin(0.5, 0.5);
        this.dedCat.alpha = 0;

        //making phaser listen for KeyCode LEFT and RIGHT.  keyLEFT and keyRIGHT are global vars defined in main.js
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.space.tilePositionY -= 2;
        if(!this.ded) {
            this.harold.update();
            this.meteor1.update();
        }
        this.ded = this.checkCollision(this.harold, this.meteor1);  //checkCollision is still unfinished
        if (this.ded) this.dedCat.alpha = 1;
        if (this.ded && !this.fardplayed) {
            this.sound.play('fard');
            this.fardplayed = true;
        }
    }

    checkCollision(Cat, Meteor) {
        //somehow check collision
        /*let a = Math.pow(Cat.x - Meteor.x, 2);
        let b = Math.pow(Cat.y - Meteor.y, 2);
        let c = Math.sqrt(a + b);
        if (c < Cat.width*Cat.scale*0.4 || c < Meteor.width*Cat.scale*0.4) return true;   
        return false;*/
        //console.log(Cat.x, " < ", Meteor.x + Meteor.width);

        if (Cat.x < Meteor.x + Meteor.width*Meteor.scale*this.decimal &&
            Meteor.x < Cat.x + Cat.width*Cat.scale*this.decimal &&
            Cat.y < Meteor.y + Meteor.height*Meteor.scale*this.decimal &&
            Meteor.y < Cat.y + Cat.height*Cat.scale*this.decimal) return true;
        else return false;
    }
}