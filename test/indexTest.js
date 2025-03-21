const superbowlWin = require('../index'); // Import the function
const { expect } = require('chai'); // Assuming you're using Chai for assertions

describe('superbowlWin(record)', () => {
  it('returns a year the Denver Broncos won the superbowl', () => {
    const record = [
      { year: 2018, result: 'L' },
      { year: 2017, result: 'W' },
      { year: 2016, result: 'L' },
    ];
    expect(superbowlWin(record)).to.equal(2017); // Example assertion
  });

  it('returns undefined if the record has no win objects', () => {
    const record = [
      { year: 2018, result: 'L' },
      { year: 2017, result: 'L' },
      { year: 2016, result: 'L' },
    ];
    expect(superbowlWin(record)).to.be.undefined; // Example assertion
  });
});
