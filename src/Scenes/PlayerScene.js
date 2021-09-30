import 'phaser'
import config from '../Config/config'

export default class Player extends Phaser.Scene {

  constructor() {
    super('Player')
  }

  create() {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
      e.prevent();
      const name = document.getElementById('name-input').value 
      if (name !== '') {
        config.player = name
        this.scene.start('Game')
      }
    });
  }
}