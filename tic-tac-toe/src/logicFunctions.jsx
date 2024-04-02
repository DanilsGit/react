import { winnerCombos } from './constants'

export const checkWinner = (boardToCheck) => {
    //Revisamos todas las combinaciones ganadoras
    for (const combo of winnerCombos) {
        const [a, b, c] = combo
        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    //Si no hay ganador
    return null
}

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
}