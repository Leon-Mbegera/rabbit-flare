import 'phaser'

export default class Carrot extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture) 
    this.setScale(0.5)
  }
}