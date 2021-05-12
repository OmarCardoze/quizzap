import React, { useContext } from 'react'
import { QuizContext } from './Helpers/Context'
import styled from 'styled-components'

const MenuContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr auto;
`

const TitleContainer = styled.div`
    background-color: white;
    width: 40vw;
    background-image: linear-gradient(90deg,rgba(52, 16, 212, 0.6), rgba(0,0,0,0.6)), url('https://sourceunsplash.com/1600x900/?panamá');
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) { 
        display: none;
}
`
const StartContainer = styled.div`
    width: 60vw;
    height: 100vh;
    text-align: center;
    background-color: rgb(1, 1, 75);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;

    @media (max-width: 768px) { 
        background-color: rgb(10, 28, 110);
        color: rgb(255, 255, 255);
        width: 100%;
}
`

const TextInfo = styled.div`
    width: 60%;

    h1 {
        margin-bottom: 20px;
    }

    p {
        font-size: clamp(1rem, 2.5vw, 1.5rem); 
    }

    button {
        margin-top: 20px;
        padding: 20px;
        background-color: rgb(17, 170, 17);
        color:white;
        font-size: 1.5em;
        appearance: none;
        cursor: pointer;
        border-width: 0;
        border-style: hidden;
        border-image: none;
    }
`
//``
export default function MainMenu() {

    const { setGameState } = useContext(QuizContext)

    const changeScreen = () => {
        setGameState("quiz")
    }

    return (
        <MenuContainer>
            <TitleContainer>
                <h1 className="t-White">Panamaqui</h1>
            </TitleContainer>

            <StartContainer>
                <TextInfo>
                    <h1>Panamaqui</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga illum, quis ab enim vitae reprehenderit doloremque distinctio accusantium quasi labore expedita eaque amet laborum rerum eveniet sit deleniti earum perspiciatis?</p>
                    <button onClick={changeScreen}>Start quiz</button>
                </TextInfo>
            </StartContainer>
        </MenuContainer>
    )
}
