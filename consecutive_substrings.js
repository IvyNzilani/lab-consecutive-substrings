/**
 * consecutiveSubstrings
 * ---------------------
 * Given a string, return all consecutive substrings of at least one character.
 *
 * Example:
 * Input: "abc"
 * Output: ["a", "ab", "abc", "b", "bc", "c"]
 *
 * Algorithm Type:
 * Brute-force / Nested iteration
 *
 * Time Complexity:
 * O(n²) — Two nested loops iterate over the string length.
 *
 * Space Complexity:
 * O(n²) — Stores all possible consecutive substrings.
 */

function consecutiveSubstrings(string) {
  const result = [];

  // Outer loop controls the starting index
  for (let i = 0; i < string.length; i++) {
    // Inner loop controls the ending index
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }

  return result;
}

if (require.main === module) {
  // Test Case 1
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  // Test Case 2
  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
