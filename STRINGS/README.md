
1. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Solution 


/**
 * Problem: Longest Common Prefix
 * 
 * Given an array of strings, find the longest common prefix string among them.
 * If there is no common prefix, return an empty string "".
 * 
 * Example:
 * Input: ["flower", "flow", "flight"]
 * Output: "fl"
 */

/**
 * Approach 1: Character-by-Character Comparison
 * 
 * Compare characters at each index across all strings.
 * Stop as soon as a mismatch is found.
 * 
 * Time Complexity: O(n * m)
 *    - n = number of strings
 *    - m = length of the shortest string
 * Space Complexity: O(1)
 */
var longestCommonPrefix1 = function(strs) {
    if (strs.length === 0) return "";

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        let ch = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== ch) {
                return prefix;
            }
        }

        prefix += ch;
    }

    return prefix;
};

// Example
console.log(longestCommonPrefix1(["flower", "flow", "flight"])); // Output: "fl"


/**
 * Approach 2: Sorting Based
 * 
 * Sort the array, then compare only the first and last strings.
 * The common prefix of these two strings is the longest common prefix.
 * 
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(1) or O(log n) depending on sorting implementation
 */
var longestCommonPrefix2 = function(strs) {
    if (strs.length === 0) return "";

    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);
};

// Example
console.log(longestCommonPrefix2(["flower", "flow", "flight"])); // Output: "fl"


/**
 * Summary of Time Complexities:
 * 
 * Approach 1:
 *    - Time: O(n * m)
 *    - Best for small to medium input sizes
 * 
 * Approach 2:
 *    - Time: O(n log n) (due to sorting)
 *    - May be faster if n is small and strings are long
 */




----------------------------------------------------------------------------------------------------
Problem 2


/**
 * Problem: Find All Occurrences of a Substring (Target) in a String (SearchString)
 * 
 * Given two strings, find all starting indices where the target substring appears
 * in the searchString.
 * 
 * Example:
 * Input:
 *    searchString = "abcgsheths"
 *    target = "het"
 * Output: [5]
 * Explanation: The substring "het" starts at index 5 in searchString.
 */

/**
 * Approach: Brute Force / Sliding Window
 * 
 * - Slide over searchString from index 0 to (length of searchString - length of target)
 * - For each position, check if the substring matches target by comparing characters one by one
 * - If matched, record the start index
 * - Return all matching indices in an array
 * 
 * Time Complexity: O((N - M + 1) * M) ≈ O(N*M)
 *    - N = length of searchString
 *    - M = length of target
 * Space Complexity: O(k) where k is number of matches found (result array size)
 */

function findTargetIndex(searchString, target) {
  const result = [];

  // Loop through all possible start positions in searchString
  for (let i = 0; i <= searchString.length - target.length; i++) {
    let match = true;

    // Compare characters one by one for the current window
    for (let j = 0; j < target.length; j++) {
      if (searchString[i + j] !== target[j]) {
        match = false;
        break;  // Break early if any character mismatches
      }
    }

    // If matched, push start index to result
    if (match) {
      result.push(i);
    }
  }

  return result;
}

// Example usage
const searchString = "abcgsheths";
const target = "het";

console.log(findTargetIndex(searchString, target)); // Output: [5]


---------------------------------------------------------------------------------------------------------------------

Problem 3

/**
 * Given a string `s` containing only the characters
 * '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * Rules:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every closing bracket must have a corresponding opening bracket.
 *
 * Examples:
 * "()[]"      → true
 * "()[]{}"    → true
 * "(]"        → false
 * "([])"      → true
 * "([)]"      → false
 */

var isValid = function (s) {
    // If length is odd, it can never be valid
    if (s.length % 2 !== 0) return false;

    // Mapping of closing brackets to opening brackets
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // Stack to store opening brackets
    const stack = [];

    // Traverse each character in the string
    for (let char of s) {
        // If it is an opening bracket, push to stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } 
        // If it is a closing bracket
        else {
            // Stack empty or mismatch found
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    // If stack is empty, all brackets matched correctly
    return stack.length === 0;
};


⏱ Time Complexity
O(n)

We iterate through the string once.
🧠 Space Complexity
O(n)

In the worst case, all opening brackets are stored in the stack.
✅ Key Interview Explanation (Short)
This solution uses a stack to ensure brackets are closed in the correct order. Each closing bracket must match the most recent opening bracket.