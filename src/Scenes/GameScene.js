import 'phaser';

export default class GameScene extends Phaser.Game {

  constructor() {
    super('Game');
  };

  preload() {
    // load used images
    this.load.image('logo', 'assets/logo.png');
  };

  create() {
    // create used images
    this.add.image(400, 300, 'logo');
  };

};