import 'phaser'
import config from '../Config/config';
import Button from '../Objects/Button';
import "regenerator-runtime/runtime"

const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tTdXRaCitjP9a847cWV2/scores/'

let scores;
const fetchPlayers = async () => {
  const response =  await fetch(endpoint)
  const data = await response.json()
  return data
};

const fetchScore = async () => {
  fetchPlayers().then(data => {
    scores = data.result
  }).catch( err => {
    throw ('data not found!', err)
  });
}

fetchScore();

export default class GameOver extends Phaser.Scene {

  constructor() {
    super('game-over')
  }

  init(value) {
    this.value = value
  }

  create() {
    const width = this.scale.width
    const height = this.scale.height

    this.add.text(width * 0.5, height * 0.5, 'Game Over', { fontSize: '48px'}).setOrigin(0.5)
    this.add.text(400, 320, `${this.value}`)
    this.add.text(400, 400, 'Press the space-bar to play again!', { fontSize: '32px', fill: '#fff'})

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('Game', )
    });

    this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Leaderboard', 'Leaderboard');
  }
}

