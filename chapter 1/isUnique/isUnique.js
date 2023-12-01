
export default function isUnique(str) {
    const charSet = {};
    for (let i = 0; i < str.length; i++) {
        if (charSet[str[i]]) {
        return false;
        }
        charSet[str[i]] = true;
    }
    return true;
}
