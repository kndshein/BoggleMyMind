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

export const findWords = (matrix, wordsList) => {
  let results = new Set();

  for (let word of wordsList) {
    let queue = []; // an array to store first coords

    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
        if (matrix[r][c] === word[0].toUpperCase()) {
          queue.push([r, c]);
        }
      }
    }

    while (queue.length > 0) {
      const current = queue.shift();
      const found = searchWord(matrix, current[0], current[1], word);
      if (found) {
        results.add(word);
      }
    }
  }

  return [...results];
};

const searchWord = (matrix, r, c, word, visited = []) => {
  if (r < 0 || r > matrix.length - 1 || c < 0 || c > matrix[0].length - 1) {
    // check for out of bounds
    return false;
  } else if (includesArray(visited, [r, c])) {
    // check if the coords have been visited
    return false;
  } else {
    const matrixLetter = matrix[r][c],
      firstLetter = word[0].toUpperCase();

    if (matrixLetter !== firstLetter) {
      // check if the letter in the matrix is the same as the first letter of the word
      return false;
    } else {
      if (word.length === 1) {
        // if last letter in word, return true because the word has been found
        return true;
      }

      // add coords into visited before recursion so visited coords are tracked
      visited.push([r, c]);

      // remove the first letter of the word put into the recursion
      let newWord = word.slice(1);

      // recusion calls for all 8 directions
      const topLeft = searchWord(matrix, r - 1, c - 1, newWord, visited);
      const top = searchWord(matrix, r - 1, c, newWord, visited);
      const topRight = searchWord(matrix, r - 1, c + 1, newWord, visited);
      const right = searchWord(matrix, r, c + 1, newWord, visited);
      const bottomRight = searchWord(matrix, r + 1, c + 1, newWord, visited);
      const bottom = searchWord(matrix, r + 1, c, newWord, visited);
      const bottomLeft = searchWord(matrix, r + 1, c - 1, newWord, visited);
      const left = searchWord(matrix, r, c - 1, newWord, visited);

      return (
        topLeft ||
        top ||
        topRight ||
        right ||
        bottomRight ||
        bottom ||
        bottomLeft ||
        left
      );
    }
  }
};

// Citation, bless this SO: https://stackoverflow.com/questions/64303074/check-if-an-array-includes-an-array-in-javascript
const includesArray = (data, arr) => {
  return data.some(
    (e) => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o))
  );
};
