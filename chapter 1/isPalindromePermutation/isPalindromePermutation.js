
export default function isPalindromePermutation(string) {
    //check givens

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
