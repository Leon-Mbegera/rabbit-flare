import Phaser from 'phaser';
import axios from 'axios';
import config from '../Config/config';
import Button from '../Objects/Button';
import 'regenerator-runtime/runtime';

export const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WGd2oSGJfDJEiyfEBDhX/scores/';

export const fetchScore = async () => {
  try {
    const { data } = await axios.get(endpoint);
    const scores = data.result;
    return scores;
  } catch (err) {
    const scores = [];
    return scores;
  }
};

export const sendScore = async (value) => {
  const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WGd2oSGJfDJEiyfEBDhX/scores/';

  await axios.post(endpoint, {
    user: config.player,
    score: value,
  });
};

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  init(value) {
    this.value = value.score;
  }

    getLeaderboard = async () => {
      if (this.value > 0) {
        await sendScore(this.value);
      }
      const results = await fetchScore();
      const sorted = results.sort((a, b) => (a.score > b.score ? -1 : 1));

      const x1 = 600;
      const x2 = 700;
      const x3 = 1000;
      let y = 100;
      let i = 1;
      const filtered = {};
      sorted.forEach((player) => {
        while (i < 11 && !filtered[player.user]) {
          this.add.text(x1, y, i, { fontSize: '24px bold', color: 'black' }).setOrigin(0);
          this.add.text(x2, y, player.user, { fontSize: '24px bold', color: 'black' }).setOrigin(0);
          this.add.text(x3, y, player.score, { fontSize: '24px bold', color: 'black' }).setOrigin(0);
          filtered[player.user] = true;
          i += 1;
          y += 50;
          break;
        }
      });
    }

    preload() {
      this.load.image('bg', '../assets/bg_layer1.png');
    }

    create() {
      this.add.image(320, 240, 'bg');
      this.getLeaderboard();

      this.add.text(200, 100, 'Game Over', { fontSize: '48px bolder', fill: '#000' }).setOrigin(0.5);
      this.add.text(100, 150, `Your score: ${this.value}`, { fontSize: '32px bold', fill: '#000' });
      this.gameButton = new Button(this, 200, 300, 'blueButton1', 'blueButton2', 'Restart', 'Game');
    }
}
