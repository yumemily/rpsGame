import React, { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard.js'
import ChoiceButtons from "./components/ChoiceButtons";
import { CHOICES, getRoundOutcome } from "./utils";//import from index.js

function App() { // pass 3 new properties: title, winner and imgUrl
  
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const [prompt, setGamePrompt] = useState("Start");

  const [previousWinner, setPreviousWinner] = useState(null);

  const [gameHistory, setGameHistory] = useState([]);

  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    console.log(result) // Victory! or Defeat! 
    console.log(compChoice) // rock, paper, or scissors

    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    console.log(newUserChoice); //{name: url:''}
    console.log(newComputerChoice); // return the computer choice value {name: url:''}
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    setGamePrompt(result);
    gameHistory.push(result);

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }

  };


  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <div>
              <ChoiceCard
                title="Computer"
                imgURL={computerChoice.url}
                previousWinner={previousWinner}
              />
            </div>
            <ChoiceButtons onPlayerChoose={onPlayerChoose} />
            <h1>{prompt}</h1>
            <ChoiceCard
              title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice.url}
            />
          </div>
          <div className="col-md-4 themed-grid-col">
            <h3>History</h3>
            <ul>
              {gameHistory.map(result => {
                return <li>{result}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
