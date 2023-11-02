// ! Elements
// Get DOM elements for main grid, preview grid, start button, and sidebar scores (score, highscore, level)
const dropGridEl = document.querySelector('.dropGrid')
const nextPieceGridEl = document.querySelector('.nextPieceGrid')
const startButton = document.querySelector('.start')
// Welcome elements that will be hidden on game start


// ! Variables
// Starting values on page load; make available as global variables
let score = 0
let highScore = 0
let level = 1

// ! Preview Grid
// Create a preview grid that is 4x4 to display upcoming tetromino
const previewWidth = 4
const previewCellCount = width * width

//Function to create grid cells & append to existing grid
for (let i = 0; i < cellCount; i++) {
  console.log('Main grid creation function running')
}

// ! Main Grid
const width = 10
// Create a grid that is twice as high with 4 holding bay rows at the top
const cellCount = width * ((width * 2) + 4)

//Function to create grid cells & append to existing grid
for (let i = 0; i < cellCount; i++) {
  console.log('Main grid creation function running')
}

// ! Classes
// One for each available tetromino
// Creates the class in previewGrid
// Another set of classes to create in the holding bay?

// ! Executions
//* Start game

//Game setup function
// Hides welcome class elements by adding hidden attribute to welcome class node list
// Sets score to 0, level to 1, and timeInterval to 1000ms* (*how quickly do we want pieces to move?)

// Generates preview and main grids by executing these functions
// Generate new random tetromino in preview
// Random number generator 0-6; that selects which class to trigger

// Generate previewed tetromino in holding bay

// Drop tetromino at constant rate with SetInterval that updates the cell indices by (width)

// Land piece
// When any piece of the tetromino would reaches a grid cell above a currently populated grid cell, the whole tetromino should stop
// Check class at position = piece’s position’s index + width; if any of them are equal to staticPiece, change class to staticPiece & change the target of the dropping interval to next piece
// This should trigger the next piece to start dropping by changing its class from holding to moving


//* User interactions - translate
// moveLeft: Triggered by eventlisteners; checks that positionPiece1-4 + 1 % width !== 0 → increases positionPiece1-4 by one
// moveRight: checks that positionPiece1-4 % width !== 0 → increases positionPiece1-4 by one
// moveDown: Each time clicked, increase the currentPositionPiece1-4 by width indices for movingPiece class
// hardDrop: TBC


//* User interactions - rotate
// Triggered by up key event
// Needs to check a) which piece b) how much space the piece has
// Accordingly, will do some fun maths manipulations to each of the 4 piece's currentPosition index. Yay.

//*Sidebar updates
// These actions will be triggered within other functions

//*Game over
//When a piece is switched to 'landed' but is within the first 4 * width indices still, this will trigger a game over function that stops gameplay
//Set new highscore if score > highscore; updates highScore span
//Clears all intervals
// Removes the hidden attribute from start button

// * Complete line
// Remove current line
// Move all landedPieces with lower indices values along by width number of spaces (= down one row)
// Increase score by 1 & update score span
// If score % 10 = 0, increase level by 1, update level span, & decrease timeInterval by 10%?


// ! Events
// Clicking start button; this should also re-set the game
//Arrow down, left, right as keydown listeners that trigger appropriate moveX function above
//Arrow up for rotate function
// Spacebar (for hard drop)


// ! Page Load
// Wait until start button is pressed to generate main grid
// This could trigger the preview grid