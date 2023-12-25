const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const count1 = Array(26).fill(0);
  const count2 = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    count1[s1.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    count2[s2.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    count += Math.min(count1[i], count2[i]);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
