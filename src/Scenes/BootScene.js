import 'phaser';
// import zenvaLogo from '../assets/zenva_logo.png';

export default class BootScene extends Phaser.Scene {

  constructor () {
    super('Boot');
  };

  preload() {
    this.load.image('logo', 'assets/zenva_logo.png');
  };

  create() { 
    this.scene.start('Preloader')
  };
};