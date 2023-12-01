
export default function isPermutation(stringA, stringB) {
    // check for givens
    if (stringA.length !== stringB.length) {
        return false;
    }

    //assuming that permutation means that the characters are the same, but in a different order
    if(stringA === stringB) {
        return false;
    }

    let charSet = {};

    for (let char of stringA) {
        charSet[char] = (charSet[char] || 0) + 1;
    }

    for (let char of stringB) {
        if (!charSet[char] || charSet[char] === 0) {
            return false;
        }
        charSet[char]--;
    }

    return true;

}
