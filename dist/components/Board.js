import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from 'react';
import { initBoard, applyMove } from '../utils/game';
const Board = ({ currentPlayer, setCurrentPlayer }) => {
    const [board, setBoard] = useState(initBoard());
    const handleClick = (x, y) => {
        const updated = applyMove(board, x, y, currentPlayer);
        if (updated) {
            setBoard(updated);
            setCurrentPlayer(currentPlayer === 'black' ? 'white' : 'black');
        }
    };
    return (_jsx("table", { children: _jsx("tbody", { children: board.map((row, y) => (_jsx("tr", { children: row.map((cell, x) => (_jsx("td", { onClick: () => handleClick(x, y), style: {
                        width: '40px',
                        height: '40px',
                        textAlign: 'center',
                        border: '1px solid black',
                        backgroundColor: '#0a8',
                        color: cell === 'black' ? 'black' : cell === 'white' ? 'white' : '#0a8',
                    }, children: cell !== null && (_jsx("div", { style: {
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: cell,
                            margin: 'auto',
                        } })) }, x))) }, y))) }) }));
};
export default Board;
