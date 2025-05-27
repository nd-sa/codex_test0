import { applyMove, initBoard } from '../src/utils/game';

test('applyMove flips pieces', () => {
  const board = initBoard();
  const updated = applyMove(board, 2, 3, 'black');
  expect(updated).not.toBeNull();
  if (updated) {
    expect(updated[3][3]).toBe('black');
  }
});
