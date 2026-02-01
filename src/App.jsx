import { useState } from 'react'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScore = (isGameOver) => {
    if (isGameOver) {
      if (score > bestScore) setBestScore(score);
      setScore(0);
    } else {
      setScore(prev => prev + 1);
    }
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <CardContainer handleScore={handleScore} />
    </div>
  )
}

export default App