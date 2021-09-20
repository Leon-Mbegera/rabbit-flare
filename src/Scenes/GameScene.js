import 'phaser';
import logoImg from '../assets/logo.png'

export default class GameScene extends Phaser.Scene {

  constructor() {
    super('Game');
  };

  preload() {
    // load used images
    this.load.image('logo', logoImg);
  };

  create() {
    // create used images
    this.add.image(400, 300, 'logo');
  };

};