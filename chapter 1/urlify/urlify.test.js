import URLify from './urlify';

describe('URLify', () => {
    test('replaces all spaces in a string with %20', () => {
        expect(URLify('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith');
    });

    test('returns the original string when there are no spaces', () => {
        expect(URLify('MrJohnSmith', 11)).toBe('MrJohnSmith');
    });

    test('returns an empty string when the input is an empty string', () => {
        expect(URLify('', 0)).toBe('');
    });

    test('returns the original string when the true length is 0', () => {
        expect(URLify('Mr John Smith    ', 0)).toBe('Mr John Smith    ');
    });

    test('handles strings with only spaces', () => {
        expect(URLify('     ', 1)).toBe('%20');
    });
});