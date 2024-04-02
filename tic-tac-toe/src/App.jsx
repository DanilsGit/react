/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { turn } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { TurnModal } from './components/TurnModal'
import { Board } from './components/Board'
import { checkWinner, checkEndGame } from './logicFunctions'
import confetti from 'canvas-confetti'
import { saveGameToStorage, resetGameStorage } from './logic/storage'


function App() {

  //Los useState nunca se deben llamar dentro de un bucle o condicional

  const [board, setBoard] = useState(() =>{
    //la inicialización del estado ocurre solo una vez
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });

  const [currentTurn, setCurrentTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turn.X
  })


  const [winner, setWinner] = useState(null)
  //null -> no winner yet. false -> tie. X or O -> winner

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentTurn(turn.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    //Nunca mutar las props ni el estado directamente.
    //Aprender a usar el spread y rest operator para crear una copia de los datos.
    const newBoard = [...board]
    if (newBoard[index] || winner) return

    newBoard[index] = currentTurn
    setBoard(newBoard)

    const newTurn = currentTurn === turn.X ? turn.O : turn.X
    setCurrentTurn(newTurn)
    //guardar partida
    saveGameToStorage({board: newBoard, turn: newTurn})
    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
        //esto es asíncrono
        //por lo que no podemos cambiar el estado y luego revisar el estado en la misma funcion
        setWinner(newWinner)
        confetti()
    }
    else if (checkEndGame(newBoard)) { //Si no hay ganador y no hay espacios vacíos
        setWinner(false) //empate
    }

}


  return (
    <main className='board'>
      <h1>Tic tac toe</h1>

      <button onClick={resetGame}>Reset del juego</button>

      <Board board={board} updateBoard={updateBoard} />
      <TurnModal currentTurn={currentTurn} turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
