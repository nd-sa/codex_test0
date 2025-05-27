import React, { useState } from 'react';
import Board from './components/Board';
import { Player } from './utils/game';

const App: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('black');

  return (
    <div>
      <h1>Reversi</h1>
      <Board currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
    </div>
  );
};

export default App;
