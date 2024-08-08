/** ===Completed=== */

// Zavharsan bruteforce yum l bolloo

/**
 * Given two binary strings a and b, return their sum as a binary string.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let temp;
    if (a.length <= b.length) {
        temp = b;
        b = a;
        a = temp;
    }

    let k = a.length - b.length;
    let space = "";

    while (k) {
        space += "0";
        k--;
    }

    b = space + b;
    let result = [];
    let m = 0;

    for (let i = a.length - 1; i >= 0; i--) {
        switch (parseInt(a[i]) + parseInt(b[i]) + m) {
            case 0:
                result.unshift(0);
                m = 0;
                break;
            case 1:
                result.unshift(1);
                m = 0;
                break;
            case 2:
                result.unshift(0);
                m = 1;
                break;
            case 3:
                result.unshift(1);
                m = 1;
                break;
        }
    }
    if (m === 1) result.unshift(1);

    return result.join("");
};

console.log(addBinary("1", "111"));  // ==> "10101"