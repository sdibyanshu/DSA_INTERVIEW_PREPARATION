
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
Problem 3


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

Problem 4

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




---------------------------------------------------------------------------------------------------------------------------
Problem 5

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: The substring "sad" occurs at index 0 and 6 in haystack. The first occurrence is at index 0.


var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)) return -1

    return haystack.indexOf(needle);
};


----------------------------------------------------------------------------------------------------------------------------

LEARN

// 1. at(index): Returns character at given index; supports negative indexing
let str = "Hello, World!";
console.log(str.at(1));   // Output: "e"
console.log(str.at(-1));  // Output: "!"

// 2. charAt(index): Returns character at given index; no negative indexing
console.log(str.charAt(1));   // Output: "e"
console.log(str.charAt(-1));  // Output: "" (empty string)

// 5. slice(start, end): Extracts substring from start up to (but not including) end; supports negative indexes
console.log(str.slice(7, 12));   // Output: "World"
console.log(str.slice(-6, -1));  // Output: "World"

// 6. substring(start, end): Like slice but treats negatives as 0 and swaps start/end if start > end
console.log(str.substring(7, 12));   // Output: "World"
console.log(str.substring(12, 7));   // Output: "World" (swapped)
console.log(str.substring(-3, 5));   // Output: "Hello" (negative treated as 0)


--------------------------------------------------------------------------------------------------------------------------

// 1. includes(searchString): Returns true if string contains the specified text
let str = "Hello, World!";
console.log(str.includes("World"));  // Output: true
console.log(str.includes("world"));  // Output: false (case-sensitive)

// 2. startsWith(searchString): Checks if string begins with the specified substring
console.log(str.startsWith("Hello"));  // Output: true
console.log(str.startsWith("world"));  // Output: false

// 3. endsWith(searchString): Checks if string ends with the specified substring
console.log(str.endsWith("!"));      // Output: true
console.log(str.endsWith("World"));  // Output: false

// 4. indexOf(searchString): Returns the index of first occurrence, or -1 if not found
console.log(str.indexOf("o"));    // Output: 4 (first 'o' in "Hello")
console.log(str.indexOf("World")); // Output: 7
console.log(str.indexOf("world")); // Output: -1 (case-sensitive)

// 5. lastIndexOf(searchString): Returns index of last occurrence, or -1 if not found
console.log(str.lastIndexOf("o"));    // Output: 8 (last 'o' in "World")


------------------------------------------------------------------------------------------------------------------

// 1. toLowerCase(): Converts entire string to lowercase
let str = "Hello, World!";
console.log(str.toLowerCase());  // Output: "hello, world!"

// 2. toUpperCase(): Converts entire string to uppercase
console.log(str.toUpperCase());  // Output: "HELLO, WORLD!"

// 3. toLocaleLowerCase(): Locale-aware lowercase conversion (e.g., Turkish)
console.log(str.toLocaleLowerCase('tr')); // Output depends on locale

// 4. toLocaleUpperCase(): Locale-aware uppercase conversion
console.log(str.toLocaleUpperCase('tr')); // Output depends on locale

// 5. trim(): Removes whitespace from both ends of the string
let paddedStr = "   Hello, World!   ";
console.log(paddedStr.trim());    // Output: "Hello, World!"

// 6. trimStart(): Removes whitespace only from the start
console.log(paddedStr.trimStart()); // Output: "Hello, World!   "

// 7. trimEnd(): Removes whitespace only from the end
console.log(paddedStr.trimEnd());   // Output: "   Hello, World!"

// 8. padStart(length, padString): Pads string from the start until length is reached
let num = "5";
console.log(num.padStart(3, "0")); // Output: "005"

// 9. padEnd(length, padString): Pads string from the end until length is reached
console.log(num.padEnd(3, "*"));   // Output: "5**"

// 10. repeat(count): Returns new string with original repeated count times
let repeatStr = "abc";
console.log(repeatStr.repeat(3));  // Output: "abcabcabc"


----------------------------------------------------------------------------------------------------------------------

// 1. replace(pattern, replacement): Replaces first occurrence matching pattern (string or regex)
let str = "foo bar foo";
console.log(str.replace("foo", "baz"));    // Output: "baz bar foo"
console.log(str.replace(/foo/g, "baz"));   // Output: "baz bar baz"

// 2. replaceAll(pattern, replacement): Replaces all occurrences matching pattern (string or global regex)
console.log(str.replaceAll("foo", "baz")); // Output: "baz bar baz"
console.log(str.replaceAll(/foo/g, "baz"));// Output: "baz bar baz"

// 3. split(separator): Splits string into an array using the separator
let csv = "apple,banana,cherry";
console.log(csv.split(","));  // Output: ["apple", "banana", "cherry"]

// 4. concat(...strings): Concatenates two or more strings
let s1 = "Hello";
let s2 = "World";
console.log(s1.concat(", ", s2, "!"));  // Output: "Hello, World!"
// Similar to: s1 + ", " + s2 + "!"


--------------------------------------------------------------------------------------------------------------------
Problem 7

Length of Last Word
Problem Statement


/** Given a string s consisting of words and spaces,
return the length of the last word in the string.

A word is a maximal substring consisting of
non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/


Solution (JavaScript)

var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

Time and Space Complexity

Time Complexity: O(n) — where n is the length of the string.

Space Complexity: O(n) — due to splitting the string into an array.



----------------------------------------------------------------------------------------------------------------------
Problem 8

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.


var findWordsContaining = function(words, x) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            res.push(i);
        }
    }
    return res;
};
Time Complexity
includes(x) → O(m) (length of each word)

Loop runs n times

👉 Total: O(n * m)

-------------------------------------------------------------------------------------------------------------------

Problem 9

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

You are given two strings:

jewels → characters that are considered valuable

stones → characters that you own

👉 Each character represents one stone
👉 You must count how many stones are jewels

⚠️ Case-sensitive

"a" ≠ "A"


✅ Optimal Approach (Using Set)
Why Set?

Fast lookup → O(1)

Best for checking membership

var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set(jewels);
    let count = 0;

    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    return count;
};

⏱ Time & Space Complexity

Time Complexity: O(n + m)

n = length of jewels

m = length of stones

Space Complexity: O(n) for the Set


------------------------------------------------------------------------------------------------------------------------------------

Problem 10

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string , consider their frequency as 0. 

// The frequency of a letter x is the number of times it occurs in the string . 
// Example 1:

// Input: s = "successes" 

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.
 

 var maxFreqSum = function(string) {
  let vowels = "aeiou";
  let vowelMaxFreq = 0;
  let nonVowelMaxFreq = 0;
  let freq = new Map();

  // Frequency count
  for (let ch of string) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  // Find max vowel & consonant frequency
  for (let [key, value] of freq) {
    if (vowels.includes(key)) {
      vowelMaxFreq = Math.max(vowelMaxFreq, value);
    } else {
      nonVowelMaxFreq = Math.max(nonVowelMaxFreq, value);
    }
  }

  return vowelMaxFreq + nonVowelMaxFreq;
};

------------------------------------------------------------------------------------------------------------------------

Problem 11 

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
 

var balancedStringSplit = function(s) {
    let count = 0;
    let balance = 0;

    for (let i = 0; i < s.length; i++) {
        console.log("Char:", s[i]);

        if (s[i] === "L") {
            balance++;
        } else if (s[i] === "R") {
            balance--;
        }

        console.log("Balance:", balance);

        if (balance === 0) {
            count++;
            console.log("Balanced found, count:", count);
        }
    }

    console.log("Final count:", count);
    return count;
};

⏱ Complexity

Time: O(n)

Space: O(1)



-------------------------------------------------------------------------------------------------

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


var twoSum = function(nums, target) {
    const map = new Map(); // value -> index
    console.log("Initial Map:", map);

    for (let i = 0; i < nums.length; i++) {
        console.log("\n---------------------");
        console.log("Current index i:", i);
        console.log("Current value nums[i]:", nums[i]);

        const complement = target - nums[i];
        console.log("Complement needed:", complement);

        console.log("Map before check:", map);

        if (map.has(complement)) {
            console.log(
                "Complement found in map!",
                "Complement index:", map.get(complement),
                "Current index:", i
            );
            return [map.get(complement), i];
        }

        console.log("Complement NOT found, storing current value in map");
        map.set(nums[i], i);
        console.log("Map after storing:", map);
    }
};

let res = twoSum([2, 7, 11, 15], 9);
console.log("\nFinal Result:", res);


Time Complexity: O(n)

Space Complexity: O(n)


-------------------------------------------------------------------------------------------------------------

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 


var secondHighest = function(s) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            let num = Number(s[i]);

            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num < max) {
                secondMax = num;
            }
        }
    }

    return secondMax === -Infinity ? -1 : secondMax;
};


let res = secondHighest("dfa12321afd");
console.log(res); // 2


⏱ Complexity

Time: O(n)

Space: O(1)


var secondHighest = function(s) {
    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            set.add(Number(s[i]));
        }
    }

    const arr = [...set];
    arr.sort((a, b) => b - a);

    return arr.length >= 2 ? arr[1] : -1;
};

console.log(secondHighest("dfa12321afd")); // 2


🎯 Interview Tip

Say:

“Since digits are limited (0–9), using a Set and sorting is safe and simple.”