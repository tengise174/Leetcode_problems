/** ===Completed=== */

// Recursive duudahaas iluu too buriin bolomjiin toog husnegted hadgalaad hiisen ni hurdan bn. Others dotor bgaa

/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    let x;
    if (n === 1) x = 1;
    else if (n === 2) x = 2;
    else if (n >= 3) {
        x = climbStairs(n - 1) + climbStairs(n - 2);
    }
    return x;
};

console.log(climbStairs(4));