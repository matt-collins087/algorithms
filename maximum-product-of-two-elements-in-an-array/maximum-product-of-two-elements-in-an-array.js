/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let index = max = secondMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > secondMax && index !== i) {
            secondMax = nums[i];
        }
    }

    return (secondMax - 1) * (max - 1);
};