import { Player } from './player.js';
import { Ball } from './ball.js';
import {Harpoon} from './harpoon.js';
export class Level002 extends Phaser.Scene {
    constructor(){
        super('Level002');
}

init() {
    this.controls = this.input.keyboard.createCursorKeys();

}

create() {
    this.add.image(0,0, 'background2').setOrigin(0).setScale(1);
    
    this.add.text(50, 50, 'Nivel 02', {
        color: '#000',
        font: "32px Arial"
    });

    this.player = new Player(
        this,
        this.game.config.width * 0.5,
        this.game.config.height * 0.5,
        'player', 1
    );


    this.groupBall= this.add.group();
    this.addBall(250,0,0.5);
   
    this.harpoon = new Harpoon(
        this,
        this.game.config.width * 1.5,
        this.game.config.height * 0.5,
        'harpoon'
        );
    this.physics.add.collider(this.player,this.groupBall,this.onCollision,null,this);
    this.physics.add.collider(this.harpoon, this.groupBall);


    // this.ballFirst = new Ball(
    //     this,
    //     this.game.config.width * 0.5,
    //     this.game.config.height * 0.3,
    //     'ball', 0.5, 300, false
    // );
    
}


update(time) {
    this.player.update(time); 
    if(this.player.controls.space.isDown){
        this.fireHarpoon();
    }

    
}

fireHarpoon(){
    var harpoon = this.physics.add.image(this.player.x,this.player.y-1, 'harpoon').setOrigin(0).setScale(1);
    harpoon.scaleY=0;
    this.physics.add.overlap(harpoon,this.ballGroup,this.hitHarpoon,null,this);
    this.tweens.add({
    targets:harpoon,
    y:100,
    scaleY:3,
    duration:30,
    onComplete:function(tweens,targets){
        this.countHarpoon--;
        harpoon.destroy();
    }.bind(this)
})


}


hitHarpoon(harpoon,targets){
    if(targets.scale>1)
    this.addBall(targets.x,targets.y,targets.scale-=1);
    harpoon.destroy();
    targets.destroy();

    if(this.ballGroup.children.size==0){
        this.scene.start("nivel2"); 
    }
}
 //adiciona as bolas a cena
 addBall(x,y,scale){
    this.groupBall.add(new Ball(this,x,y,'ball',scale, 200, true));
}
onCollision(groupBall, player) {
    this.scene.restart();
}
 
}
