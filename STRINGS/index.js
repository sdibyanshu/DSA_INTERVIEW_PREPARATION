console.log("This is the STRINGS index file.");

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

   let s = "([)]"

     if (s.length % 2 !== 0) return false;
 

    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const stack = [];

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            console.log("stack-----",stack , "vvvvvvvvvv",pairs[char] );
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }














// var isValid = function(s) {
//     const stack = [];
//     const pairs = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char);
//         } else {
//             if (stack.length === 0 || stack.pop() !== pairs[char]) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };