import React, { useState, useEffect, useCallback } from 'react'
import './Tetris.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Tetris = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [shapePosition, setShapePosition] = useState({ x: 8, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [moveDownInterval, setMoveDownInterval] = useState(1000);

  // Create an empty 20x20 grid
  function createEmptyGrid() {
    return Array.from({ length: 20 }, () => Array(20).fill(0));
  }

  // Tetromino shapes
  const shapes = [
    [[1, 1, 1, 1]], // I
    [[1, 1], [1, 1]], // O
    [[0, 1, 0], [1, 1, 1]], // T
    [[0, 1, 1], [1, 1, 0]], // S
    [[1, 1, 0], [0, 1, 1]], // Z
    [[1, 0, 0], [1, 1, 1]], // J
    [[0, 0, 1], [1, 1, 1]], // L
  ];

  // Randomly select a shape
  const getRandomShape = () => {
    const randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
  };
  const [currentShape, setCurrentShape] = useState(getRandomShape());


  const restartGame = () => {
    setGrid(createEmptyGrid());
    setCurrentShape(getRandomShape())
    setShapePosition({x: 8, y: 0})
    setScore(0)
    setGameOver(false)
  }

  // Check if the shape can move to the new position
  const canMove = (newX, newY, shape) => {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const gridX = newX + col;
          const gridY = newY + row;
          if (
            gridX < 0 ||
            gridX >= 20 ||
            gridY >= 20 ||
            (gridY >= 0 && grid[gridY][gridX])
          ) {
            return false;
          }
        }
      }
    }
    return true;
  };

  // Move the shape down
  const moveDown = () => {
    if (gameOver) return;
    const { x, y } = shapePosition;
    if (canMove(x, y + 1, currentShape)) {
      setShapePosition({ x, y: y + 1 });
    } else {
      placeShape();
    }
  };

  // Move the shape left or right
  const moveSideways = (direction) => {
    if (gameOver) return;
    const { x, y } = shapePosition;
    const newX = x + direction;
    if (canMove(newX, y, currentShape)) {
      setShapePosition({ x: newX, y });
    }
  };

  // Place the shape on the grid
  const placeShape = () => {
    const { x, y } = shapePosition;
    const newGrid = grid.map((row) => [...row]);
    for (let row = 0; row < currentShape.length; row++) {
      for (let col = 0; col < currentShape[row].length; col++) {
        if (currentShape[row][col]) {
          if (y + row < 20 && x + col < 20) {
            newGrid[y + row][x + col] = 1;
          } else {
            setGameOver(true);
            return;
          }
        }
      }
    }
    setGrid(newGrid);
    checkLines(newGrid);
    setCurrentShape(getRandomShape());
    setShapePosition({ x: 8, y: 0 });
    if (!canMove(8, 0, getRandomShape())) {
      setGameOver(true);
    }
  };

  // Check for completed lines and clear them
  const checkLines = (grid) => {
    const newGrid = grid.filter((row) => row.some((cell) => cell === 0));
    const linesCleared = 20 - newGrid.length;
    if (linesCleared > 0) {
      setScore((prevScore) => prevScore + linesCleared * 100);
      setGrid([...Array.from({ length: linesCleared }, () => Array(20).fill(0)), ...newGrid]);
    }
  };

  // Rotate the shape
  const rotateShape = () => {
    if (gameOver) return;
    const rotatedShape = currentShape[0].map((_, i) =>
      currentShape.map((row) => row[i]).reverse()
    );
    if (canMove(shapePosition.x, shapePosition.y, rotatedShape)) {
      setCurrentShape(rotatedShape);
    }
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') moveSideways(-1);
      if (e.key === 'ArrowRight') moveSideways(1);
      if (e.key === 'ArrowDown') moveDown();
      if (e.key === 'Enter') rotateShape();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shapePosition]);

  const HandleDown =()=>{
    moveDown()
  }
  const HandleRight =()=>{
    moveSideways(1)
  }
  const HandleLeft =()=>{
    moveSideways(-1)
  }
  
  // Handle swipe on mobile devices
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let lastTap = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 50) moveSideways(1); // Swipe right
        if (deltaX < -50) moveSideways(-1); // Swipe left
      } else {
        if (deltaY > 50) moveDown(); // Swipe down
      }
    };

    const handleDoubleTap = (e) => {
      const currentTime = new Date().getTime();
      if (currentTime - lastTap < 300) {
        rotateShape();
      }
      lastTap = currentTime;
    };

    const gridElement = document.querySelector('.grid');
    gridElement.addEventListener('touchstart', handleTouchStart);
    gridElement.addEventListener('touchend', handleTouchEnd);
    gridElement.addEventListener('touchend', handleDoubleTap);
    return () => {
      gridElement.removeEventListener('touchstart', handleTouchStart);
      gridElement.removeEventListener('touchend', handleTouchEnd);
      gridElement.removeEventListener('touchend', handleDoubleTap);
    };
  }, [shapePosition]);

  // Game loop
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(moveDown, moveDownInterval);
    return () => clearInterval(interval);
  }, [shapePosition, gameOver, moveDownInterval]);

  // Render the grid with the current shape
  const renderGrid = () => {
    const newGrid = grid.map((row) => [...row]);
    const { x, y } = shapePosition;
    for (let row = 0; row < currentShape.length; row++) {
      for (let col = 0; col < currentShape[row].length; col++) {
        if (currentShape[row][col]) {
          newGrid[y + row][x + col] = 1;
        }
      }
    }
    return newGrid;
  };
   
  return (
    <div className="tetris">
      <h1>Tetris</h1>
      {gameOver && <div className="game-over">Game Over!</div>}

      <div className="grid">
        {renderGrid().map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => (
              <div key={j} className={`cell ${cell ? 'filled' : ''}`} />
            ))}
          </div>
        ))}
      </div>
      <div className="score">Score: {score}</div>
      <div className="Buttons">
      <button onClick={rotateShape}>Rotate</button>
      <button onClick={restartGame}>Restart</button>
      </div>
      <div className="DirectionBTN">
        <button onClick={HandleLeft}>Left</button>
        <button onClick={HandleRight}>Right</button>

        <button onClick={HandleDown}>Down</button>

      </div>
    </div>
  )
}

export default Tetris