import isPermutation from './isPermutation';

describe('isPermutation', () => {
    test('returns true for two strings with the same characters in different orders', () => {
        expect(isPermutation('abc', 'bca')).toBe(true);
    });

    test('returns false for two strings with different characters', () => {
        expect(isPermutation('abc', 'def')).toBe(false);
    });

    test('returns false for two strings with the same characters but different frequencies', () => {
        expect(isPermutation('abc', 'abcc')).toBe(false);
    });

    test('returns false for two identical strings', () => {
        expect(isPermutation('abc', 'abc')).toBe(false);
    });

    test('returns false for two strings of different lengths', () => {
        expect(isPermutation('abc', 'abcd')).toBe(false);
    });

    test('returns false for two empty strings', () => {
        expect(isPermutation('', '')).toBe(false);
    });
});