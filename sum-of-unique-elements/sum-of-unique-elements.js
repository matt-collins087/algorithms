/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let result = 0;
    let unique = true;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i] && i !== j) {
                unique = false;
            }
        }
        if (unique) {
            result += nums[i];
        }
        unique = true;
    }
    
    return result;
};