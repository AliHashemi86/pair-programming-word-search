

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
    let a = word.split("");
    a = a.reverse();
    a = a.join();
    if (l.includes(a)) return true;
  }
    
  let b = transpose(letters);
    
  const VerticalJoin = b.map(ls => ls.join(''));
  for (let l of VerticalJoin) {
    if (l.includes(word)) return true;
    let b = word.split("");
    b = b.reverse();
    b = b.join();
    if (l.includes(b)) return true;
  }
    
  return false;

};

module.exports = wordSearch;



const transpose = function(matrix) {
  let a = [];
  for (let k = 0; k < matrix[0].length; k++) {
    a.push([]);
    for (let l = 0; l < matrix.length; l++) {
      a[k].push(0);
    }
  }
  
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      a[j][i] = matrix[i][j];
    }
  }
  return a;
};
  

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));
  
console.log('----');
  
printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));
  
console.log('----');
  
printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));