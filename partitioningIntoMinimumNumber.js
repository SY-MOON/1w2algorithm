/**
 * @param {string} n
 * @return {number}
 */
 var minPartitions = function(n) {
  const numbers = n.split('').map(num => Number(num));
  return Math.max(...numbers)
};