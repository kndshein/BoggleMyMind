const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const generateMatrix = (row, col) => {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    matrix.push([]);
    for (let j = 0; j < col; j++) {
      const randomLetter =
        alphabets[Math.floor(Math.random() * alphabets.length)];
      matrix[i].push(randomLetter);
    }
  }
  return matrix;
};
