/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  let maxWealth = 0;
  accounts.forEach(account => {
      let sum = account.reduce((sum, wealth) => sum += wealth);
      if(sum > maxWealth) {
          maxWealth = sum;
      }
  })
 
  return maxWealth;
};