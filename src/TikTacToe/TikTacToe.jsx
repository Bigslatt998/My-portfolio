import React, { useState, useEffect } from 'react';
import './TikTacToe.css';
const TikTacToe = () => {
  const [cards, setCards] = useState([]); // Array of cards
  const [flipped, setFlipped] = useState([]); // Indices of flipped cards
  const [solved, setSolved] = useState([]); // Indices of solved cards
  const [moves, setMoves] = useState(20); // Number of moves
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false); // Timer state
  const [gameover, setGameover] = useState(false)
  // Card data (pairs of images or emojis)
  const cardData = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍍', '🥝'];

  // Initialize the game
  useEffect(() => {
    const shuffledCards = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value, flipped: false }));
    setCards(shuffledCards);
    setIsRunning(true); // Start the timer
  }, []);
//   const shuffledCards = [...cardData, ...cardData]
// console.log(shuffledCards)

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Handle card click
  const handleCardClick = (index) => {
    if (flipped.length === 2 || solved.includes(index)) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex].value === cards[secondIndex].value) {
        setSolved([...solved, firstIndex, secondIndex]);
      }
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card, i) =>
            newFlipped.includes(i) && !solved.includes(i)
              ? { ...card, flipped: false }
              : card
          )
        );
        setFlipped([]);
      }, 1000);
      setMoves((prevMoves) => prevMoves - 1);
    }
  };

 

  // Reset the game
  const resetGame = () => {
    const shuffledCards = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value, flipped: false }));
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setMoves(20);
    setTime(0);
    setIsRunning(true);
  };
  useEffect(()=> {
    if(moves === 0){
      alert('Game over out of moves')
      return resetGame()
    }
  },[moves])
  // Save score to localStorage
  const saveScore = () => {
    const score = { moves, time };
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push(score);
    localStorage.setItem('scores', JSON.stringify(scores));
    alert('Score saved!');
    console.log(scores)
  };

  // Check if all cards are solved
  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setIsRunning(false); // Stop the timer
      alert(`You won in ${20 -moves} moves and ${time} seconds!`);
    }
  }, [solved]);

  return (
     <div className="FlipContainer">
      <h1>Memory Card Game</h1>
      <div className="stats">
        <p>Moves: {moves}</p>
        <p>Time: {String(time).padStart(2, '0')}</p>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.flipped || solved.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {card.flipped || solved.includes(index) ? card.value : 'Flip'}
          </div>
        ))}
      </div>
      <div className="Button">
      <button onClick={resetGame}>Reset Game</button>
      <button onClick={saveScore}>Save Score</button>
      </div>
    </div>
  )
}

export default TikTacToe