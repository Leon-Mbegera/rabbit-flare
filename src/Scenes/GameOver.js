import 'phaser'

const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/scores/'

const scores;
const fetchPlayers = async () => {
  const response =  await fetch(endpoint)
  const data = await response.json()
  return data
};

const fetchScore = async () => {
  fetchPlayers().then(data => {
    scores = data.results
  }).catch( err => {
    throw ('data not found!')
  });
}

fetchScore();

export default class GameOver extends Phaser.Scene {

  constructor() {
    super('game-over')
  }

  create() {
    const width = this.scale.width
    const height = this.scale.height

    this.add.text(width * 0.5, height * 0.5, 'Game Over', { fontSize: '48px'}).setOrigin(0.5)
    this.add.text(400, 400, 'Press the space-bar to play again!', { fontSize: '32px', fill: '#fff'})

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('Game')
    })
  }
}

