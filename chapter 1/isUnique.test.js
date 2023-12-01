import isUnique from "./isUnique";

describe('isUnique', () => {
    test('returns true for a string with all unique characters', () => {
        expect(isUnique('abcdefg')).toBe(true);
    });

    test('returns false for a string with duplicate characters', () => {
        expect(isUnique('aabcdefg')).toBe(false);
    });

    test('returns true for an empty string', () => {
        expect(isUnique('')).toBe(true);
    });

    test('returns true for a string with one character', () => {
        expect(isUnique('a')).toBe(true);
    });

    test('returns false for a string with same character', () => {
        expect(isUnique('aaaaaaa')).toBe(false);
    });
});