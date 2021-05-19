/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let isAllowed = true;
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (allowed.indexOf(words[i][j]) < 0) {
                isAllowed = false;
                break;
            }
        }
      if (isAllowed) {
          count++
      } else {
          isAllowed = true;
      }
    }
    return count;
};