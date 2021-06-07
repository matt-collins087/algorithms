/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {
  let result = [];

    for (let i = left; i <= right; i++) {
      let value = String(i);
      let isDivisibile = true;

      if (value.includes('0')) {
        continue;
      }

       for (let j = 0; j < value.length; j++) {
         if (Number(value) % Number(value[j]) !== 0) {
           isDivisibile = false;
         }
       }

       isDivisibile ? result.push(i) : isDivisibile = true;
    }

  return result;
};