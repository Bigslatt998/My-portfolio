import React, { useState, useEffect, useRef } from 'react'
import Styles from './SnakeGame.module.css'

const SnakeGame = () => {
  const cardData = ['🥜', '🥚', '🌭', '🍔', '🧀', '🍓', '🍿', '🥝'];

    const GRID_SIZE = 20; // Size of each grid cell
    const BOARD_SIZE = 380; // Size of the game board
    const INITIAL_SNAKE = [{ x: 5, 
                              y: 5 }]; // Initial snake position
    const INITIAL_FOOD = { x: 10, 
                          y: 10, 
                          emoji: cardData[Math.floor(Math.random() * cardData.length)] 
                          }; // Initial food position
    const INITIAL_SPEED = 200; // Initial speed (milliseconds per move)


    const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const boardRef = useRef(null);

  const handdleDirectionChange = (newDirection) => {
    if(
      (newDirection.x === -1 && direction.x === 1)||
      (newDirection.x === 1 && direction.x === -1)||
      (newDirection.y === -1 && direction.y === 1)||
      (newDirection.y === 1 && direction.y === -1)
    ){
      return
    }
    setDirection(newDirection)
  }
  const HandleLeft =()=>{
    handdleDirectionChange({x: -1, y: 0})
  }

  const HandleUp =()=>{
    handdleDirectionChange({x: 0, y: -1})
    // alert('hi')
  }

  const HandleDown =()=>{
    handdleDirectionChange({x: 0, y: 1})
  }

  const HandleRight =()=>{
    handdleDirectionChange({x: 1, y: 0})
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) handdleDirectionChange({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) handdleDirectionChange({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) handdleDirectionChange({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) handdleDirectionChange({ x: 1, y: 0 });
          break;
          case 'Enter':
            resetGame()
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);


  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

      // Check for collisions
      if (
        head.x < 0 ||
        head.x >= BOARD_SIZE / GRID_SIZE ||
        head.y < 0 ||
        head.y >= BOARD_SIZE / GRID_SIZE ||
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);

      // if snake eats food
      if (head.x === food.x && head.y === food.y) {
        setScore((prevScore) => prevScore + 2);
        setFood({
          x: Math.floor(Math.random() * (BOARD_SIZE / GRID_SIZE)),
          y: Math.floor(Math.random() * (BOARD_SIZE / GRID_SIZE)),
          emoji: cardData[Math.floor(Math.random() * cardData.length)] 

        });
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(moveSnake, speed);
    return () => clearInterval(gameInterval);
  }, [snake, direction, food, gameOver, speed]);

  // Increase speed by reducing the interval
  useEffect(() => {
    if (score === 10) {
      setSpeed(100); 
    }
    else if (score === 20) {
      setSpeed(80);
    }
    else  if (score === 30) {
      setSpeed(70); 
    }
    else  if (score === 50) {
      setSpeed(50);
    }
  }, [score]);

  // Reset the game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection({ x: 1, y: 0 });
    setScore(0);
    setGameOver(false);
    setSpeed(INITIAL_SPEED);
  };
  return (
    <div className={Styles.App}>
      <div className="dddd">
      <h1>Snake Game</h1>
      <div className={Styles.score}>Score: {score}</div>
      </div>
      {gameOver && (
        <div className={Styles.gameover}>
          <h2>Game Over!</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
      <div
        ref={boardRef}
        className={Styles.board}
        style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className={Styles.snakesegment}
            style={{
              left: segment.x * GRID_SIZE,
              top: segment.y * GRID_SIZE,
              width: GRID_SIZE,
              height: GRID_SIZE,
            }}
          />
        ))}
        <div
          className={Styles.food}
          style={{
            left: food.x * GRID_SIZE,
            top: food.y * GRID_SIZE,
            width: GRID_SIZE,
            height: GRID_SIZE,
          }}
        >{food.emoji}</div>
      </div>
      

      <div className={Styles.UPxDown}>
      <div className={Styles.UpBTN}>
        <button onClick={HandleUp}>UP</button>
      </div>

      <div className={Styles.DownBTN}>
        <button onClick={HandleDown}>Down</button>
      </div>


      
      <div className={Styles.LeftBTN}>
        <button onClick={HandleLeft}>Left</button>
      </div>

      <div className={Styles.RightBTN}>
        <button onClick={HandleRight}>Right</button>
      </div>
      </div>
    </div>
  )
}

export default SnakeGame