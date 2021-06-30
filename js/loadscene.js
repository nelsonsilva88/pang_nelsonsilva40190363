export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');  
    }
  
      preload() {
          this.load.image('background', './images/nivelpraia1.png');
          this.load.image('background2', './images/nivelpordosol.png');
          this.load.image('background3', './images/nivelnoite.png');
          this.load.image('harpoon', './images/fio.png');
          this.load.image('ball', './images/bolapraia.png',);
          this.load.spritesheet('player', './images/player.png',
          {
             frameWidth: 220,
             frameHeight: 476
         });

       
      }

      create() {
           this.createAnimations();

          this.scene.start('Level001');
          
      }

      createAnimations() {
          this.anims.create({
              key: 'walking',
              frames: this.anims.generateFrameNames('player', {
                  frames: [1, 2, 3, 4]
              }),
              frameRate: 4,
              yoyo: true,
              repeat: -1

          });

      }
}