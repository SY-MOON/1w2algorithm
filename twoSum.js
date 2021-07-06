// var twoSum = function(nums, target) {
//   let result = null;
//   for(let i = 0; i < nums.length; i++) {
//       for(let j = i+1; j < nums.length; j++) {
//           if(nums[i] + nums[j] === target) {
//               result = [i, j];
//           }
//       }
//       if(!!result) break;
//   }
//   return result;
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