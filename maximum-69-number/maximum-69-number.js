/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
    const strNum = String(num)
    const strArr = strNum.split("")
    strArr.splice(strNum.indexOf('6'), 1, '9')
    return parseInt(strArr.join(""))
};