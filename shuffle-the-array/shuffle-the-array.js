/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = [];
    
    for (let i = 0; i < nums.length - n; i++) {
        result.push(nums[i])
        result.push(nums[i + n]);
    }
    
    return result;
};