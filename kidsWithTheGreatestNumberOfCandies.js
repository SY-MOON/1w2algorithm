/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
  const MAX = Math.max(...candies)
  return candies.map(candy => {
      if(candy + extraCandies >= MAX) {
          return true;
      }
      return false;
  })
};