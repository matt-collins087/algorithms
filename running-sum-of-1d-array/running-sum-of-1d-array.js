/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let result = [];

  let previous = 0;

  for (let i = 0; i < nums.length; i++) {
    previous += nums[i];
    result.push(previous);
  }

  return result;
};