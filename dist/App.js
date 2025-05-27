import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Board from './components/Board';
const App = () => {
    const [currentPlayer, setCurrentPlayer] = useState('black');
    return (_jsxs("div", { children: [_jsx("h1", { children: "Reversi" }), _jsx(Board, { currentPlayer: currentPlayer, setCurrentPlayer: setCurrentPlayer })] }));
};
export default App;
