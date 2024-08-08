/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
 */


/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    let i = 0;
    let j = x;

    while (i < j) {
        const middle = Math.ceil((i + j) / 2);
        const square = middle ** 2;
        if (square === x) return middle;
        if (square < x) {
            i = middle;
        } else {
            j = middle - 1;
        }

    }

    return i;
};

console.log(mySqrt(10));