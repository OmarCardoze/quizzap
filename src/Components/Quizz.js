import React, { useState, useContext } from 'react'
import { Questions } from '../Components/Helpers/Questions'
import { QuizContext } from './Helpers/Context'

function Quizz() {

    const { gameScore, setGameScore, setGameState } = useContext(QuizContext)

    const [currQuestion, setcurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currQuestion].asnwer === optionChosen) {
            setGameScore(gameScore + 1)
        } else {
            console.log("is not equal!")
        }
        console.log(gameScore);
        setcurrQuestion(currQuestion + 1)
    }

    const finishQuiz = () => {
        if (Questions[currQuestion].asnwer === optionChosen) {
            setGameScore(gameScore + 1)
        }
        setGameState("endScreen")
    }

    return (
        <>
            <div>
                <h1>{Questions[currQuestion].prompt}</h1>
                <button onClick={() => setOptionChosen("optionA")}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("optionB")}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("optionC")}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("optionD")}>{Questions[currQuestion].optionD}</button>
            </div>
            <div>
                {currQuestion === Questions.length - 1 ? (
                    <button onClick={finishQuiz}>
                        Finish Quiz
                    </button>
                ) : (
                    <button onClick={nextQuestion}>
                        Next Question
                    </button>
                )}
            </div>
        </>
    )
}

export default Quizz
