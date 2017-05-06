_ = require('../underbar');

describe('map()', () => {
  it('maps every number in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps the squared values of an object', () => {
    const agesOfFamilyMembers = {
      dad: 54, 
      mom: 53, 
      wesley: 25,
    };
    const mappedArr = _.map(agesOfFamilyMembers, (el) => el * el);
    expect(mappedArr).toEqual([2916, 2809, 625]);
  });

  it('adds additional string to each array element', () => {
    const arr = ["Seattle", "Miami", "Boston", "Las Vegas"];
    const mappedArr = _.map(arr, (el) => `I want to visit ${el}`);
    expect(mappedArr).toEqual(["I want to visit Seattle", "I want to visit Miami", "I want to visit Boston", "I want to visit Las Vegas"]);
  });
});
