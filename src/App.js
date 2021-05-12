import React, { useState } from 'react'
import EndScreen from './Components/EndScreen';
import MainMenu from './Components/MainMenu';
import Quizz from './Components/Quizz';

import { QuizContext } from './Components/Helpers/Context'

function App() {

  const [gameState, setGameState] = useState("menu")
  const [gameScore, setGameScore] = useState(0)

  return (
    <div className="AppContainer">
      <QuizContext.Provider value={{ gameState, setGameState, gameScore, setGameScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quizz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
