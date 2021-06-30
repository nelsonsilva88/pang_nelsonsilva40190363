export class Harpoon extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){

        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.allowGravity = false;

        this.setScale(1.7);

        this.velocity = -200;
 
    }
}