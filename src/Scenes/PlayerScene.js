import 'phaser'
import config from '../Config/config'

export default class PlayerScene extends Phaser.Scene {
  
  constructor() {
    super('Player')
  }

 
  create() {
    const domElement = this.add.dom(400, 100).createFromCache('form')
     domElement.addListener('click')
    
      domElement.on('click', (e) => {
        e.preventDefault()
        const nameInput = document.getElementById('nameInput')
        if (nameInput.value !== '') {
          config.player = nameInput.value
          this.scene.start('Game')
        }
      });
  }
  
}