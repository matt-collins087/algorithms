/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n = nums.length / 2;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }
        if (count === n) {
            return nums[i]
        } else {
            count = 0;
        }
    }
    return null;
};