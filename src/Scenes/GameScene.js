import 'phaser';
import background from '../assets/bg_layer1.png'
import platform from '../assets/ground_grass.png'

export default class GameScene extends Phaser.Scene {

  constructor() {
    super('Game');
  };

  preload() {
    // load used images
    this.load.image('bg', background);
    this.load.image('platform', platform)
  };

  create() {
    // create used images
    this.add.image(400, 300, 'bg');
    // this.add.image(240, 320, 'platform').setScale(0.5)
    this.physics.add.staticImage(240, 320, 'platform').setScale(0.5);
  };

};