// ==== Completed ==== //

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {


    let openingBracket = ["(", "{", "["];
    let closingBracket = [")", "}", "]"];
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (openingBracket.includes(s[i]))
            stack.push(s[i]);

        else {
            let index = closingBracket.indexOf(s[i]);
            if (openingBracket[index] === stack[stack.length - 1]) stack.pop();
            else return false;
        }

    }

    if (stack.length !== 0) return false;

    return true;
}

console.log(isValid("([]"));