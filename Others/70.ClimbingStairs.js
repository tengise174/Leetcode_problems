/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    let x = [];
    x[0] = 1;
    x[1] = 1;
    for (let i = 2; i <= n; i++) {
        x[i] = x[i - 1] + x[i - 2];
    }
    return x[n];
};

console.log(climbStairs(4));