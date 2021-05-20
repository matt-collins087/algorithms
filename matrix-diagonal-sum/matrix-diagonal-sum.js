/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let start = 0;
    let end = mat[0].length - 1;
    let result = 0;
    
    for (let i = 0; i < mat.length; i++) {
        if (mat.length % 2 === 1 && start === end) {
          result += mat[i][start];
          start++;
          end--;
          continue;
        }
        result += mat[i][start];
        result += mat[i][end];
        start++;
        end--;
    }
    
   
    return result;
};