import { useState, useEffect, useRef } from 'react';
import './Main.css';
import Die from '../die/Die';
import Confetti from 'react-confetti'

const Main = () => {
  // generate 10 random dice
  const generateAllNewDice = () => {
    console.log('rendered')
    return new Array(10)
                .fill()
                .map(() => ({ 
                  value: 5, //Math.ceil(Math.random() * 6), 
                  isHeld: false,
                  id: crypto.randomUUID()
                }))
  
  };

  const [dice, setDice] = useState(() => generateAllNewDice());
  const focusableButton = useRef(null);
  
  const gameWon = dice.every(die => die.isHeld) && 
                  dice.every(die => die.value === dice[0].value);

  // focus on the new gama button
  useEffect(() => {
    if (gameWon) {
      focusableButton.current.focus()
    }
  }, [gameWon]);

  const hold = (id) => {
    setDice(prevDice => (
      prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    ))
  }

  const diceElements = dice.map(dieObj => 
    <Die key={dieObj.id} 
         value={dieObj.value}
         isHeld={dieObj.isHeld}
         id={dieObj.id}
         hold={hold}
      />)

  // to reroll dice
  const rollDice = () => {
    // setDice(generateAllNewDice());
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die 
                        : {...die, value: Math.ceil(Math.random() * 6)}
    }))
  }

  // new game
  const getNewGame = () => {
    setDice(generateAllNewDice());
  }

  return (
    <main className='game-container'>
        {gameWon ? <Confetti /> : null}
        <div aria-live='polite'  className='sr-only'>{gameWon ? 'Congratulation! You won! Press "New Game" to start again.' :null}</div>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-container">
            {diceElements}
        </div>
        <button ref={focusableButton} className='roll-button' onClick={gameWon ? getNewGame : rollDice}>{gameWon ? 'New Game' : 'Roll'}</button>
    </main>
  )
}

export default Main
