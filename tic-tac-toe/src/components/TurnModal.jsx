/* eslint-disable react/prop-types */
import { Square } from './Square'

export function TurnModal({currentTurn, turn}) {
    return (
        <section className = 'turn'>
        <Square isSelected={currentTurn === turn.X}>{turn.X}</Square>
        <Square isSelected={currentTurn === turn.O}>{turn.O}</Square>
        </section>
    )
}