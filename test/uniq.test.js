const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups an object with value duplicates', () => {
    const directory = {
      student1: "adam",
      student2: "brad",
      student3: "chris",
      student4: "derek",
      student5: "adam",
      student6: "eric",
      student7: "eric"
    };

    expect(_.uniq(directory)).toEqual(["adam", "brad", "chris", "derek", "eric"]);
  });
});