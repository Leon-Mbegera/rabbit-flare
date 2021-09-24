import 'phaser';
import background from '../assets/bg_layer1.png'
import platform from '../assets/ground_grass.png'
import bunny_stand from '../assets/bunny1_stand.png'

export default class GameScene extends Phaser.Scene {

  constructor() {
    super('Game');
  };

  preload() {
    this.load.image('bg', background);
    this.load.image('platform', platform)
    this.load.image('bunny_stand', bunny_stand)
  };

  create() {
    this.add.image(400, 300, 'bg');

    const platforms = this.physics.add.staticGroup();
    for (let i = 0; i < 6; ++i) {
      const x = Phaser.Math.Between(80, 400);
      const y = 200 * i
      const platform = platforms.create(x, y, 'platform')
      platform.setScale(0.5)

      const body = platform.body
      body.updateFromGameObject()
    }

    this.physics.add.sprite(240, 320, 'bunny_stand').setScale(0.4)


  };

};