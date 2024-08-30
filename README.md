# Tic-Tac-Toe Game

## Introduction
This project is a simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game is designed to be played between two players, X and O, and includes a score tracking system and a restart functionality.

## Features
- Two-player Tic-Tac-Toe game.
- Score tracking for both players (X and O).
- Highlighting of the winning combination.
- Restart button to reset the game.

## How to Play
1. The game starts with player O's turn.
2. Players take turns to click on the grid squares to place their mark (X or O).
3. The game checks for a winner after each move.
4. The game highlights the winning combination and updates the score.
5. Players can restart the game by clicking the "Restart" button.

## Project Structure
- **index.html**: Contains the HTML structure for the Tic-Tac-Toe game.
- **one.css**: Provides the styling for the game interface.
- **javascript.js**: Contains the JavaScript logic for handling the game mechanics, including player turns, winner detection, score updates, and restart functionality.

## Technologies Used
- **HTML**: For the basic structure and layout of the game.
- **CSS**: For styling the game elements, including the grid, score display, and buttons.
- **JavaScript**: For implementing the game logic, including turn management, winner detection, and score tracking.

## Setup and Installation
1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.
3. Start playing the game by clicking on the grid squares.

## Gameplay
The game grid is a 3x3 matrix, with each cell represented by a div element. Players take turns to click on the cells, with player O going first. The game logic ensures that players cannot overwrite a cell that has already been filled. 

## Scoring System
The game tracks the scores for both players. When a player wins, their score is incremented, and the winning combination is highlighted on the grid. The score is displayed next to the player's symbol (X or O) at the top of the game board.

## Restart Functionality
The "Restart" button allows players to reset the game grid and start a new game. The matrix representing the game state is cleared, and the grid cells are emptied. The scores remain intact, allowing players to continue their series of games.

## Future Enhancements
- **AI Integration**: Implement a single-player mode where the player can compete against an AI.
- **Mobile Responsiveness**: Improve the design to ensure it is fully responsive on mobile devices.
- **Undo Functionality**: Add the ability for players to undo their last move.
- **Enhanced UI**: Improve the overall design with animations and sound effects.
