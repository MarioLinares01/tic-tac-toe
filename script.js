// Create GaemBoard obj
function GameBoard () {
    let gameboard = [
        [],
        [],
        []
    ]

    // Private functions that return private variables
    const returnGameboard = () => gameboard
    const updateGameBoard = (pos) => {
        if (pos < 3) { 
            gameboard[0][pos] = pos
        } else if (pos >= 3 && pos <= 5) { 
            gameboard[1][pos-3] = pos
        }
        else { 
            gameboard[2][pos-6] = pos
        }
    }
    const reset = () => {
        gameboard = [
            [],
            [],
            []
        ]
    }

    return { returnGameboard, updateGameBoard, reset }
}

// Create Player obj
function Player(name) {
    let selected = []
    const returnName = () => name
    const appendSelected = (selection) => { selected.push(selection) }
    const resetSelected = () => {
        selected = []
    }

    return {selected, appendSelected, returnName, resetSelected}
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
    const reset = document.querySelector('#reset')
    const playerX = Player('X')
    const playerO = Player('O')
    const gameboard = GameBoard()
    let turn = playerX.returnName()
    
    grids.forEach(grid => {
        grid.addEventListener('click', () => {
            if (turn === 'X' && grid.textContent === '') {
                    playerX.appendSelected(parseInt(grid.id))
                    gameboard.updateGameBoard(parseInt(grid.id))
                    grid.textContent = 'X'
                    for (let i = 0; i < wining_combos.length; i++) {
                        if (playerX.selected.includes(wining_combos[i][0]) && playerX.selected.includes(wining_combos[i][1]) && playerX.selected.includes(wining_combos[i][2])) {
                            status.textContent = 'X Wins!'
                            turn = 'NA'
                            return
                        } else {
                            turn = 'O'
                            status.textContent = "O's Turn"
                        }
                    }
            } else if (turn === 'O' && grid.textContent === '') {
                playerO.appendSelected(parseInt(grid.id))
                gameboard.updateGameBoard(parseInt(grid.id))
                grid.textContent = 'O'
                for (let i = 0; i < wining_combos.length; i++) {
                    if (playerO.selected.includes(wining_combos[i][0]) && playerO.selected.includes(wining_combos[i][1]) && playerO.selected.includes(wining_combos[i][2])) {
                        status.textContent = 'O Wins!'
                        turn = 'NA'
                        return
                    } else {
                        turn = 'X'
                        status.textContent = "X's Turn"
                    }
                }
            }
        })
    })

    // Reset Board
    reset.addEventListener('click', () => {
        location.reload()
    })
}

Game()