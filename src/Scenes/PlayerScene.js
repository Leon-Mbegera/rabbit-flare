import Phaser from 'phaser';
import config from '../Config/config';

export default class PlayerScene extends Phaser.Scene {
  constructor() {
    super('Player');
  }

  create() {
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