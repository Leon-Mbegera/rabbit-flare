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

  ## Service API
  Made use of the api endpoint provided by Microverse to save the score associated to the game and the user name, and display a leaderboard
