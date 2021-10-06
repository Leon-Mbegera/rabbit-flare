import Phaser from 'phaser';
import config from '../Config/config';
import background from '../assets/bg_layer1.png';

export default class PlayerScene extends Phaser.Scene {
  constructor() {
    super('Player');
  }

  preload() {
    this.load.image('bg', background);
  }

  create() {
    this.add.image(320, 240, 'bg');

    if (config.player) {
      this.scene.start('Game');
    } else {
      this.getPlayerName();
    }
  }

  getPlayerName = () => {
    const domElement = this.add.dom(600, 100).createFromCache('form');
    domElement.addListener('click');

    domElement.on('click', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('nameInput');
      if (nameInput.value !== '') {
        config.player = nameInput.value;
        this.scene.start('Game');
      }
    });
  }
}