const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just colors, given an array of color objects', () => {
    const rainbow = [
      { color: 'red', temp: 'warm'},
      { color: 'orange', temp: 'warm'},
      { color: 'blue', temp: 'cool'}
    ];
    const result = _.pluck(rainbow, 'color');
    expect(result).toEqual(['red', 'orange', 'blue']);
  });

  it('returns an array of undefined values after passing an array', () => {
    const count = 0;
    const flowers = ['rose', 'tulip', 'daisy'];
    const result = _.pluck(flowers);
    expect(result).toEqual([undefined, undefined, undefined]);
  });

});