export type Cell = 'black' | 'white' | null;
export type BoardState = Cell[][];
export type Player = 'black' | 'white';

const SIZE = 8;

export function initBoard(): BoardState {
  const board: BoardState = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => null as Cell)
  );
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

function inBounds(x: number, y: number): boolean {
  return x >= 0 && x < SIZE && y >= 0 && y < SIZE;
}

export function applyMove(
  board: BoardState,
  x: number,
  y: number,
  player: Player
): BoardState | null {
  if (!inBounds(x, y) || board[y][x] !== null) {
    return null;
  }

  const opponent: Player = player === 'black' ? 'white' : 'black';
  let flipped = false;
  const newBoard = board.map(row => row.slice());

  for (const [dx, dy] of directions) {
    let nx = x + dx;
    let ny = y + dy;
    const toFlip: Array<[number, number]> = [];
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
