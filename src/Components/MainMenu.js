import React, { useContext } from 'react'
import { QuizContext } from './Helpers/Context'
import '../App.css'

export default function MainMenu() {

    const { gameState, setGameState } = useContext(QuizContext)

    const changeScreen = () => {
        setGameState("quiz")
    }

    return (
        <div className="menuContainer">
            <div className="titleContainer centerScreen">
                <h1 className="t-White">Panamaqui</h1>
            </div>

            <div className="startContainer centerScreen t-White">
                <div className="text-info">
                    <h1>Panamaqui</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga illum, quis ab enim vitae reprehenderit doloremque distinctio accusantium quasi labore expedita eaque amet laborum rerum eveniet sit deleniti earum perspiciatis?</p>
                    <button className="menu-button" onClick={changeScreen}>Start quiz</button>
                </div>
            </div>
        </div>

    )
}
