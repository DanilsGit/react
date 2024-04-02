/* eslint-disable react/prop-types */
import {Square} from './Square'; 

export function Board({board, updateBoard }) {
    return (
        <section className='game'>
            {board.map((square, i) => {
                return (
                    <Square
                        key={i}
                        index={i}
                        updateBoard={updateBoard}>
                        {square}
                    </Square>
                )
            })}
        </section>
    )
}