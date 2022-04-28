class Play extends Phaser.Scene {
    constructor() {
        super("play");
        this.health = 3;
        this.fardplayed = false;
        this.decimal = 0.8;
    }

    create() {
        this.space = this.add.tileSprite(0, 0, 640, 740, 'space').setOrigin(0, 0);
        this.planetOverlay = this.add.tileSprite(0, 0, 640, 740, 'planetOverlay').setOrigin(0, 0);
        this.harold = new Cat(this, game.config.width/2, game.config.height/7, 'haroldSheet', 0).setOrigin(0, 0);
        this.harold.setScale(0.2);
        this.meteor1 = new Meteor(this, Math.random()*game.config.width, game.config.height*1.5, 'meteor', 0).setOrigin(0, 0);
        this.meteor1.setScale(0.2);
        this.meteor2 = new Meteor(this, Math.random()*game.config.width, game.config.height*2, 'meteor2', 0).setOrigin(0, 0);
        this.meteor2.setScale(0.2);
        this.dedCat = this.add.tileSprite(game.config.width/2, game.config.height/2, 640, 740, 'gameover').setOrigin(0.5, 0.5);
        this.dedCat.alpha = 0;
        //making phaser listen for KeyCode LEFT and RIGHT.  keyLEFT and keyRIGHT are global vars defined in main.js
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //animation config
        this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('explosionSheet', { start: 0, end: 15, first: 0}),
            frameRate: 20
        });
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        this.swoosh = this.sound.add('fireball', {volume: 0.2});
        this.fard = this.sound.add('fard', {volume: 1.3});
        //let littleBoom = this.add.sprite(ship.x, ship.y, 'sparrowExplosion').setOrigin(1,0);
        this.haroldHealth = 3;
        this.healthbar = this.add.tileSprite(5, 0, 164, 66, '3health').setOrigin(0,0);
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


        this.startMS = this.time.now;

        this.timetext = this.add.text(game.config.width/2, game.config.height/2, "");

    }

    update() {

        let lifetimeMS = this.time.now - this.startMS;
        this.timetext.text = lifetimeMS + " points";
        

        this.healthbar.destroy();
        if(this.haroldHealth >= 3){
            this.healthbar = this.add.tileSprite(5, 0, 164, 66, '3health').setOrigin(0,0);
        }
        if(this.haroldHealth == 2){
            this.healthbar = this.add.tileSprite(5, 0, 164, 66, '2health').setOrigin(0,0);
        }
        if(this.haroldHealth == 1){
            this.healthbar = this.add.tileSprite(5, 0, 164, 66, '1health').setOrigin(0,0);
        }

        this.space.tilePositionY += 1;
        this.planetOverlay.tilePositionY += 2;
        if(this.haroldHealth > 0) {
            this.harold.update();
            this.meteor1.update();
            this.meteor2.update();
        }
        if(this.checkCollision(this.harold, this.meteor1)){
            this.haroldHealth--;
            if (this.haroldHealth > 0) this.meteorExplode(this.meteor1);
            this.meteor1.reset();
        }
        if(this.checkCollision(this.harold, this.meteor2)){
            this.haroldHealth--;
            if (this.haroldHealth > 0) this.meteorExplode(this.meteor2);
            this.meteor2.reset();
        }
        if (this.haroldHealth == 0) this.dedCat.alpha = 1;
        if (this.haroldHealth == 0 && !this.fardplayed) {

            
            this.swoosh.stop();
            this.fard.play();
            this.fardplayed = true;
        }


        if (this.meteor1.y == 0) {
            this.swoosh.play();
        }
      //if (Phaser.Input.Keyboard.JustDown(spacebar))
        if (Phaser.Input.Keyboard.JustDown(spacebar)) {
            this.sound.play('meow');
        }
    }

    checkCollision(Cat, Meteor) {
        if (Cat.x < Meteor.x + Meteor.width*Meteor.scale*this.decimal &&
            Meteor.x < Cat.x + Cat.width*Cat.scale*this.decimal &&
            Cat.y < Meteor.y + Meteor.height*Meteor.scale*this.decimal &&
            Meteor.y < Cat.y + Cat.height*Cat.scale*this.decimal){
                return true;
        } 
        else return false;
    }

    meteorExplode(meteor) {
        /* temporarily hide meteor
        meteor.alpha = 0;
        */
        //create explosion sprite at meteor
        
        let boom = this.add.sprite(meteor.x, meteor.y, 'explosionSheet').setOrigin(0.5, 0.5);
        boom.setScale(0.4);
        boom.anims.play('explosion');
        boom.on('animationcomplete', () => {
            boom.destroy();
        });
    }
}