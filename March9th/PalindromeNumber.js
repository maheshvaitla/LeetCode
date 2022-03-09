/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x<0) return false;
        let num = x;
        let num2 = 0;
        while(num>=1) {
            num2 = num2*10 +(num%10)
            num = parseInt(num/10)
        }
        return x === num2
    };