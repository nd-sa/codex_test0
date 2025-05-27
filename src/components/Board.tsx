import React, { useState } from 'react';
import { BoardState, initBoard, applyMove, Player } from '../utils/game';

type Props = {
  currentPlayer: Player;
  setCurrentPlayer: (p: Player) => void;
};

const Board: React.FC<Props> = ({ currentPlayer, setCurrentPlayer }) => {
  const [board, setBoard] = useState<BoardState>(initBoard());

  const handleClick = (x: number, y: number) => {
    const updated = applyMove(board, x, y, currentPlayer);
    if (updated) {
      setBoard(updated);
      setCurrentPlayer(currentPlayer === 'black' ? 'white' : 'black');
    }
  };

  return (
    <table>
      <tbody>
        {board.map((row, y) => (
          <tr key={y}>
            {row.map((cell, x) => (
              <td
                key={x}
                onClick={() => handleClick(x, y)}
                style={{
                  width: '40px',
                  height: '40px',
                  textAlign: 'center',
                  border: '1px solid black',
                  backgroundColor: '#0a8',
                  color: cell === 'black' ? 'black' : cell === 'white' ? 'white' : '#0a8',
                }}
              >
                {cell !== null && (
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: cell,
                      margin: 'auto',
                    }}
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
