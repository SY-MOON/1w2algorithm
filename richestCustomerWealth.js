/**
 * @param {number[][]} accounts
 * @return {number}
 */
//  var maximumWealth = function(accounts) {
//   let maxWealth = 0;
//   accounts.forEach(account => {
//       let sum = account.reduce((sum, wealth) => sum += wealth);
//       if(sum > maxWealth) {
//           maxWealth = sum;
//       }
//   })
 
//   return maxWealth;
// };

var twoSum = function(nums, target) {
  let map = new Map();
  
  for(let i = 0; i < nums.length; i ++) {
      if(map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i];
      } else {
          map.set(nums[i], i);
      }
  }
return [];
};