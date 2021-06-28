/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    let str = x.toString();
    let arr = str.split('').reverse();
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== arr[i]) {
            return false;
        }
    }
    
    return true;
};