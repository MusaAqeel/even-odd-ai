const isOdd = require('../index');

describe('isOdd', () => {
    test('should return true for odd numbers', () => {
        const result = isOdd(3);
        expect(result).toBe(true);
    });
    
    test('should return false for even numbers', () => {
        const result = isOdd(2);
        expect(result).toBe(false);
    });

    test('should return null for non-number inputs', () => {
        const result = isOdd('not a number');
        expect(result).toBe(null);
    });
}); 