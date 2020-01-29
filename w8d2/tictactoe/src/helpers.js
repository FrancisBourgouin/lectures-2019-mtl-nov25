export const matchStatus = (grid, turn, player1, player2) => {
  const listOfWinningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const solution of listOfWinningCombinations) {
    const [tile, tile2, tile3] = solution;
    if (
      grid[tile] !== null &&
      grid[tile] === grid[tile2] &&
      grid[tile2] === grid[tile3]
    ) {
      return { gameStatus: "finished", wonBy: turn % 2 ? player1 : player2 };
    }
  }

  return null;
};
