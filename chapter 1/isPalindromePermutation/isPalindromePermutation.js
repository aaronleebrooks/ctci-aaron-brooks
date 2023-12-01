// Original method
/*
export default function isPalindromePermutation(string) {
    // The time complexity of this method is O(n^2) because for each character in the string (n characters),
    // you're splitting the string into an array (which takes n operations). So, the overall time complexity is n * n = n^2.

    let cleanedString = string.toLowerCase().trim();

    if(string.length <= 1) {
        return true;
    }
    
    let hasOddFreq = false;
    
    for (let char of cleanedString) {
        if(!char.match( /[a-z]/i )) {
            continue;
        }
        const oddFreq = (cleanedString.split(char).length - 1) % 2;
        if (oddFreq) {
            if (hasOddFreq) {
                return false;
            }
            hasOddFreq = true;
        }
    }

    return true;
}
*/

// New method
export default function isPalindromePermutation(string) {
    // The time complexity of this method is O(n) because you're only looping over the string twice:
    // once to count the occurrences of each character, and once to check if more than one character has an odd count.

    let cleanedString = string.toLowerCase().replace(/\s/g, '');
    let charCounts = {};

    // Loop over the string to count the occurrences of each character
    for (let char of cleanedString) {
        if (char.match(/[a-z]/i)) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
    }

    let oddCount = 0;
    // Loop over the character counts to check if more than one character has an odd count
    for (let char in charCounts) {
        if (charCounts[char] % 2 !== 0) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false;
        }
    }

    return true;
}