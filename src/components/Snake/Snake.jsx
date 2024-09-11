// import React, { useState, useEffect } from 'react';
// import './Snake.css';

// export function Snake() {
//   const [player1Score, setPlayer1Score] = useState(0);
//   const [player2Score, setPlayer2Score] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(10); // 10 seconds
//   const [gameOver, setGameOver] = useState(false);

//   const handleKeyPress = (event) => {
//     if (gameOver) return;

//     if (event.key === 's' || event.key === 'S') {
//       setPlayer1Score((prev) => prev + 1);
//     }
//     if (event.key === 'k' || event.key === 'K') {
//       setPlayer2Score((prev) => prev + 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyPress);
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [gameOver]);

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setGameOver(true);
//     }
//   }, [timeLeft]);

//   const resetGame = () => {
//     setPlayer1Score(0);
//     setPlayer2Score(0);
//     setTimeLeft(10);
//     setGameOver(false);
//   };

//   const getWinner = () => {
//     if (player1Score > player2Score) return 'Player 1 Wins!';
//     if (player2Score > player1Score) return 'Player 2 Wins!';
//     return 'It\'s a Tie!';
//   };

//   return (
//     <div className="game">
//       <h1>Batalla de Teclas</h1>
//       <div className="scores">
//         <div className="score player1">Player 1 (S): {player1Score}</div>
//         <div className="score player2">Player 2 (K): {player2Score}</div>
//       </div>
//       <div className="timer">Time Left: {timeLeft}s</div>
//       {gameOver && <div className="winner">{getWinner()}</div>}
//       <button onClick={resetGame} className="reset-button">Restart Game</button>
//     </div>
//   );
// }
