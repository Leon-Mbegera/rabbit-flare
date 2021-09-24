import 'phaser';
import background from '../assets/bg_layer1.png'
import platform from '../assets/ground_grass.png'

export default class GameScene extends Phaser.Scene {

  constructor() {
    super('Game');
  };

  preload() {
    this.load.image('bg', background);
    this.load.image('platform', platform)
  };

  create() {
    this.add.image(400, 300, 'bg');

    const platforms = this.physics.add.staticGroup();
    for (let i = 0; i < 5; ++i) {
      const x = Phaser.Math.Between(80, 400);
      const y = 200 * i
      const platform = platforms.create(x, y, 'platform')
      platform.setScale(0.5)

      const body = platform.body
      body.updateFromGameObject()
    }



  };

};