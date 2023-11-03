// ! Elements
// Get DOM elements for main grid, preview grid, start button
const dropGridEl = document.querySelector('.dropGrid')
const previewGridEl = document.querySelector('.previewGrid')
const startButton = document.querySelector('.start')

// Welcome elements that will be hidden on game start
const welcomeNL = document.querySelectorAll('.welcome')

//Sidebar scores
const scoreEl = document.querySelector('#currentScoreId')
const highScoreEl = document.querySelector('#highScoreId')
const levelEl = document.querySelector('#levelId')

// Get node lists for preview, moving, & hold tetraminoes
const holdTetNL = document.querySelectorAll('.hold')
const activeTetNL = document.querySelectorAll('.moving')
const landedTetNL = document.querySelectorAll('.landed')

// ! Variables
// Starting values on page load; make available as global variables
const previewCells = []
const dropCells = []
const width = 10
let score = 0
// let highScore = 0
let level = 1
// let timeInterval = 1000
const starterSquare = width * 3.5 - 1
// let currentPieceA = width * 3.5
// let currentPieceB = width * 2.5
// let currentPieceC = width * 1.5
// let currentPieceZ = width * 0.5

// ! Preview Grid
// Create a preview grid that is 4x4 to display upcoming tetromino
const previewWidth = 4
const previewCellCount = previewWidth * previewWidth

//Function to create grid cells & append to existing grid
function createPreviewGrid(){
  for (let i = 0; i < previewCellCount; i++) {
    const cell = document.createElement('div')
    cell.innerText = i
    cell.id = i
    cell.style.width = `${100 / previewWidth}%`
    cell.style.margin = 0
    cell.style.borderWidth = 1
    cell.style.aspectRatio = 1
    previewGridEl.append(cell)
    previewCells.push(cell)
  }
}

// ! Main Grid
// Create a grid that is twice as high with 4 holding bay rows at the top
const cellCount = width * ((width * 2) + 4)

//Function to create grid cells & append to existing grid
function createMainGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.innerText = i
    cell.id = i
    cell.style.height = `${100 / (2 * width + 4)}%`
    cell.style.margin = 0
    cell.style.aspectRatio = 1
    dropGridEl.append(cell)
    dropCells.push(cell)
    if (i < 4 * width) {
      console.log('Set background color of holding rows')
      cell.classList.add('holdingGrid')
    }
  }
}

// ! JS CClasses --> these will group four functions to move tetromino pieces together
// One for each available tetromino
function createPieceSquare(cells) {
  let SquareStarters = []
  cells == dropCells ? SquareStarters = [starterSquare, (starterSquare + 1), (starterSquare - width), (starterSquare - width + 1)] : SquareStarters = [9, 10, 13, 14]
  SquareStarters.forEach(function(SquareStarterIdx){
    cells[SquareStarterIdx].classList.add('piece','moving','typeSquare')
  })
}
// Contains four functions to create the four pieces (z,a,b,c where 'a' will always be the central piece/axis of rotation)
// Adds relevant classes to four cells in previewGrid: .piece .preview .{color}
// Another set of complementary classes to create in the holding bay?

// ! Executions

// * Keyboard triggered functions
// Keyup for actions that can only be completed once per key click
function keyupFunctions(evt){
  console.log('Keyup function triggered: ',evt)
  const key = evt.code
  if (key === 'Enter'){
    startGame()
  } else if (key === 'ArrowUp'){
    arrowUpFn()
    // Add in some tester keyboard actions for testing functions by pressing f
  } else if (key === 'KeyF'){
    // Put function to test in here
    createPieceSquare(dropCells)
  }
}

// Keydown for actions that can be repeated/continued by holding the key down: down, left, right
function keydownFunctions(evt){
  console.log('Keydown function triggered: ', evt)
  const key = evt.code
  if (key === 'ArrowDown'){
    arrowDownFn()
  } else if (key === 'ArrowLeft'){
    arrowLeftFn()
  } else if (key === 'ArrowRight'){
    arrowRightFn()
  }
}

//* Start game
// Generates preview and main grids by executing these functions
function startGame () {
  hideWelcome()
  createMainGrid()
  startVariables()
  console.log('GAME STARTED')
}
//Game setup functions
// Hides welcome class elements by adding hidden attribute to welcome class node list
function hideWelcome(){
  console.log('Hide welcome elements')
  welcomeNL.forEach(function(welcomeEl){
    welcomeEl.setAttribute('hidden', true)
    console.log('Hiding welcome elements iteratively')
  })
}
// Sets score to 0, level to 1, and timeInterval to 1000ms* (*how quickly do we want pieces to move? Slowly to begin with while coding)
function startVariables(){
  score = 0
  //Set scoreEl content to score
  scoreEl.textContent = score
  level = 1
  levelEl.textContent = level
}



// Generate new random tetromino in preview
// Random number generator 0-6; that selects which class to trigger

// Generate previewed tetromino in holding bay
// When the holding bay is empty, trigger the same dropGrid class number as previewGrid

// Drop tetromino at constant rate with SetInterval that updates the cell indices by (width); select cells with classes: .piece .active

function movedownFn(){
  activeTetNL.forEach(function(cell){

  })
}

// Land piece
// When any piece of the tetromino would reaches a grid cell above a currently populated grid cell, the whole tetromino should stop
// Check class at position = piece’s position’s index + width; if any of them are equal to staticPiece, change class to staticPiece & change the target of the dropping interval to next piece
// This should trigger the next piece to start dropping by changing its class from holding to moving


//* User interactions - translate
// moveLeft: Triggered by eventlisteners; checks that positionPiecez-c + 1 % width !== 0 → increases positionPiecez-c by one
// moveRight: checks that positionPiece1-4 % width !== 0 → increases positionPiecec-z- by one
// moveDown: Each time clicked, increase the currentPositionPiecez-c by width indices for movingPiece class
// hardDrop: TBC
function arrowUpFn(){

}

function arrowDownFn(){
  moveDownFn()
}

function arrowLeftFn(){

}

function arrowRightFn(){

}

function arrowHeldDownFn(){

}




//* User interactions - rotate
// Triggered by up key event
// Needs to check a) which piece b) how much space the piece has
// Accordingly, will do some fun maths manipulations to each of the 4 piece's currentPosition index. Yay.

//*Sidebar updates N/A
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
startButton.addEventListener('click',startGame)
//Arrow down, left, right as keydown listeners that trigger appropriate moveX function above
//Arrow up for rotate function
// Spacebar (for hard drop)
// * Add in some test keys to test functions as they're being coded
document.addEventListener('keyup', keyupFunctions)
document.addEventListener('keydown', keydownFunctions)


// ! Page Load
// Wait until start button is pressed to generate main grid
// This could trigger the preview grid
window.addEventListener('DOMContentLoaded', createPreviewGrid)