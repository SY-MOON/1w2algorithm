/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x.toString().split('').reverse();
    if(num[0] === '0') {
        num.shift();
    }
    if(num.includes('-')) {
        num.pop();
        num.unshift('-');
    }
    let reverseNum = Number(num.join(''))
    return reverseNum > (Math.pow(2, 31) - 1) || reverseNum < Math.pow(-2, 31) ? 0 : reverseNum;
    
};

//var reverse = function(x) {
//   const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
//   return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
// };