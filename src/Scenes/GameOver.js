import 'phaser'
import background from '../assets/bg_layer1.png'
import config from '../Config/config';
import axios from 'axios';
import Button from '../Objects/Button';
import "regenerator-runtime/runtime"



  const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WGd2oSGJfDJEiyfEBDhX/scores/'


  export default class GameOver extends Phaser.Scene {

    constructor() {
      super('game-over')
    }

    init(value) {
      this.value = value.score
    }

    sendScore = async () => {
      const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WGd2oSGJfDJEiyfEBDhX/scores/'
  
      const { data } = await axios.post(endpoint, {
        user: config.player,
        score: this.value
      });
    }

    fetchScore = async () => {
      try { 
        const { data } = await axios.get(endpoint)
        this.scores = data.result
        console.log(this.scores)
        return this.scores
      } catch(err) {
        this.scores = []
        console.error(err)
        return this.scores
      }
    };

    getLeaderboard = async () => {
      if (this.value > 0) {
        await this.sendScore()
      }
      const results = await this.fetchScore() 
      const sorted = results.sort((a, b) => a.score > b.score ? -1 : 1) 

      let x1 = 600
      let x2 = 700;
      let x3 = 1000;
      let y = 100;
      let i = 1;
      sorted.forEach(player => {
        while(i < 11) {
          this.add.text(x1, y, i, { fontSize: '24px bold', color: 'black' }).setOrigin(0)
          this.add.text(x2, y, player.user, { fontSize: '24px bold', color: 'black' }).setOrigin(0)
          this.add.text(x3, y, player.score, { fontSize: '24px bold', color: 'black' }).setOrigin(0)
          console.log(player.score)
          i += 1
          break;
        }
        y += 50;
      })
    }

    preload() {
      this.load.image('bg', background)
    }

    create() {

      this.add.image(320, 240, 'bg')
      this.getLeaderboard()

      this.add.text(200, 100, 'Game Over', { fontSize: '48px bolder', fill: '#000' }).setOrigin(0.5)
      this.add.text(100, 150, `Your score: ${this.value}`, { fontSize: '32px bold', fill: '#000' })

      this.gameButton = new Button(this, 200, 300, 'blueButton1', 'blueButton2', 'Restart', 'Game');

      // this.add.text(600, 100, `${config.player}`, { fontSize: '24px' }).setOrigin(0.5)
      // this.add.text(1000, 100, `${this.value}`, { fontSize: '24px' }).setOrigin(0.5)
    }

  };


  
