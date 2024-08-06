// ==== Completed ==== //

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var solution = "";

    var length = Math.min(...strs.map(el => el.length));

    for (var i = 0; i < length; i++) {
        var num = 0;
        for (var j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] === strs[(j + 1)][i])
                num++;
            else
                break;
        }

        if (num === (strs.length - 1)) solution += strs[0][i];
        else break;
    }

    return solution;
};

console.log(longestCommonPrefix(["cir", "car"]));