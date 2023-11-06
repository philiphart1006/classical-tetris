// ! Test keys:
// F -> create square piece
// G -> create L piece
// H -> create reverse L piece
// Z -> start automovedown
// X -> convert holding piece to active
// S -> complete line function

// ! Test logging

// ! Elements
// Get DOM elements for main grid, preview grid, start button
const dropGridEl = document.querySelector('.dropGrid')
const previewGridEl = document.querySelector('.previewGrid')
let startButton = document.querySelector('.start')

// Welcome elements that will be hidden on game start
let welcomeNL = document.querySelectorAll('.welcome')

//Sidebar scores
const scoreEl = document.querySelector('#currentScoreId')
const highScoreEl = document.querySelector('#highScoreId')
const levelEl = document.querySelector('#levelId')

// Create empty node lists for preview, moving, & hold tetraminoes
let holdTetNL = []
let activeTetNL = []
// let landedTetsNL = []
// This will be a node list of cells that are both landed and hold
let gameOverNL = []

// ! Variables
// Starting values on page load; make available as global variables
const previewCells = []
let dropCells = []
const width = 10
let score = 0
let interval = 0
let highScore = 0
let level = 1
const timeInterval = 1000
const starterSquare = width * 3.5 - 1
let gameOver = false

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


// ! JS CClasses --> these will group four functions to move tetromino pieces together
// One for each available tetromino
//Declare type & starters array as global variables to allow them to be reached by multiple functions
// Adds relevant classes to four cells in previewGrid: .piece .preview .{color}
// Another set of complementary classes to create in the holding bay?
let type
let Starters = []
const shapesArray = ['Square','L','ReverseL','Z','ReverseZ','T','Straight']

function createRandomPiece(){
  const shape = shapesArray[Math.floor(Math.random() * shapesArray.length)]
  console.log('shape: ', shape)
  const fnToRun = `setPiece${shape}`
  eval(fnToRun + '(dropCells)')
  previewCells.forEach(function(cell){
  cell.classList.remove('piece','typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL')
})
  eval(fnToRun + '(previewCells)')
} 
//Square (F)
function setPieceSquare(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare + 1), (starterSquare - width), (starterSquare - width + 1)] : Starters = [9, 10, 13, 14]
  type = 'typeSquare'
  createPiece(cells)
}

//L (G)
function setPieceL(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare + 1), (starterSquare - width), (starterSquare - 2 * width)] : Starters = [5, 9, 13, 14]
  type = 'typeL'
  createPiece(cells)
}
//ReverseL (H)
function setPieceReverseL(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare + 1), (starterSquare - width + 1), (starterSquare - 2 * width + 1)] : Starters = [6, 10, 13, 14]
  type = 'typeReverseL'
  createPiece(cells)
}
//Z (J)
function setPieceZ(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare + 1), (starterSquare - width), (starterSquare - width - 1)] : Starters = [8, 9, 13, 14]
  type = 'typeZ'
  createPiece(cells)
}
//ReverseZ (K)
function setPieceReverseZ(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare - 1), (starterSquare - width), (starterSquare - width + 1)] : Starters = [9, 10, 12, 13]
  type = 'typeReverseZ'
  createPiece(cells)
}
//T (L)
function setPieceT(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare - width + 1), (starterSquare - width), (starterSquare - 2 * width)] : Starters = [5, 9, 10, 13]
  type = 'typeT'
  createPiece(cells)
}
//Straight (;)
function setPieceStraight(cells) {
  cells === dropCells ? Starters = [starterSquare, (starterSquare - width), (starterSquare - 2 * width), (starterSquare - 3 * width)] : Starters = [1, 5, 9, 13]
  type = 'typeStraight'
  createPiece(cells)
}

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

// function createPreviewPiece(cells){
//   Starters.forEach(function(StarterIdx){
//     cells[StarterIdx].classList.add('piece','preview',`${type}`)
//   })
// }

// ! Executions

// * Keyboard triggered functions
// Keyup for actions that can only be completed once per key click
function keyupFunctions(evt){
  console.log('Keyup function triggered: ',evt)
  const key = evt.code
  if (key === 'Enter'){
    startGame()
  } else if (key === 'ArrowUp'){
    rotateFn()
    // Add in some tester keyboard actions for testing functions by pressing f
  } else if (key === 'KeyF'){
    // Put function to test in here
    setPieceSquare(dropCells)
  } else if (key === 'KeyZ'){
    // Put function to test in here
    autoMoveDownFn()
  } else if (key === 'KeyX'){
    // Put function to test in here
    activateHoldingFn()
  } else if (key === 'KeyG'){
    // Put function to test in here
    setPieceL(dropCells)
  } else if (key === 'KeyH'){
    // Put function to test in here
    setPieceReverseL(dropCells)
  } else if (key === 'KeyJ'){
    // Put function to test in here
    setPieceZ(dropCells)
  } else if (key === 'KeyK'){
    // Put function to test in here
    setPieceReverseZ(dropCells)
  } else if (key === 'KeyL'){
    // Put function to test in here
    setPieceT(dropCells)
  } else if (key === 'Semicolon'){
    // Put function to test in here
    setPieceStraight(dropCells)
  } else if (key === 'KeyD'){
    // Put function to test in here
    createRandomPiece()
  } else if (key === 'KeyS'){
    // Put function to test in here
    completeLineFn()
  } else if (key === 'ArrowLeft'){
    arrowLeftFn()
  } else if (key === 'ArrowRight'){
    arrowRightFn()
  }
}

// Keydown for actions that can be repeated/continued by holding the key down: down, left, right
function keydownFunctions(evt){
  console.log('Keydown function triggered: ', evt)
  const key = evt.code
  if (key === 'ArrowDown'){
    arrowDownFn()
  // } else if (key === 'ArrowLeft'){
  //   arrowLeftFn()
  // } else if (key === 'ArrowRight'){
  //   arrowRightFn()
  }
}

//! Start game
// Generates preview and main grids by executing these functions
function startGame () {
  hideWelcome()
  dropGridEl.innerHTML = ''
  createMainGrid()
  startVariables()
  console.log('GAME STARTED')
  createRandomPiece()
  activateHoldingFn()
  // autoMoveDownFn()
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
  console.log('MOVE DOWN FUNCTION EXECUTED')
  score += 1
  scoreEl.innerText = score
  let pieceAtBottom = false
  activeTetNL = document.querySelectorAll('.moving')
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
  if (pieceAtBottom === false) {
    let type = 'typeStraight'
    let axisIndex
    activeTetNL = document.querySelectorAll('.moving') // Not sure this line is doing anything
    activeTetNL.forEach(function(cell){
      cell.classList.remove('moving','piece')
      // type = cell.classList[cell.classList.length - 1]
      // Extract type of current cell and store in type variable
      // console.log("Cell class list: ", cell.classList)
      cellClassArray = Array.from(cell.classList)
      const cellClassArrayFiltered = cellClassArray.filter(function(className) {
        return className.includes('type')
      })
      type = cellClassArrayFiltered.toString()
      // console.log(cellClassArrayFiltered)
      // console.log(type)
      // If classlist contains axis, saves this index - 1 as a variable
      if (cell.classList.contains('axis')){
        console.log('FOUND AN AXIS PIECE AT')
        axisIndex = (parseInt(cell.id) + width)
        console.log(axisIndex)
      }
      cell.classList.remove('typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL','axis')
    })
    activeTetNL.forEach(function(cell){
      const newCellId = parseInt(cell.id) + width
      dropCells[newCellId]?.classList.add('piece','moving',`${type}`)
    // dropCells[cell.id + width].classList.add('active','piece','typeSquare')
    })
    // console.log(axisIndex)
    // console.log(dropCells[axisIndex])
    dropCells[axisIndex].classList.add('axis')
  } else {
    activeTetNL = document.querySelectorAll('.moving') // Not sure this line is doing anything
    activeTetNL.forEach(function(cell){
      cell.classList.remove('moving')
      cell.classList.add('landed')
    })
    activateHoldingFn()
  }
  completeLineCheckFn()
  gameOverCheckFn()
  holdingBayEmptyFn()
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
    console.log('AUTO MOVE DOWN FUNCTION EXECUTED')
    moveDownFn()
    if (gameOver === true){
      clearInterval(interval)
    }
  }, timeInterval)
}

//* User interactions - translate
// moveLeft: Triggered by eventlisteners; checks that positionPiecez-c + 1 % width !== 0 → increases positionPiecez-c by one
// moveRight: checks that positionPiece1-4 % width !== 0 → increases positionPiecec-z- by one
// moveDown: Each time clicked, increase the currentPositionPiecez-c by width indices for movingPiece class
// hardDrop: TBC

// Before working on rotate, allow arrow up to move the piece up
function arrowUpFn(){
  console.log('ARROW LEFT FUNCTION EXECUTED')
  activeTetNL = document.querySelectorAll('.moving')
  activeTetNL.forEach(function(cell){
    cell.classList.remove('moving','piece')
  })
  activeTetNL.forEach(function(cell){
    const newCellId = parseInt(cell.id) - width
    dropCells[newCellId].classList.add('piece','moving',`${type}`)
  })
}

function arrowDownFn(){
  console.log('ARROW DOWN FUNCTION EXECUTED')
  moveDownFn()
}

//* For left and right, need to add in if filters that check if there are landed pieces next to the active piece
function arrowLeftFn(){
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
        console.log('FOUND AN AXIS PIECE at id:')
        axisIndex = parseInt(cell.id) - 1
      }
      cell.classList.remove('typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL','axis')
    })
    activeTetNL.forEach(function(cell){
      const newCellId = parseInt(cell.id) - 1
      dropCells[newCellId].classList.add('piece','moving',`${type}`)
    })
    console.log('Axis index: ', axisIndex)
  }
  dropCells[axisIndex].classList.add('axis')
}

function arrowRightFn(){
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
  dropCells[axisIndex].classList.add('axis')
}

//* User interactions - rotate
// Triggered by up key event
// Needs to check a) which piece b) how much space the piece has
// Accordingly, will do some fun maths manipulations to each of the 4 piece's currentPosition index. Yay.
// Array that stores the possible differences between a piece's index and its tetramino's axis piece's index
const rotationOriginArray = [-3,(-width-2),-2,(-width-1),-1,(width-1),(2*width-1),(-3*width),(-2*width),(-width),0,(width),(2*width),(3*width),(-2*width+1),(-width+1),1,(width+1),2,width+2,3]
console.log('Rotation origin array: ',rotationOriginArray)
// Based on the rotationOriging, what transformation needs to happen to the current piece's index when rotating?
const rotationMoveArray = [(-3*width-3),(-width+3),((-2*width)+2),2,(-width+1),(-2*width),(-3*width-1),(3*width+3),((2*width)+2),(width+1),0,(-width-1),((-2*width)-2),(-3*width-3),(3*width+1),(2*width),(width-1),-2,((2*width)-2),(-width-3),(3*width-3)]
console.log('Rotation move array: ',rotationMoveArray)

function rotateFn(){
  console.log('ROTATE FUNCTION EXECUTING')
  // Fetch activeTetNL again
  //Log type of activeTetNL
// Find index of axis cell
activeTetNL = document.querySelectorAll('.moving')
// console.log(activeTetNL)
const axisCell = document.querySelector('.moving.axis')
console.log(axisCell)
const axisIdx = parseInt(axisCell.id )
console.log('Axis Index: ', axisIdx)
// Iterate over each cell within
// For each cell within, find cellIdx - aIdx & use the rotation arrays to determine the change in index required
activeTetNL.forEach(function(cell){
  let idxDif = parseInt(cell.id) - axisIdx
  console.log('Index dif: ', idxDif)
  // console.log(typeof(idxDif))
  const isEqual = (number) => number === idxDif
  const rotationOriginArrayIdx = rotationOriginArray.findIndex(isEqual)
  console.log('Rotation origin array index: ',rotationOriginArrayIdx)
  const rotationMoveReqd = rotationMoveArray[rotationOriginArrayIdx]
  console.log('Rotation move required: ', rotationMoveReqd)
  // Find type of current cell //! Here is where I'm currently working
  cell.classList.remove('moving','piece')
      cellClassArray = Array.from(cell.classList)
      const cellClassArrayFiltered = cellClassArray.filter(function(className) {
        return className.includes('type')
      })
      type = cellClassArrayFiltered.toString()
  // Remove moving classes from old cell
  cell.classList.remove('moving','piece','typeStraight','typeZ','typeReverseZ','typeT','typeSquare','typeL','typeReverseL')
  const newCellId = parseInt(cell.id) + rotationMoveReqd
  dropCells[newCellId].classList.add('piece','moving',`${type}`)
})
}

// * Game over functions [2]
//When a piece is switched to 'landed' but is within the first 4 * width indices still, this will trigger a game over function that stops gameplay
//Set new highscore if score > highscore; updates highScore span
//Clears all intervals
// Removes the hidden attribute from start button
function gameOverCheckFn(){
  // console.log('GAME OVER CHECK FUNCTION')
  gameOverNL = document.querySelector('.holdingGrid.landed')
  // console.log('GAME OVER NODE LIST: ', gameOverNL)
  // console.log('Boolean of gameoverNL: ', !gameOverNL)
  if (gameOverNL) {
    gameOverFn()
  }
}

function gameOverFn() {
  if (score > highScore){
    highScore = score
  }
  console.log('GAME OVER')
  dropGridEl.innerHTML = '<h1 class = "welcome">GAME OVER<h1><button class="welcome start">START</button>'
  gameOver = true
  clearInterval(interval)
  startButton = document.querySelector('.start')
  console.log('Start Button element: ', startButton)
  startButton.addEventListener('click',startGame)
  dropCells = []
  dropGridEl = document.querySelector('.dropGrid') // New Code
  welcomeNL.forEach(function(element){
    element.setAttribute('hidden', false)
  })
}

// * Complete line functions [3]
// ! This needs fixing; currently, keeps triggering for a row even once it's been removed
function completeLineCheckFn() {
  // Iterate over rows; within this, iterate over cells
  for (let row = 4; row < (2 * width + 4); row++){
    // console.log(`Iterating over row ${row}`)
    let landedCells = 0
    // This runs width times for each row
    for (let cell = row * width; cell < (row + 1) * width; cell++){
      // console.log('Current value & typeof cell: ', cell, typeof(cell))
      // console.log('Current dropCells cell being iterated over: ', dropCells[cell])
      // Can replace ternary below with a &&
      dropCells[cell].classList?.contains('landed') ? landedCells += 1 : landedCells
      // console.log('Landed cells count: ', landedCells)
    }
    //! Change this below to completed = 3 while testing
    if (landedCells === width){
    // if (landedCells >= 3){
      // console.log('Complete line function about to be executed')
      // console.log('Landed cells total/row: ',landedCells,' row: ',row)
      completeLineFn(row)
      landedCells = 0
      // console.log('Landed cells after reset: ',landedCells)
    }
  }
}

// * Remove complete line and add empty row to top
// Remove current line
// Move all landedPieces with lower indices values along by width number of spaces (= down one row)
// Increase score by 1 & update score span
// If score % 10 = 0, increase level by 1, update level span, & decrease timeInterval by 10%?
function completeLineFn(row){
  console.log('Complete line function running for row: ', row)
  score += width
  scoreEl.innerText = score
  // Remove completed row
  for (let cell = row * width; cell < (row + 1) * width; cell++){
    dropCells[cell].className = ''
    dropCells[cell].remove()
  }
  // const landedCellsRemaining = dropCells.reduce((acc, cell) => cell.classList.contains('landed') ? acc + 1 : acc, 0)
  // console.log('Landed cells remaining: ', landedCellsRemaining)
  // Shift cells above down a row --> Starting from cell 4*width & ending at row just deleted, increase the ID and contents of each cell by width)
  for (let cellToShift = 4 * width; cellToShift < row * width; cellToShift++ ){
    const idToShift = parseInt(dropCells[cellToShift].id)
    dropCells[cellToShift].id = idToShift + width
    dropCells[cellToShift].innerText = (cellToShift + width)
  }
  dropCells = document.querySelectorAll('.dropCell')
  //Create and add width cells before index 5*width
  addLineFn()
}
// ! Find index of cell in dropCells first rather than using id
// ! Go from bottom of shifting section and move classes of row above down to that cell

function addLineFn(){
  for (let cellToAdd = 4 * width; cellToAdd < 5 * width; cellToAdd ++) {
    const newCell = document.createElement('div')
    newCell.innerText = cellToAdd
    newCell.id = cellToAdd
    // newCell.classList.add('newCell')
    newCell.style.height = `${100 / (2 * width + 4)}%`
    newCell.classList.add('dropCell')
    // console.log('New cell: ', newCell)
    // console.log('Drop cells: ', dropCells)
    const currentCell = dropCells[4 * width]
    // console.log('Current cell to insert before: ', currentCell)
    dropGridEl.insertBefore(newCell, currentCell)
  }
  dropCells = document.querySelectorAll('.dropCell')
  console.log(dropCells)
}


// * Sidebar updates N/A
// These actions will be triggered within other functions

// ! Events
// Clicking start button; this should also re-set the game
startButton.addEventListener('click',startGame)
//Arrow down, left, right as keydown listeners that trigger appropriate moveX function above
//Arrow up for rotate function
// Spacebar (for hard drop)
// * Add in some test keys to test functions as they're being coded
window.addEventListener('keyup', keyupFunctions)
window.addEventListener('keydown', keydownFunctions)


// ! Page Load
// Wait until start button is pressed to generate main grid
// This could trigger the preview grid
window.addEventListener('DOMContentLoaded', createPreviewGrid)