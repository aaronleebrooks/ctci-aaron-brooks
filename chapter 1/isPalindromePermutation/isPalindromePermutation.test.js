import isPalindromePermutation from './isPalindromePermutation';

describe('isPalindromePermutation', () => {
    test('returns true for a string that is a permutation of a palindrome', () => {
        expect(isPalindromePermutation('Tact Coa')).toBe(true);
    });

    test('returns false for a string that is not a permutation of a palindrome', () => {
        expect(isPalindromePermutation('Not a palindrome')).toBe(false);
    });

    test('returns true for a string with only one character', () => {
        expect(isPalindromePermutation('a')).toBe(true);
    });

    test('returns true for an empty string', () => {
        expect(isPalindromePermutation('')).toBe(true);
    });

    test('ignores casing', () => {
        expect(isPalindromePermutation('Aa')).toBe(true);
    });

    test('ignores non-letter characters', () => {
        expect(isPalindromePermutation('A man, a plan, a canal: Panama')).toBe(true);
    });
});