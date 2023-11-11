// ! Elements
// Get DOM elements for main grid, preview grid, start button
let dropGridEl = document.querySelector('.dropGrid')
const previewGridEl = document.querySelector('.previewGrid')
const storeGridEl = document.querySelector('.storeGrid')
let startButton = document.querySelector('.start')
let classicalStartButton = document.querySelector('.incipere')
let stylesheetLinked = document.querySelector('#stylesheet')

// Welcome elements that will be hidden on game start
let welcomeNL = document.querySelectorAll('.welcome')

// Sidebar scores
const scoreEl = document.querySelector('#currentScoreId')
const highScoreEl = document.querySelector('#highScoreId')
const levelEl = document.querySelector('#levelId')

// Create empty node lists for preview, moving, & hold tetraminoes
let holdTetNL = []
let activeTetNL = []
let gameOverNL = []
let storeTetNL = []

// Get High Score from local
let highScore = localStorage.getItem('tetrisHighScore')
highScoreEl.textContent = highScore

// ! Variables

// * Starting variables that could be customised by user on page load to change grid size & starting difficulty
const width = 10
let timeInterval = 1000

// *  Starting values on page load; make available as global variables
const previewWidth = 4
const previewCells = []
const storeCells = []
let dropCells = []
let score = 0
let interval = 0
let level = 1
const starterSquare = width * 3.5 - 1
let gameOver = true
let gamePaused = false
let musicMuted = false

// * Switching between classic and classical modes
let mode = 'classic'

// ! Executions (pre-game setup)
// * Create a preview grid that is 4x4 to display upcoming tetromino
const previewCellCount = previewWidth * previewWidth
//Function to create grid cells & append to existing grid
function createPreviewGrid(grid, cellsArray){
  for (let i = 0; i < previewCellCount; i++) {
    const cell = document.createElement('div')
    cell.innerText = i
    cell.id = i
    cell.style.width = `${100 / previewWidth}%`
    cell.style.margin = 0
    cell.style.borderWidth = 1
    cell.style.aspectRatio = 1
    grid.append(cell)
    cellsArray.push(cell)
  }
}

// * Create a main grid that is twice as high as it is wide with 4 holding bay rows at the top
const cellCount = width * ((width * 2) + 4)
//Function to create grid cells & append to existing grid
function createMainGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.innerText = i
    cell.id = i
    cell.style.height = `${100 / (2 * width)}%`
    cell.classList.add('dropCell')
    // cell.style.margin = 0
    // cell.style.aspectRatio = 1
    dropGridEl.append(cell)
    dropCells.push(cell)
    if (i < 4 * width) {
      console.log('Set background color of holding rows')
      cell.classList.add('holdingGrid')
    }
  }
}

// ! Executions (piece creation)
// One for each available tetromino (7)
//Declare type & starters array as global variables to allow them to be reached by multiple functions
// Adds relevant classes to four cells in dropGrid and previewGrid: .piece .preview/.holding .type*
let type
let Starters = []
const shapesArray = ['Square','L','ReverseL','Z','ReverseZ','T','Straight']

// * Determines starting cell of each piece in dropGrid & previewGrids based on tet shape
//Square
function setPieceSquare(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare + 1), (starterSquare - width), (starterSquare - width + 1)] : Starters = [9, 10, 13, 14]
  type = 'typeSquare'
  createPiece(cells)
}
//L
function setPieceL(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare + 1), (starterSquare - width), (starterSquare - 2 * width)] : Starters = [5, 9, 13, 14]
  type = 'typeL'
  createPiece(cells)
}
//ReverseL
function setPieceReverseL(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare - 1), (starterSquare - width), (starterSquare - 2 * width)] : Starters = [5, 9, 12, 13]
  type = 'typeReverseL'
  createPiece(cells)
}
//Z
function setPieceZ(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare + 1), (starterSquare - width), (starterSquare - width - 1)] : Starters = [8, 9, 13, 14]
  type = 'typeZ'
  createPiece(cells)
}
//ReverseZ
function setPieceReverseZ(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare - 1), (starterSquare - width), (starterSquare - width + 1)] : Starters = [9, 10, 12, 13]
  type = 'typeReverseZ'
  createPiece(cells)
}
//T
function setPieceT(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare + 1), (starterSquare - width), (starterSquare - 1)] : Starters = [12, 9, 13, 14]
  type = 'typeT'
  createPiece(cells)
}
//Straight
function setPieceStraight(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare - 1), (starterSquare + 1), (starterSquare + 2)] : Starters = [12, 13, 14, 15]
  type = 'typeStraight'
  createPiece(cells)
}

// * Adds appropriate classes to starting cells/divs
function createPiece(cells){
  Starters.forEach(function(StarterIdx){
    if (cells === dropCells){cells[StarterIdx].classList.add('piece',`${type}`,'hold')
    if (StarterIdx = (width * 3.5 - 1)) { 
      cells[StarterIdx].classList.add('axis')
    } 
  } else {cells[StarterIdx].classList.add('piece','preview',`${type}`)
}
  })
}

//  * Selects a shape at random and runs the createPiece function within both dropGrid & previewGrid
function createRandomPiece(){
  const shape = shapesArray[Math.floor(Math.random() * shapesArray.length)]
  const fnToRun = `setPiece${shape}`
  eval(fnToRun + '(dropCells)')
  previewCells.forEach(function(cell){
  cell.classList.remove('piece','typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL')
})
  eval(fnToRun + '(previewCells)')
} 


//! Start game
// Generates preview and main grids by executing these functions

function startGameClassic() {
  startGame()
}

function startGameClassical() {
  timeTravelFn()
  startGame()
}

function timeTravelFn (){
  if (mode == 'classic') {
    mode = 'classical'
    let audio = document.querySelector('#typeAMusic')
    audio.src='assets/classicalMusic.mp3'
    if (!musicMuted && !gamePaused){
      audio.play()
    }
    let body = document.querySelector('body')
    body.classList.add('classicalBody')
    stylesheetLinked.href = ('css/classical.css')
    let logo = document.querySelector('.logo')
    logo.src = 'assets/classicalTetrisLogo.png'
    let favicon = document.querySelector('.favicon')
    favicon.href="assets/classicalFavi.ico"
  } else {
    console.log('SWITCHING BACK TO CLASSIC')
    mode = 'classic'
    let audio = document.querySelector('#typeAMusic')
    audio.src='assets/typeAMusic.mp3'
    if (!musicMuted && !gamePaused){
      audio.play()
    }
    let body = document.querySelector('body')
    body.classList.remove('classicalBody')
    stylesheetLinked.href = ('css/main.css')
    let logo = document.querySelector('.logo')
    logo.src = 'assets/logo.png'
    let favicon = document.querySelector('.favicon')
    favicon.href='assets/favicon.ico'
  }
  console.log('Game mode is now: ', mode)
}

function startGame () {
  gameOver = false
  hideWelcome()
  dropGridEl.innerHTML = ''
  createMainGrid()
  startVariables()
  createRandomPiece()
  activateHoldingFn()
  autoMoveDownFn()
  const Sound = document.querySelector('#typeAMusic')
  if (!musicMuted){
    Sound.play()
  }
}


//Game setup functions
// Hides welcome class elements by adding hidden attribute to welcome class node list
function hideWelcome(){
  console.log('Hide welcome elements')
  welcomeNL = document.querySelectorAll('.welcome')
  welcomeNL.forEach(function(welcomeEl){
    welcomeEl.setAttribute('hidden', true)
    console.log('Hiding welcome elements iteratively')
  })
}
// Sets score to 0, level to 1, and timeInterval to 1000ms* (*how quickly do we want pieces to move? Slowly to begin with while coding)
function startVariables(){
  console.log('Set start variables')
  score = 0
  //Set scoreEl content to score
  scoreEl.textContent = score
  level = 1
  levelEl.textContent = level
  gameOverNL = null
  gameOver = false
  console.log('Boolean of Game over NL: ', !gameOverNL)
}

// Generate new random tetromino in preview
// Random number generator 0-6; that selects which class to trigger

// Generate previewed tetromino in holding bay
// When the holding bay is empty, trigger the same dropGrid class number as previewGrid

//Make holding bay tetramino active
function activateHoldingFn (){
  console.log('Activate hold tetrimino to moving function executed')
  holdTetNL = document.querySelectorAll('.hold')
  holdTetNL.forEach(function(cell){
    cell.classList.remove('hold')
    cell.classList.add('moving')
  })
}

// ! Key movement function below
// Land piece
// When any piece of the tetromino would reaches a grid cell above a currently populated grid cell, the whole tetromino should stop
// Check class at position = piece’s position’s index + width; if any of them are equal to staticPiece, change class to staticPiece & change the target of the dropping interval to next piece
// This should trigger the next piece to start dropping by changing its class from holding to moving
function moveDownFn(){
  //Only run if game is not paused
  if (!gamePaused){
  console.log('MOVE DOWN FUNCTION EXECUTED')
  // Increase score and select active tetrimino
  score += 1
  scoreEl.innerText = score
  let pieceAtBottom = false
  activeTetNL = document.querySelectorAll('.moving')
  // Check if tetrimino is at bottom or on top of landed cell
  activeTetNL.forEach(function(cell){
    
    // Add in condition here that checks if the classlist of the cell below contains a landed piece
    const newCellId = parseInt(cell.id) + width
    if (parseInt(cell.id) >= cellCount - width){
      console.log('Piece is at bottom')
      pieceAtBottom = true
    } else if (dropCells[newCellId]?.classList.contains('landed')){
      console.log('BOOLEAN VALUE OF WHETHER CELL BELOW CONTAINS A LANDED SQUARE: ', dropCells[newCellId].classList.contains('landed'))
      pieceAtBottom = true
    }
  })
  // If tetrimino is not at bottom, move it down one. Else, de-activate it and activate tetrimino in holding bay
  if (pieceAtBottom === false) {
    let type = 'typeStraight'
    let axisIndex
    activeTetNL = document.querySelectorAll('.moving')
    activeTetNL.forEach(function(cell){
      cell.classList.remove('moving','piece')
      // type = cell.classList[cell.classList.length - 1]
      // Extract type of current cell and store in type variable
      cellClassArray = Array.from(cell.classList)
      const cellClassArrayFiltered = cellClassArray.filter(function(className) {
        return className.includes('type')
      })
      type = cellClassArrayFiltered.toString()
      // If classlist contains axis, saves this index - 1 as a variable
      if (cell.classList.contains('axis')){
        axisIndex = (parseInt(cell.id) + width)
        // console.log(axisIndex)
      }
      cell.classList.remove('typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL','axis')
    })
    activeTetNL.forEach(function(cell){
      const newCellId = parseInt(cell.id) + width
      dropCells[newCellId]?.classList.add('piece','moving',`${type}`)
    })
    dropCells[axisIndex].classList.add('axis')
  } else {
    activeTetNL = document.querySelectorAll('.moving')
    activeTetNL.forEach(function(cell){
      cell.classList.remove('moving')
      cell.classList.add('landed')
    })
    clearInterval(interval)
    timeInterval = 1000 * (0.95 ** (level))
    autoMoveDownFn()
    activateHoldingFn()
  }
  // Check if a line is complete or the game is over:
  completeLineCheckFn()
  gameOverCheckFn()
  holdingBayEmptyFn()
}
}

// * This checks if the holding bay is empty and generates a new random tetromino if so
function holdingBayEmptyFn(){
  // console.log('HOLDING BAY CHECK FUNCTION')
  const holdingBayNL = document.querySelector('.holdingGrid.piece')
  // console.log('HOLDING NODE LIST: ', holdingBayNL)
  // console.log('Boolean of holdingBayNL: ', !holdingBayNL)
  if (!holdingBayNL === true) {
    createRandomPiece()
  }
}

// * This gives the game automated movement
// Drop tetromino at constant rate with SetInterval that updates the cell indices by (width); select cells with classes: .piece .active
function autoMoveDownFn(){
  clearInterval
  interval = setInterval(() => {
    console.log('AUTO MOVE DOWN FUNCTION EXECUTED with timeInterval of: ', timeInterval)
    moveDownFn()
    if (gameOver === true){
      clearInterval(interval)
    }
  }, timeInterval)
}

//! User interactions - translate

// * This was used during early build to allow pieces to be moved up in the grid for easier testing
// function arrowUpFn(){
//   if (!gamePaused){
//   console.log('ARROW UP FUNCTION EXECUTED')
//   activeTetNL = document.querySelectorAll('.moving')
//   activeTetNL.forEach(function(cell){
//     cell.classList.remove('moving','piece')
//   })
//   activeTetNL.forEach(function(cell){
//     const newCellId = parseInt(cell.id) - width
//     dropCells[newCellId].classList.add('piece','moving',`${type}`)
//   })
// }
// }

function arrowDownFn(){
  // console.log('ARROW DOWN FUNCTION EXECUTED')
  moveDownFn()
}

//* For left and right, need to add in if filters that check if there are landed pieces next to the active piece
function arrowLeftFn(){
  if (!gamePaused){
  console.log('ARROW LEFT FUNCTION EXECUTED')
  let pieceAtLeft = false
  let axisIndex
  let type = 'typeStraight' //! This needs fixing
  activeTetNL = document.querySelectorAll('.moving')
  activeTetNL.forEach(function(cell){
    // Use or operator to check  piece is either at edge of grid or cell to right has a piece in already
    if (parseInt(cell.id) % width === 0 || dropCells[(cell.id - 1)].classList.contains('landed')) {
      pieceAtLeft = true
    }
  })
  console.log('Piece at left: ', pieceAtLeft)
  if (pieceAtLeft === false){
    activeTetNL.forEach(function(cell){
      cell.classList.remove('moving','piece')
      cellClassArray = Array.from(cell.classList)
      const cellClassArrayFiltered = cellClassArray.filter(function(className) {
        return className.includes('type')
      })
      type = cellClassArrayFiltered.toString()
      // If classlist contains axis, save this index - 1 as a variable
      if (cell.classList.contains('axis')){
        // console.log('FOUND AN AXIS PIECE at id:')
        axisIndex = parseInt(cell.id) - 1
      }
      cell.classList.remove('typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL','axis')
    })
    activeTetNL.forEach(function(cell){
      const newCellId = parseInt(cell.id) - 1
      dropCells[newCellId].classList.add('piece','moving',`${type}`)
    })
    // console.log('Axis index: ', axisIndex)
  }
  dropCells[axisIndex]?.classList.add('axis')
}
}

function arrowRightFn(){
  if (!gamePaused){
  console.log('ARROW RIGHT FUNCTION EXECUTED')
  let pieceAtRight = false
  let axisIndex
  let type = 'typeStraight' //! This needs fixing
  activeTetNL = document.querySelectorAll('.moving')
  activeTetNL.forEach(function(cell){
    if ((parseInt(cell.id) + 1) % width === 0 || dropCells[(parseInt(cell.id) + 1)].classList.contains('landed')) {
      console.log('Piece at Right set to true')
      pieceAtRight = true
    }
  })
  console.log('Piece at right: ', pieceAtRight)
  if (pieceAtRight === false){
    activeTetNL.forEach(function(cell){
      cell.classList.remove('moving','piece')
      cellClassArray = Array.from(cell.classList)
      const cellClassArrayFiltered = cellClassArray.filter(function(className) {
        return className.includes('type')
      })
      type = cellClassArrayFiltered.toString()
      // If classList contains axis, save this index + 1 as a variable
      if (cell.classList.contains('axis')) {
        axisIndex = parseInt(cell.id) + 1
      }
      cell.classList.remove('typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL','axis')
    })
    activeTetNL.forEach(function(cell){
      const newCellId = parseInt(cell.id) + 1
      dropCells[newCellId].classList.add('piece','moving',`${type}`)
    })
  }
  dropCells[axisIndex]?.classList.add('axis')
}
}

//! Enhancements
//  * Drop piece to bottom immediately
function hardDropFn(){
  if (!gamePaused && !gameOver){
  clearInterval(interval)
  timeInterval = 1 * (0.95 ** parseInt(level))
  autoMoveDownFn()
  }
}

// * Pause/Unpause
function pauseGameFn(){
  console.log('Executing pause game function')
  const Sound = document.querySelector('#typeAMusic')
  Sound.pause()
  gamePaused = true
  clearInterval(interval)
  // keyupFunctions(evt)
  window.addEventListener('keyup', keyupFunctions)
  window.addEventListener('keydown', keydownFunctions)
  controlButtons[6].removeEventListener('click',pauseGameFn)
  controlButtons[6].addEventListener('click',unPauseGameFn)
}
function unPauseGameFn(){
  if (gamePaused){
    console.log('Executing unpause game function')
    const Sound = document.querySelector('#typeAMusic')
    if (!musicMuted) {
      Sound.play()
    }
    gamePaused = false
    controlButtons[6].removeEventListener('click',unPauseGameFn)
    controlButtons[6].addEventListener('click',pauseGameFn)
    autoMoveDownFn()
  }
}

// * Mute/Unmute
function muteMusicFn(){
  const Sound = document.querySelector('#typeAMusic')
  Sound.pause()
  musicMuted = true
  controlButtons[7].removeEventListener('click',muteMusicFn)
    controlButtons[7].addEventListener('click',unMuteMusicFn)
}
function unMuteMusicFn(){
  const Sound = document.querySelector('#typeAMusic')
  Sound.play()
  musicMuted = false
  controlButtons[7].removeEventListener('click',unMuteMusicFn)
    controlButtons[7].addEventListener('click',muteMusicFn)
}

// * Store/Retrieve piece
function storePieceFn(){
  // Only allow to run if active piece is fully in dropGrid
  const holdingBayNL = document.querySelectorAll('.holdingGrid.piece.moving')
  // Deduce type of stored piece
  if (holdingBayNL.length == 0){
    let storeType
    storeTetNL = storeGridEl.querySelectorAll('.piece')
    if (storeTetNL.length > 0) {
      const cell = storeTetNL[0]
      cellClassArray = Array.from(cell.classList)
          const cellClassArrayFiltered = cellClassArray.filter(function(className) {
            return className.includes('type')
          })
          storeType = cellClassArrayFiltered.toString()
          storeShape = storeType.slice(4)
        }
    // Deduce type of active piece
    console.log("STORE PIECE FUNCTION ACTIVATING")
    let type
    activeTetNL = document.querySelectorAll('.moving')
    activeTetNL.forEach(function(cell){
      // Save type of piece/tetramino
      cellClassArray = Array.from(cell.classList)
          const cellClassArrayFiltered = cellClassArray.filter(function(className) {
            return className.includes('type')
          })
          type = cellClassArrayFiltered.toString()
          console.log(type)
    })
    const shape = type.slice(4)
    let fnToRun = `setPiece${shape}`
    storeCells.forEach(function(cell){
    cell.classList.remove('piece','typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL')
    })
    eval(fnToRun + '(storeCells)')
    activeTetNL.forEach(function(cell){
      cell.classList.remove('piece','moving','typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL')
    })
    // If no store piece currently:
    if (storeTetNL.length == 0){
      activateHoldingFn()
    } else{
      holdTetNL = document.querySelectorAll('.hold')
      holdTetNL.forEach(function(cell){
        cell.classList.remove('piece','hold','typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL')
      })
      fnToRun = `setPiece${storeShape}`
      eval(fnToRun + '(dropCells)')
      activateHoldingFn()
    }
  // If store piece exists already, remove holding piece and create piece with same type then activate holding fn
  // Re-create current piece in storeGrid with .storeCells class
  // Remove active piece classes from drop grid
  // Activate next piece in holding
  }
}

//! User interactions - rotate
// Triggered by up key event
// Needs to check a) which piece b) how much space the piece has (bounds of grid, landed/held pieces in vicinity)

// Array that stores the possible differences between a piece's index and its tetramino's axis piece's index
const rotationOriginArray = [-3,(-width-2),-2,(-width-1),-1,(width-1),(2*width-1),(-3*width),(-2*width),(-width),0,(width),(2*width),(3*width),(-2*width+1),(-width+1),1,(width+1),2,width+2,3]
console.log('Rotation origin array: ',rotationOriginArray)
// Based on the rotationOriging, what transformation needs to happen to the current piece's index when rotating?
const rotationMoveArray = [(-3*width+3),(-width+3),((-2*width)+2),2,(-width+1),(-2*width),(-3*width-1),(3*width+3),((2*width)+2),(width+1),0,(-width-1),((-2*width)-2),(-3*width-3),(3*width+1),(2*width),(width-1),-2,((2*width)-2),(-width-3),(3*width-3)]
console.log('Rotation move array: ',rotationMoveArray)
// Anticlockwise transformations:
const rotationMoveAntiArray = [(3*width+3),(3*width+1),(2*width+2),(2*width),(width+1),(2),(-width+3),(3*width-3),(2*width-2),(width-1),(0),(-width+1),(-2*width+2),(-3*width+3),(width-3),(-2),(-width-1),(-2*width),(-2*width-2),(-3*width-1),(-3*width-3),]

//* Rotate functions 
// (Main function needs 2 preceding functions so it can be accessed via button event listeners)
function rotateNormalFn(){
  rotateFn(rotationMoveArray)
}

function rotateBackFn(){
  rotateFn(rotationMoveAntiArray)
}

function rotateFn(rotationArray){
  if (!gamePaused){
  console.log('ROTATE FUNCTION EXECUTING')
  let type
  let pieceAtEdge = false
  let landedPieceAdjacent = false
  let heldAxisPieceAdjacent = false
  let modArray = []
  // Fetch activeTetNL again
  activeTetNL = document.querySelectorAll('.moving')
  // Find index of axis cell
  const axisCell = document.querySelector('.moving.axis')
  const axisIdx = parseInt(axisCell.id )
  
  // Determine newCellId % width array
  activeTetNL.forEach(function(cell){
    let idxDif = parseInt(cell.id) - axisIdx
    const isEqual = (number) => number === idxDif
    const rotationOriginArrayIdx = rotationOriginArray.findIndex(isEqual)
    const rotationMoveReqd = rotationArray[rotationOriginArrayIdx]
    const newCellId = parseInt(cell.id) + rotationMoveReqd
    const modNewCellId = newCellId % width
    modArray.push(modNewCellId)
    // Check if new cells contain landed pieces; if so, don't allow rotate
    if (dropCells[newCellId]?.classList.contains('landed')){
      landedPieceAdjacent = true
    }
    // Check if new cells contain the axis piece of a held tetromino
    if (newCellId == width * 3.5 - 1){
      heldAxisPieceAdjacent = true
    }
  })
  // If this array contains 0 & width, don't allow rotate function
  if(modArray.includes(0) && modArray.includes(width-1)){
    pieceAtEdge = true
  }

  if (!pieceAtEdge && !landedPieceAdjacent && !heldAxisPieceAdjacent){
    // Iterate over each cell within
    // For each cell within, find cellIdx - aIdx & use the rotation arrays to determine the change in index required
    activeTetNL.forEach(function(cell){
    // Save type of piece/tetramino
    cellClassArray = Array.from(cell.classList)
        const cellClassArrayFiltered = cellClassArray.filter(function(className) {
          return className.includes('type')
        })
        type = cellClassArrayFiltered.toString()
        console.log(type)
    // Remove moving classes from old cell
    if (type !== 'typeSquare'){
      cell.classList.remove('moving','piece','typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL')
      }
    })
    
    // Determine rotation move required based on relative position of cell to axis cell
    if (type !== 'typeSquare'){
      activeTetNL.forEach(function(cell){
        let idxDif = parseInt(cell.id) - axisIdx
        const isEqual = (number) => number === idxDif
        const rotationOriginArrayIdx = rotationOriginArray.findIndex(isEqual)
        const rotationMoveReqd = rotationArray[rotationOriginArrayIdx]
        const newCellId = parseInt(cell.id) + rotationMoveReqd
        dropCells[newCellId].classList.add('piece','moving',`${type}`)
      })
    }
  }
}
}

// ! Game over & complete line functions
// * Game over functions [2]
//When a piece is switched to 'landed' but is within the first 4 * width indices still, this will trigger a game over function that stops gameplay
//Set new highscore if score > highscore; updates highScore span
//Clears all intervals
// Removes the hidden attribute from start button
function gameOverCheckFn(){
  gameOverNL = document.querySelector('.holdingGrid.landed')
  if (gameOverNL) {
    gameOverFn()
  }
}
function gameOverFn() {
  if (score > highScore || !highScore){
    highScore = score
    highScoreEl.innerText = highScore
    localStorage.setItem('tetrisHighScore',score)
  }
  console.log('GAME OVER')
  const Sound = document.querySelector('#typeAMusic')
  Sound.pause()
  dropGridEl.innerHTML = '<section class = "welcome"><h1 class = "welcome">GAME OVER<h1><button class="welcome start">PLAY AGAIN</button></section>'
  gameOver = true
  clearInterval(interval)
  // Remove stored piece
  storeCells.forEach(function(cell){
    cell.classList.remove('piece','typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL')
    })
  startButton = document.querySelector('.start')
  startButton.addEventListener('click',startGame)
  dropCells = []
  dropGridEl = document.querySelector('.dropGrid')
  welcomeNL.forEach(function(element){
    element.setAttribute('hidden', false)
  })
}

// * Complete line functions [3]
function completeLineCheckFn() {
  // Iterate over rows; within this, iterate over cells
  for (let row = 4; row < (2 * width + 4); row++){
    let landedCells = 0
    for (let cell = row * width; cell < (row + 1) * width; cell++){
      dropCells[cell].classList?.contains('landed') ? landedCells += 1 : landedCells
    }
    if (landedCells === width){
      completeLineFn(row)
      landedCells = 0
    }
  }
}
// * Remove complete line, shift cells and add empty row to top
function completeLineFn(row){
  console.log('Complete line function running for row: ', row)
  // Play success sound
  const Sound = document.querySelector('#successSound')
  if(!musicMuted) {Sound.play()}
  score += width
  scoreEl.innerText = score
  // Set level based on score
  level = parseInt(score / (10 * width))
  levelEl.innerText = level
  // Take 10% off automated movement interval each level
  timeInterval = 1000 * (0.95 ** (level))
  // Remove completed row
  for (let cell = row * width; cell < (row + 1) * width; cell++){
    dropCells[cell].className = ''
    dropCells[cell].remove()
  }
  // Shift cells above down a row --> Starting from cell 4*width & ending at row just deleted, increase the ID and contents of each cell by width)

  for (let cellToShift = 4 * width; cellToShift < row * width; cellToShift++ ){
    const idToShift = parseInt(dropCells[cellToShift].id)
    dropCells[cellToShift].id = idToShift + width
    dropCells[cellToShift].innerText = (cellToShift + width)
  }
  dropCells = document.querySelectorAll('.dropCell')
  //Create and add width cells before index 5*width
  addLineFn()
  holdingBayEmptyFn()
  activateHoldingFn()
}
// * Adds new line to top
function addLineFn(){
  for (let cellToAdd = 4 * width; cellToAdd < 5 * width; cellToAdd ++) {
    const newCell = document.createElement('div')
    newCell.innerText = cellToAdd
    newCell.id = cellToAdd
    newCell.style.height = `${100 / (2 * width)}%`
    newCell.classList.add('dropCell')
    const currentCell = dropCells[4 * width]
    dropGridEl.insertBefore(newCell, currentCell)
  }
  dropCells = document.querySelectorAll('.dropCell')
}



// ! Events - keyboard events
// * Keyboard triggered functions
// Keyup for actions that can only be completed once per key click
function keyupFunctions(evt){
  console.log('Keyup function triggered: ',evt)
  const key = evt.code
  if (key === 'Enter' && gameOver){
    startGame()
  } else if (key === 'ArrowUp'){
    rotateFn(rotationMoveArray)
  } else if (key === 'ShiftRight'){
    rotateFn(rotationMoveAntiArray)
  } else if (key === 'Space'){
    hardDropFn()
  } else if (key === 'KeyP' && !gamePaused) {
    pauseGameFn()
  } else if (key === 'KeyP' && gamePaused){
    unPauseGameFn()
  } else if (key === 'KeyM' && !musicMuted){
    muteMusicFn()
  } else if (key === 'KeyM' && musicMuted){
    unMuteMusicFn()
  } else if (key === 'KeyS'){
    storePieceFn()
  } else if (key === 'KeyI' && gameOver){
    startGameClassical()
  } else if (key === 'KeyT'){
    timeTravelFn()
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

//! Events
// Clicking start button; this should also re-set the game
startButton.addEventListener('click',startGameClassic)
classicalStartButton.addEventListener('click',startGameClassical)

// * Add in keyboard listeners
window.addEventListener('keyup', keyupFunctions)
window.addEventListener('keydown', keydownFunctions)

// * Fetch control button elements & add event listeners that equates clicking relevant button to pressing that key; this is broken
const controlNames = ['leftButton','rightButton','downButton','spaceButton','upButton','shiftButton','pauseButton','muteButton','storeButton','timeTravelButton']
const controlButtons = []
controlNames.forEach(function(button){
  button = document.querySelector(`#${button}`)
  controlButtons.push(button)
})
console.log('Returned button elements: ', controlButtons)

controlButtons[0].addEventListener('click',arrowLeftFn)
controlButtons[1].addEventListener('click',arrowRightFn)
controlButtons[2].addEventListener('click',moveDownFn)
controlButtons[3].addEventListener('click',hardDropFn)
controlButtons[4].addEventListener('click',rotateNormalFn)
controlButtons[5].addEventListener('click',rotateBackFn)
controlButtons[6].addEventListener('click',pauseGameFn)
controlButtons[7].addEventListener('click',muteMusicFn)
controlButtons[8].addEventListener('click',storePieceFn)
controlButtons[9].addEventListener('click',timeTravelFn)

// Switch musicMuted event listener trigger between mute & unmute
if (!musicMuted) {
  controlButtons[7].addEventListener('click',muteMusicFn)
} else {
  controlButtons[7].addEventListener('click',unMuteMusicFn)
}

// ! Page Load
//  * Create preview and store grids on page load
window.addEventListener('DOMContentLoaded', createPreviewGrid(previewGridEl, previewCells))
window.addEventListener('DOMContentLoaded', createPreviewGrid(storeGridEl, storeCells))