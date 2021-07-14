/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    let sumArr = [];
    let sum = 0;
    
    while (n !== 1) {
        let x = n.toString().split('');
        for (let i = 0; i < x.length; i++) {
            sum += x[i] ** 2;
        }
        
     if (sumArr.includes(sum)) {
         return false;
     } else {
         sumArr.push(sum);
     }
        
    n = sum;
    sum = 0;
  }
    return true;
}