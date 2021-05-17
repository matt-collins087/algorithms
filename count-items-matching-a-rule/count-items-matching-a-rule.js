/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let obj = {
      type: 0,
      color: 1,
      name: 2,
    }
    
    let result = 0;
    let i = obj[ruleKey];
    
    for (let j = 0; j < items.length; j++) {
      if (items[j][i] === ruleValue) {
        result++;
      }
    }
    
    return result;
};