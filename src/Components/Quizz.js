import React, { useState, useContext } from 'react'
import { Questions } from '../Components/Helpers/Questions'
import { QuizContext } from './Helpers/Context'
import useSound from 'use-sound';
import answerSoundCorrect from '../sounds/correctAnswer.mp3'
import answerSoundIncorrect from '../sounds/incorrectAnswer.mp3'

import '../App.css'

function Quizz() {

    const { gameScore, setGameScore, setGameState } = useContext(QuizContext)

    const [currQuestion, setcurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    //sound hooks
    const [playCorrectAswer] = useSound(answerSoundCorrect);
    const [playInCorrectAswer] = useSound(answerSoundIncorrect);


    function getRandomInt() {

        const buttonColor = ["greenSoft", "lemonGrenn", "salmon", "rosa"]

        const randomNumber = Math.floor(Math.random() * buttonColor.length);
        const colorButton = buttonColor[randomNumber]
        return colorButton
    }

    const nextQuestion = () => {
        if (Questions[currQuestion].asnwer === optionChosen) {
            setGameScore(gameScore + 1)
            playCorrectAswer()
        } else {
            playInCorrectAswer()
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
        <div className="quizContainer t-White">
            <div className="infoBar">
                <p className="positionQuestion centerScreen">{currQuestion} / {Questions.length}</p>
                <p>Score: {gameScore * 100}</p>
            </div>
            <div className="optionContainer">
                <h1 className="questionPrompt">{Questions[currQuestion].prompt}</h1>
                <button
                    className={`buttonOption ${getRandomInt()}`}
                    onClick={() => setOptionChosen("optionA")}>{Questions[currQuestion].optionA}
                </button>
                <button
                    className={`buttonOption ${getRandomInt()}`}
                    onClick={() => setOptionChosen("optionB")}>{Questions[currQuestion].optionB}
                </button>
                <button
                    className={`buttonOption ${getRandomInt()}`}
                    onClick={() => setOptionChosen("optionC")}>{Questions[currQuestion].optionC}
                </button>
                <button
                    className={`buttonOption ${getRandomInt()}`}
                    onClick={() => setOptionChosen("optionD")}>{Questions[currQuestion].optionD}
                </button>
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
            </div>
        </div>
    )
}

export default Quizz
