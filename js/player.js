export class Player extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture, frame){

        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setScale(0.3);

        this.initialFrame = frame;

        this.horizontal_velocity = 200;
       

        this.controls= scene.input.keyboard.createCursorKeys();
    }
    update(time) {

       
        if(this.controls.left.isDown) {
            this.setVelocityX(-this.horizontal_velocity);
            this.flipX = true;
            if(!this.anims.isPlaying)
            {
            this.anims.play('walking');
            }
        } else if(this.controls.right.isDown) {
            this.setVelocityX(this.horizontal_velocity);
            this.flipX = false;
            if(!this.anims.isPlaying)
           { 
               this.anims.play('walking');
        }

        } else {
            this.setVelocityX(0);
            if(this.anims.isPlaying){
                this.anims.stop('walking');
            }
                 this.setFrame(this.initialFrame);
        }
     
                }
                 FireHarpoon(){
                    if(this.Player){
                        if(this.FireKey.isDown){
                            this.firePressed = true;
                        }else{
                            this.firePressed = false;
                        }
                    }
                    else{
                        if(this.controls.space.isDown){
                            this.firePressed = true;
                        }else{
                            this.firePressed = false;
                        }
                    }
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
            }
