/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  if (sentence.length < 25) {
    return false;
  }

  const mySet = new Set();
    
  for (let i = 0; i < sentence.length; i++) {
    mySet.add(sentence[i]);
  }
    
  if (mySet.size === 26) {
    return true;
  }
    
  return false;
};