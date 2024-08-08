/** ===Completed=== */
// Beats 11.23%.   udaan ajillasan 

/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
 */


/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    for (let i = 0; i <= (x / 2 + 1); i++) {
        if ((i * i) > x)
            return (i - 1);
    }
    return 1;
};

console.log(mySqrt(10));