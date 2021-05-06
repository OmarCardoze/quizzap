import React, { useContext } from 'react'
import { QuizContext } from './Helpers/Context'

function EndScreen() {

    const { gameScore } = useContext(QuizContext)

    return (
        <div>
            <h1>
                Gracias por jugar quizzap y poner tus conocimientos sobre Panamá a prueba!
            </h1>
            <h2>Genial tu puntuacion es de {gameScore}</h2>
        </div>
    )
}

export default EndScreen
