/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    
    if (target < nums[0]) {
        return 0;
    }
    
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] < target && nums[j + 1] > target) {
            return j + 1;
        }
    }
};