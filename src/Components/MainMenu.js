import React, { useContext } from 'react'
import { QuizContext } from './Helpers/Context'
import styled from 'styled-components'

const Container = styled.div`
    background: #03256c;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    div {
        width: 40vw;
        height: 300px;
        background: #1768ac;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-shadow: 10px 10px 15px -8px rgba(31,146,184,0.75);
    }

    div header {
        width: 100%;
        height: 100px;
        background: url("https://images.pexels.com/photos/1681452/pexels-photo-1681452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
        border-radius: 10px 10px 0 0; 
    }

    button {
        background: #ffc947;
        color: #fff;
        padding: 20px;
        border-style: none;
        cursor: pointer;
        color: #0a1931;

        &:hover {
            background: #fb9300;
            color: #fff;
        }
    }
`

//`` ;
export default function MainMenu() {

    const { setGameState } = useContext(QuizContext)

    const changeScreen = () => {
        setGameState("quiz")
    }

    return (
        <Container>
            <div>
                <header></header>
                <h1>Quizpa</h1>
                <button onClick={changeScreen}>Iniciar</button>
            </div>
        </Container>
    )
}
