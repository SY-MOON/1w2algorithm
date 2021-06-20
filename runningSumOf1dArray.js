// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let prev = 0;
  return nums.map((num) => {
    prev += num;
    return prev;
  });
};
