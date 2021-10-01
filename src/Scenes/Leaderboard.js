import 'phaser'
import config from '../Config/config';
import Button from '../Objects/Button';
import "regenerator-runtime/runtime"


export default class Leaderboard extends Phaser.Scene {

  constructor() {
    super('Leaderboard')
  }

  init(value) {
    this.value = value
  }

  create(){
  }
  
  sendScore = async () => {
    
    const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tTdXRaCitjP9a847cWV2/scores/'

    const { data } = await axios.post(endpoint, {
      user: config.player,
      score: this.value
    });

    this.add.text(width * 0.5, height * 0.5, `${config.player}`, { fontSize: '48px'}).setOrigin(0.5)
    this.add.text(width * 0.5, height * 0.5, `${this.value}`, { fontSize: '48px'}).setOrigin(0.5)

    this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Main Menu', 'Title');
  };
}