import 'phaser';
// import Game from '../index'
// import GameOver from '../Scenes/GameOver';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1350, 
  height: 600, 
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: true
    }
  }
  // scene: [Game, GameOver]
};

