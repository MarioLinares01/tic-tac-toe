// Create GaemBoard obj
function GameBoard () {
    const gameboard = [
        [],
        [],
        []
    ]

    // Private functions that return private variables
    const returnGameboard = () => gameboard
    const updateGameBoard = (pos) => {
        if (pos < 3) { gameboard[0][pos] = pos}
        else if (pos >= 3 && pos <= 5) { gameboard[1][pos-3] = pos}
        else { gameboard[2][pos-6] = pos}
    }

    return {returnGameboard, updateGameBoard}
}

function Game () {
    const wining_combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6] ]
    const grids = document.querySelectorAll('.grid')
    const status = document.querySelector('.status')
    const gameboard = GameBoard()
    
    
    grids.forEach(grid => {
        grid.addEventListener('click', () => {
            // Check if it's nonempty 
            gameboard.updateGameBoard(parseInt(grid.id))
        })
    })
}

Game()