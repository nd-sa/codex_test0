const SIZE = 8;
export function initBoard() {
    const board = Array.from({ length: SIZE }, () => Array.from({ length: SIZE }, () => null));
    const mid = SIZE / 2;
    board[mid - 1][mid - 1] = 'white';
    board[mid][mid] = 'white';
    board[mid - 1][mid] = 'black';
    board[mid][mid - 1] = 'black';
    return board;
}
const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
];
function inBounds(x, y) {
    return x >= 0 && x < SIZE && y >= 0 && y < SIZE;
}
export function applyMove(board, x, y, player) {
    if (!inBounds(x, y) || board[y][x] !== null) {
        return null;
    }
    const opponent = player === 'black' ? 'white' : 'black';
    let flipped = false;
    const newBoard = board.map(row => row.slice());
    for (const [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;
        const toFlip = [];
        while (inBounds(nx, ny) && newBoard[ny][nx] === opponent) {
            toFlip.push([nx, ny]);
            nx += dx;
            ny += dy;
        }
        if (inBounds(nx, ny) && newBoard[ny][nx] === player && toFlip.length > 0) {
            flipped = true;
            for (const [fx, fy] of toFlip) {
                newBoard[fy][fx] = player;
            }
        }
    }
    if (!flipped) {
        return null;
    }
    newBoard[y][x] = player;
    return newBoard;
}
