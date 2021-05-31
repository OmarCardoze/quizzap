import React, { useEffect, useState, useContext } from 'react'
import { QuizContext } from './Helpers/Context'
import useSound from 'use-sound'
import answerSoundCorrect from '../sounds/correctAnswer.mp3'
import answerSoundIncorrect from '../sounds/incorrectAnswer.mp3'
import styled from 'styled-components'
import axios from 'axios'

const QuizContainer = styled.div`
    background-color: #000;
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    color: #fff;
`
const InfoBar = styled.div`
    background-color: rgb(185, 23, 226);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;   
    align-items: center;
    
    p {
        background-color: #fff;
        color: #000;
        border-radius: 50px;
        padding: 10px;
    }
`
const QuestionPrompt = styled.div`
    color: aqua;
    font-size: clamp(2.5rem, 6vw, 4rem); 
`
const Button = styled.button`
    width: 80vw;
    height: 10vh;
    border-color: aliceblue;
    background: ${props => props.backgroundColor || "blue"};
    color: #fff;
    border-width: 0;
    margin-bottom: 4px;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        background-color: rgba(0.0.0.0.7)   
    }
`
const Progress = styled.progress`
    height: 30px;
    color: #000;
`
//``
function Quizz() {

    const { gameScore, setGameScore, setGameState } = useContext(QuizContext)

    const [Questions, setQuestions] = useState([])
    const [currQuestion, setcurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [loading, setLoading] = useState(false)

    //sound hooks
    const [playCorrectAswer] = useSound(answerSoundCorrect);
    const [playInCorrectAswer] = useSound(answerSoundIncorrect);

    useEffect(() => {
        async function loadQuestions() {
            const result = await axios(
                'http://localhost:3001/api/questions',
            );

            setQuestions(result.data);
            setLoading(true)
        }

        loadQuestions()
        setLoading(false)
        console.log('cargando')
    }, []);

    loading && console.log('cargado el componente quiz')

    const nextQuestion = () => {
        if (Questions[currQuestion].asnwer === optionChosen) {
            setGameScore(gameScore + 1)
            playCorrectAswer()
        } else {
            playInCorrectAswer()
        }
        setcurrQuestion(currQuestion => currQuestion + 1)
    }

    const finishQuiz = () => {
        if (Questions[currQuestion].asnwer === optionChosen) {
            setGameScore(gameScore + 1)
            playCorrectAswer()
        } else {
            playInCorrectAswer()
        }
        setGameState("endScreen")
    }


    return (
        <QuizContainer>
            <InfoBar>
                <Progress value={currQuestion} max={Questions.length}>33%</Progress>
                <p>Score: {gameScore * 100}</p>
            </InfoBar>

            {
                loading ?
                    <div className="optionContainer">
                        <QuestionPrompt>{Questions[currQuestion].prompt}</QuestionPrompt>
                        <Button
                            backgroundColor={"#542e71"}
                            onClick={() => setOptionChosen("optionA")}>{Questions[currQuestion].optionA}
                        </Button>
                        <Button
                            backgroundColor={"#fb3640"}
                            onClick={() => setOptionChosen("optionB")}>{Questions[currQuestion].optionB}
                        </Button>
                        <Button
                            backgroundColor={"#51c4d3"}
                            onClick={() => setOptionChosen("optionC")}>{Questions[currQuestion].optionC}
                        </Button>
                        <Button
                            backgroundColor={"#126e82"}
                            onClick={() => setOptionChosen("optionD")}>{Questions[currQuestion].optionD}
                        </Button>
                        <div>
                            {currQuestion === Questions.length - 1 ? (
                                <Button backgroundColor={"red"} onClick={finishQuiz}>
                                    Finish Quiz
                                </Button>
                            ) : (
                                <Button backgroundColor={"green"} onClick={nextQuestion}>
                                    Next Question
                                </Button>
                            )}
                        </div>
                    </div>
                    : <p>Cargando...</p>
            }

        </QuizContainer>
    )
}

export default Quizz
