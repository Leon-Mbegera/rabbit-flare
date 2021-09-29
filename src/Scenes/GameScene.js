import 'phaser';
import Carrot from '../game/Carrot';
import background from '../assets/bg_layer1.png'
import platform from '../assets/ground_grass.png'
import bunny_stand from '../assets/bunny1_stand.png'
import carrotImg from '../assets/carrot.png'

export default class GameScene extends Phaser.Scene {

  constructor() {
    super('Game');
  };

  player;
  platforms;
  cursors;
  carrots;
  carrotsCollected = 0;
  carrotsCollectedText

  init() {
    this.carrotsCollected = 0
  }

  preload() {
    this.load.image('bg', background);
    this.load.image('platform', platform)
    this.load.image('bunny_stand', bunny_stand)
    this.load.image('carrot', carrotImg)

    this.cursors = this.input.keyboard.createCursorKeys()
  };

  create() {
    this.add.image(240, 320, 'bg').setScrollFactor(1, 0)

    this.platforms = this.physics.add.staticGroup();
    for (let i = 0; i < 6; ++i) {
      const x = Phaser.Math.Between(80, 400);
      const y = 200 * i
      const platform = this.platforms.create(x, y, 'platform')
      platform.setScale(0.5)

      const body = platform.body
      body.updateFromGameObject()
    }

    this.player = this.physics.add.sprite(240, 320, 'bunny_stand').setScale(0.4)
    this.physics.add.collider(this.platforms, this.player)
    this.player.body.checkCollision.up = false
    this.player.body.checkCollision.left = false
    this.player.body.checkCollision.right = false

    this.cameras.main.startFollow(this.player)
    this.cameras.main.setDeadzone(this.scale.width * 1.5)

    this.carrots = this.physics.add.group({
      classType: Carrot
    })
    // this.carrots.get(240, 320, 'carrot')
    this.physics.add.collider(this.platforms, this.carrots)

    this.physics.add.overlap(
      this.player,
      this.carrots,
      this.handleCollectCarrot,
      undefined,
      this
    );

    const style = { color: '#000', fontSize: '24px' }
    this.carrotsCollectedText = this.add.text(240, 10, 'Score: 0', style)
        .setScrollFactor(0)
        .setOrigin(0.5, 0)
  };

  update(t, dt) {
    const touchingDown = this.player.body.touching.down
    if (touchingDown) {
      this.player.setVelocityY(-330);
    }

    this.platforms.children.iterate(child => {
      const platform = child;
      const scrollY = this.cameras.main.scrollY
      if (platform.y >= scrollY + 1100) {
        platform.y = scrollY - Phaser.Math.Between(50, 80)
        platform.body.updateFromGameObject()
        this.addCarrotAbove(platform)
      }
    });

    if (this.cursors.left.isDown && !touchingDown) {
      this.player.setVelocityX(-200);
    } else if (this.cursors.right.isDown && !touchingDown) {
      this.player.setVelocityX(200);
    } else {
      this.player.setVelocityX(0)
    }

    this.horizontalWrap(this.player)

    const bottomPlatform = this.findBottomMostPlatform();
    if (this.player.y > bottomPlatform.y + 200) {
      this.scene.start('game-over')
    }
  }

  horizontalWrap(sprite) {
    const halfWidth = sprite.displayWidth
    const gameWidth = this.scale.width
    if (sprite.x < -halfWidth) {
      sprite.x = gameWidth + halfWidth
    } else if (sprite.x > (gameWidth + halfWidth)) {
      sprite.x = -halfWidth;
    }
  }

  addCarrotAbove(sprite) {
    const y = sprite.y - sprite.displayHeight;
    const carrot = this.carrots.get(sprite.x, y, 'carrot')
    carrot.setActive(true)
    carrot.setVisible(true)
    this.add.existing(carrot)
    carrot.body.setSize(carrot.width, carrot.height)
    this.physics.world.enable(carrot)
    return carrot
  }

  handleCollectCarrot(player, carrot) {
    this.carrots.killAndHide(carrot)
    this.physics.world.disableBody(carrot.body)
    this.carrotsCollected ++;

    const value = `Score: ${this.carrotsCollected}`
    console.log(this.carrotsCollectedText)
    this.carrotsCollectedText.text = value
  }

  findBottomMostPlatform() {
    const platforms = this.platforms.getChildren()
    let bottomPlatform = platforms[0]

    for (let i = 1; i < platforms.length; ++i) {
      const platform = platforms[i]

      if (platform.y < bottomPlatform.y) {
        continue
      }
      bottomPlatform = platform
    }
    return bottomPlatform;
  }





};
