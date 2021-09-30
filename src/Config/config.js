import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1350, 
  height: 600, 
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    }
  },
  dom: {
    createContainer: true
  },
  player: ''
};


{
  "result": "Game with ID: tTdXRaCitjP9a847cWV2 added."
}

