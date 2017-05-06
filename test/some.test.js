const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any element is an object', () => {
    const arr = [1, 7, 'John Mayer', { instrument: 'guitar'}, true];
    expect(_.some(arr, arr => typeof arr === 'object')).toBe(true);
  });

});