/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  let letters = ['a', 'b'];
  let count = 0;
  let result = '';

  while (count < n - 1) {
    result += letters[0];
    count++;
  }
    
  if (n % 2 === 0) {
     result += letters[1]; 
  } else {
     result += letters[0];
  }
    

  return result;
};