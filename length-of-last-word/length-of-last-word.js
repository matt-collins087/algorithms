/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let array = s.split(' ');
    let length = array.length - 1;

    for (let i = length; i >= 0; i--) {
        if (array[i].length > 0) {
            return array[i].length;
        }
    }

    return 0;
};