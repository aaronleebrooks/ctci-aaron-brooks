
export default function URLify(dirtyStr, trueLength) {
    //check givens
    if (dirtyStr.length === 0) {
        return dirtyStr;
    }

    if (trueLength === 0) {
        return dirtyStr;
    }

    if(trueLength === 1 && dirtyStr.trim().length === 0) {
        return '%20';
    }

    return dirtyStr.trim().replace(/\s/g, '%20');
}
