
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


--------------------------------------------------------------------------------------------------------------

// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
  let str = x.toString();
  let rev = str.split("").reverse().join("");
  return str === rev;
};

let result = isPalindrome(121);
console.log("Res", result);



function isPalindrome(str) {
  // Convert input to string (works for number + string both)
  str = String(str);
  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    let leftChar = str[i];
    let rightChar = str[len - 1 - i];

    console.log("i =", i);
    console.log("Left Index:", i, "Left Char:", leftChar);
    console.log("Right Index:", len - 1 - i, "Right Char:", rightChar);

    if (leftChar !== rightChar) {
      console.log("❌ Mismatch Found! Not a Palindrome");
      return false;
    }

    console.log("✅ Match Found, continue checking...");
  }

  console.log("🎉 All characters matched! It is a Palindrome");
  return true;
}

let result = isPalindrome(12144121);
console.log("Final Result:", result);




var isPalindrome = function(x) {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
};

let result = isPalindrome(121);
console.log("Res", result);

-----------------------------------------------------------------------------------------------------

function countNegatives(arr) {
  if (!Array.isArray(arr)) return false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (typeof val !== "number" || !Number.isFinite(val)) {
      return false;
    }
    if (val < 0) count++;
  }

  return count;
}


-------------------------------------------------------------------------------------------------------------

find the smallest number from array

Constraints

Input must be an array of finite numbers
Return false for non-array inputs
Return false for arrays containing non-number values
Return false for arrays containing NaN, Infinity, or -Infinity
For an empty array, return null


Test Cases

Base case: empty array [] -> null, single [x] -> x
Mixed arrays: [3, 1, 2], [-5, 2, -3, 4]
All negatives: [-1, -2, -3]
All positives: [1, 2, 3]
Decimals: [-1.5, -0.1, 0, 2.2]
Invalid inputs: null, undefined, 42, '8', {}, () => {}, [1, 'a'], [NaN], [Infinity]


function findSmallest(arr) {
  // Return false for non-array inputs
  if (!Array.isArray(arr)) return false;

  // For empty array, return null
  if (arr.length === 0) return null;

  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // Return false for non-number OR NaN/Infinity/-Infinity
    if (typeof val !== "number" || !Number.isFinite(val)) {
      return false;
    }

    // Update minimum
    if (val < min) min = val;
  }

  return min;
}

----------------------------------------------------------------------------------------------------------------


704. Binary Search
Easy
Topics
premium lock icon
Companies
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // found
    } 
    else if (nums[mid] < target) {
      left = mid + 1; // search right side
    } 
    else {
      right = mid - 1; // search left side
    }
  }

  return -1; // not found
};


-------------------------------------------------------------------------------------------------------

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessarily unique.


var sortArray = function(nums) {
  // Merge Sort function
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  // Merge 2 sorted arrays
  function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    // remaining elements
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
  }

  return mergeSort(nums);
};

let result = sortArray([5,1,1,2,0,0]);
console.log(result); // [0,0,1,1,2,5]

---------------------------------------------------------------------------------------------------------

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

 var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};




function isPowerOf(n, base) {
  if (n <= 0) return false;
  if (base <= 1) return false; // base must be >= 2

  while (n % base === 0) {
    n = n / base;
  }

  return n === 1;
}

// Power of 2
console.log(isPowerOf(16, 2)); // true
console.log(isPowerOf(18, 2)); // false

// Power of 3
console.log(isPowerOf(27, 3)); // true
console.log(isPowerOf(45, 3)); // false


⏱️ Complexity

Time: O(log_base(n))

Space: O(1)

-----------------------------------------------------------------------------------------
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

⏱️ Time Complexity
O(n)
💾 Space Complexity
O(1) (Constant space)

----------------------------------------------------------------------------------------------------------------

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100
 
 
 
var removeElement = function(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {

    console.log("----");
    console.log("i (read):", i);
    console.log("k (write):", k);
    console.log("nums[i]:", nums[i]);

    if (nums[i] !== val) {
      console.log("✔ keep element, overwrite at index", k);

      nums[k] = nums[i];
      k++;

      console.log("array now:", nums);
    } else {
      console.log("❌ element == val, skip");
    }
  }

  console.log("FINAL k:", k);
  console.log("FINAL array (valid part):", nums.slice(0, k));

  return k;
};

let k = removeElement([3,2,2,3], 3);
console.log("Returned k:", k); 





-----------------------------------------------------------------------------------------------------------------


 
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;

  console.log("Initial array:", s);

  while (left < right) {
    console.log("\nBefore swap:");
    console.log("left index:", left, "value:", s[left]);
    console.log("right index:", right, "value:", s[right]);

    // swap
    [s[left], s[right]] = [s[right], s[left]];

    console.log("After swap:", s);

    left++;
    right--;

    console.log("Move pointers → left:", left, "right:", right);
  }

  console.log("\nFinal reversed array:", s);
};


let k = reverseString(["h","e","l","l","o"]);

⏱️ Complexity (always mention)

Time: O(n)

Space: O(1)

🔑 Golden rule (yaad rakhna)

In-place likha ho → new array banana mana hai



----------------------------------------------------------------------------------------------------------

// Best Time to Buy and Sell Stock
// Easy
// Topics
// premium lock icon
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

var maxProfit = function(prices) {
  let minPrice = Infinity;
  let minIndex = -1;

  let maxProfit = 0;
  let buyIndex = -1;
  let sellIndex = -1;

  for (let i = 0; i < prices.length; i++) {

    // update minimum (buy day)
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      minIndex = i;
    }

    // profit if selling today
    let profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
      buyIndex = minIndex;
      sellIndex = i;
    }
  }

  console.log("Buy at index:", buyIndex, "price:", prices[buyIndex]);
  console.log("Sell at index:", sellIndex, "price:", prices[sellIndex]);
  console.log("Max Profit:", maxProfit);

  return maxProfit;
};

⏱️ Complexity

Time: O(n)

Space: O(1)

🔑 Golden rule

Buy first, then sell
(min pehle, max baad me)


var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
};


----------------------------------------------------------------------------------------------

🎯 Rule of Thumb (yaad rakhna)

When array has extra space at end → always fill from back

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
 

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

var merge = function(nums1, m, nums2, n) {

  // Pointer for last actual element in nums1
  let i = m - 1;

  // Pointer for last element in nums2
  let j = n - 1;

  // Pointer for last position in nums1 (extra space)
  let k = m + n - 1;

  console.log("Initial State:");
  console.log("nums1:", nums1);
  console.log("nums2:", nums2);
  console.log("i:", i, "j:", j, "k:", k);
  console.log("--------------------------");

  // Jab tak nums2 ke elements bache hain
  while (j >= 0) {

    console.log(`Comparing nums1[${i}] and nums2[${j}]`);

    // Agar nums1 ka element bada hai
    if (i >= 0 && nums1[i] > nums2[j]) {
      console.log(`→ nums1[${i}] = ${nums1[i]} is bigger`);
      nums1[k] = nums1[i];   // overwrite from back
      i--;
    } 
    // Warna nums2 ka element daalo
    else {
      console.log(`→ nums2[${j}] = ${nums2[j]} is bigger or nums1 exhausted`);
      nums1[k] = nums2[j];
      j--;
    }

    console.log(`Placed value at nums1[${k}]`);
    k--;

    console.log("Current nums1:", nums1);
    console.log("--------------------------");
  }
};

🎯 Interview Explanation (1–2 lines)

“Since nums1 has extra space at the end, I merge from the back using two pointers to avoid overwriting and achieve O(1) space.”

⏱️ Complexity

Time: O(m + n)

Space: O(1)



--------------------------------------------------------------------------------------------------------------

// 283. Move Zeroes
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

var moveZeroes = function(nums) {
   let k = 0; // write pointer for non-zero elements

  // Step 1: Move non-zero elements to front
  for (let i = 0; i < nums.length; i++) {
    console.log(`Checking nums[${i}] = ${nums[i]}`);

    if (nums[i] !== 0) {
      nums[k] = nums[i];
      console.log(`→ Placing ${nums[i]} at index ${k}`);
      k++;
    }
  }
    console.log("After moving non-zero:", nums);
  console.log("k (next index for zero):", k);
  
  // Step 2: Fill remaining positions with 0
  for (let i = k; i < nums.length; i++) {
    nums[i] = 0;
    console.log(`→ Filling 0 at index ${i}`);
  }

  console.log("Final nums:", nums);
};


let k = moveZeroes([0,1,0,3,12]);
console.log("k" , k)

----------------------------------------------------------------------------------------------------------------

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
 

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            max = Math.max(max, count); // 👈 yahin hona chahiye
        } else {
            count = 0;
        }
    }

    return max;
};


let k = findMaxConsecutiveOnes([1,1,0,1,1,1]);
console.log("k" , k)

🎯 One-line Interview Explanation

“I update the maximum whenever I extend a streak of ones.”

🧠 Golden Rule (yaad rakhna)

Maximum ko tab update karo jab value change ho rahi ho

⏱️ Complexity

Time: O(n) ✅

Space: O(1) ✅

-----------------------------------------------------------------------------------------------------

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
// Constraints:
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.


var missingNumber = function (nums) {
  const map = new Map();

  // Store numbers from 0 to n
  for (let i = 0; i <= nums.length; i++) {
    map.set(i, i);
  }

  // Remove existing numbers
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    }
  }

  // The remaining value is the missing number
  const result = map.values().next().value;
  return result;
};

// Test
const res = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
console.log("Res:", res);

⏱ Complexity (mention in interview)

Time: O(n)

Space: O(n)


var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
};
Complexity
Time: O(n)

Space: O(1)

---------------------------------------------------------------------------------------------------------

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


var singleNumber = function(nums) {
    // Step 1: Sort numerically
    nums.sort((a, b) => a - b);

    // Step 2: Compare in pairs
    for (let i = 0; i < nums.length; i += 2) {
        // If next element is different or doesn't exist
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};
// Test
const res = singleNumber([2,2,1]);
console.log("Res:", res);

Metric	Value
Time	O(n log n) 
Space	O(1) / O(log n)*



var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);

    let left = 0;

    while (left < nums.length) {
        let right = left + 1;

        if (nums[left] !== nums[right]) {
            return nums[left];
        }

        left += 2; // move to next pair
    }
};



var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
};


Why this works

x ^ x = 0

x ^ 0 = x

Order doesn’t matter

Complexity

Time: O(n) ✅

Space: O(1) ✅

This is the ideal answer.