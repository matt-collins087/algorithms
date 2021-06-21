/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let odds = [];
    let evens = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i])
        } else {
            odds.push(nums[i])
        }
    }
    
    return evens.concat(odds);
};