const wordSearch = (letters, word) => {
  const transpose = function(matrix) {
    let result = [];
    let columnNumber = matrix[0].length;
  
    for (let j = 0; j < columnNumber; j++) {
      let newRow = [];
      for (let i = 0; i < matrix.length; i++) {
        newRow.push(matrix[i][j]);
      }
      result.push(newRow);
    }
    return result;
  };

  let rows = letters.map(x=> x.join(""));
  let reverseLetters = transpose(letters);
  let column =  reverseLetters.map(x=> x.join(""));
  rows.push(...column);
  let result = false;
  for (const it of rows) {
    let index = it.search(word);
    if (index !== -1) {
      result = true;
      break;
    }
  }
  return result;
};
// let x  =[]
// console.log(wordSearch (x ,y))


module.exports = wordSearch;


console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK'));

console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD'));