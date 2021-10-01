import 'phaser'
import config from '../Config/config'
import inputForm from "../assets/nameInput.html"
import phaserLogoImg from '../assets/logo.png'


export default class PlayerScene extends Phaser.Scene {
  
  constructor() {
    super('Player')
  }

  inputForm = `<form id='inputForm d-flex' >
  <input type='text' style="position: absolute; background-color: yellow" id='nameInput'    placeholder="give your name">
  <input type='submit' name='loginButton'id='btn' value='start game'>
  </form>`;

  preload(){
    this.load.html('form', inputForm)
  }
  
  create() {
    const domElement = this.add.dom(400, 100).createFromCache(this.inputForm)
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