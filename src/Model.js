export default class Model {
  constructor() {
    this.mysoundOn = true;
    this.mymusicOn = true;
    this.mybgMusicPlaying = false;
  }

  set musicOn(value) {
    this.mymusicOn = value;
  }

  get musicOn() {
    return this.mymusicOn;
  }

  set soundOn(value) {
    this.mysoundOn = value;
  }

  get soundOn() {
    return this.mysoundOn;
  }

  set bgMusicPlaying(value) {
    this.mybgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this.mybgMusicPlaying;
  }
}