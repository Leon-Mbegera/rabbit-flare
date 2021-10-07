# rabbit-flare

Rabbit flare is an exciting platform game that is based on the concept of an endless game. The character is a bunny that jumps onto platforms as it searches for carrots to feed. As the player controls the bunny, and feeds it on the carrots, he/she garners more points on the score. If in any case the bunny jumps off and fails to land on any platform, it falls to its doom, and that's Game Over!

## live demo

[click to play](https://leon-mbegera.github.io/rabbit-flare/)


![](src/assets/ui/Screenshot2021-10-06130931.png)

## Play instructions
1. Once the game has loaded, a title scene appears with various buttons. Hit the play button.
2. Give your preferred player name on the form that appears and hit on the button start game. This will   commence the game. Get ready!
3. Make use of the up key to perform an extra jump when it the air, left and right keys to move the rabbit left or right so that it land on a platform.
4. Control the rabbit to collide with carrots so that you can earn points on your score.
5. If your steer the rabbit far off the game scene, or below the bottom-most platform, the game will be over.
6. The game over scene will be displayed, and in about 2 secs, the leaderboard will come up.
7. Hit on Restart button if you want to replay.

# Game Design Document

This project consists of building a rabbit jump platform game using JavaScript and the game engine Phaser.
In the efforts of building this game, I made use of the following curated resourses to gain fundamental knowledge and understanding
     - [Getting Started With Phaser](http://phaser.io/tutorials/making-your-first-phaser-3-game/part1)
     - [Create a Video Template](https://phasertutorials.com/creating-a-phaser-3-template-part-1/) 
Additional resources:
     - [Phaser Tutorials](https://phaser.io/tutorials/getting-started-phaser3)
     - [Phaser Documentation](https://photonstorm.github.io/phaser3-docs/)

## Game play
The game is designed to be played using the keyboard arrowkeys. up : to perform an extra jump when in the air. left key: to move the rabbit leftwards, and right key: move the rabbit rightwards.

## Game Project Structure

Rabbit flare was created through high-level milestones that were span over a working duration of 5 days. i.e.,
  - Day 1:  Learning about Phaser Library, following the tutorials, setup development environment        and practice game development with this [5 parts tutorial](https://www.emanueleferonato.com/tag/endless-runner/). 

  - Day 2:  Get familiar, with phaser features, planning the game, designed it and implemented the very basic mechanics first inorder to make it playerble. Here, I also gathered the assets needed for the game. Here I made use of Phaser3 JS library to create the canvas/webGl and different scenes.

  - Day 3:  Setup up the project with the following scenes: Boot, Preloader, Title, Player, and Game. Built the main game scene and used Phaser3 to animate and edit different features like size, respawn, velocity, movement, color.

  - Day 4: Add logic for the rabbit to perform and double jump in the air as well place onto platforms carrots to collect inorder to earn points/scores.

  - Day 5: Added a leaderboard service api to keep track of each player's score upon game over and post them to the leaderboard. Afterwards, display the leaderboard with the top 10 players listed.

  ## Game Elements
  - Rabbit
  - Carrots
  - Grass Platforms
  - Blue sky background

  ## Scores
  To earn a score the rabbit has to jump onto platforms and collide with the carrots.

  ## Assets
  The assets used are obtained from [Kenny's library](https://kenney.nl/assets) art assets.

  ## Video Template
  The basic template of this game following the sequence of BootScene, PreloaderScene, PlayerScene, TitleScene, OptionsScene, CreditsScene, GameScene, GameOverScene, and LeaderBoardScene has been implemented following the [Create a Video Template](https://phasertutorials.com/creating-a-phaser-3-template-part-1/).

  ## Delayed submission
  This resulted because phaser 3 library and game development in general was very new to me therefore I needed to do alot of research and learning before i tackling the project. But now henceforth, I am quite comfortable to tackle a similar project within the specified duration.

  ## Objectives by day 2
  By the day 2, my objectives were to have acquinted myself with phaser features, gathered needed assets and implemented the very basic mechanism of the game. I achieved all the former objective but not the latter; implementing the basic game play because their was some understanding i was lacking at the time.

## Built with
- JavaScript
- Phaser

## To get started
- Clone this repository onto your local machine and cd into its directory in your code editor.
- ` git clone https://github.com/Leon-Mbegera/rabbit-flare.git`
- ` cd rabbit-flare`

## Using webpack
- Install packages and node dependencies needed:
- ` npm install`

- run the below command for webpack to always track changes made in the game scenes and its dependent modules.
- `$ npm run start`
- Follow the link in the terminal after running the command just above to view and play the game live on your browser

## Testing

- run `npm run test` on the terminal.

## Author

👤 **Leon**

- GitHub: [github](https://github.com/Leon-Mbegera)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/leon-mbegera)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Leon-Mbegera/rabbit-flare/issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgement

Big thanks to Kenny's public dormain library of art assets ⭐️
