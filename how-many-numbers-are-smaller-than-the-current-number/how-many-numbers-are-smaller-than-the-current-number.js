/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
      let result = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j] && nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count);
    count = 0;
  }
  return result;
};