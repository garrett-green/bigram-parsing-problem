/* eslint-disable no-undef */
const { getHistogram } = require('../src');

test(`[getHistogram] Accepts an array and returns a Map<string, number> with a histogram of the array's bigrams`, () => {
  const testInput = ['one', 'two', 'one', 'two', 'three'];
  expect(getHistogram(testInput)).toEqual(
    new Map([
      ['one two', 2],
      ['two one', 1],
      ['two three', 1],
    ])
  );
});

test(`[getHistogram] Accepts an empty array and returns an empty Map<string, number>`, () => {
  expect(getHistogram([])).toEqual(new Map());
});
