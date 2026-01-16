


// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)) return -1

    return haystack.indexOf(needle);
};



let haystack = "sadbutsad"
let needle = "sad"
let res = strStr(haystack, needle)
console.log(res)




