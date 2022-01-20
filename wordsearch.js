//Vivian Trinh (@vptrinh) & Lee Benzacar (@leelamprey)
const transpose = function (matrix) {
    // declare an empty array
    let array = [];
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++)
        if (x === 0) {
          array.push([matrix[x][y]]); 
        } else {
          array[y].push(matrix[x][y]);
        }
      }
      return array
    };

const wordSearch = (letters, word) => {
    if (letters.length === 0) {return undefined};
    let verticalArray = transpose(letters);
    let verticalJoin = verticalArray.map(vs => vs.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''));

        for (l of horizontalJoin) {
            if (l.includes(word)) return true
        } 
        for (v of verticalJoin) {
            if (v.includes(word)) return true
        //if we tranpose a function, it will create an array of the vertical columns and then we can loop through the columns to find the words.
        }
    return false;
};

module.exports = wordSearch