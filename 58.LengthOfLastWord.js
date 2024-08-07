/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (count >= 1 && s[i] == ' ') {
            return count
        }
        if (s[i] != ' ') {
            count++
        }
    }
    return count
};

console.log(lengthOfLastWord("Hello World"));                           // == 5
console.log(lengthOfLastWord("   fly me   to   the moon  "));           // == 4
console.log(lengthOfLastWord("luffy is still joyboy"));                 // == 6
