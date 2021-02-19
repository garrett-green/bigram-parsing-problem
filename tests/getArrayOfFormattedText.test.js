/* eslint-disable no-undef */
const { getArrayOfFormattedText } = require('../src/utils');

test(`[getArrayOfFormattedText] Returns an array of text`, () => {
  const testInput = 'one two three';
  expect(getArrayOfFormattedText(testInput)).toEqual(
    expect.arrayContaining(testInput.split(' '))
  );
});

test(`[getArrayOfFormattedText] Removes line breaks`, () => {
  const testInput = 'one line \n another line';
  expect(getArrayOfFormattedText(testInput)).toEqual(
    expect.arrayContaining(['one', 'line', 'another', 'line'])
  );
});

test(`[getArrayOfFormattedText] Transforms every word to lowercase`, () => {
  const testInput = 'This teXt Is YELLING';
  expect(getArrayOfFormattedText(testInput)).toEqual(
    expect.arrayContaining(['this', 'text', 'is', 'yelling'])
  );
});

test(`[getArrayOfFormattedText] Removes special characters, like punctuation`, () => {
  const testInput = 'One fish, two fish; red fish, blue fish!';
  expect(getArrayOfFormattedText(testInput)).toEqual(
    expect.arrayContaining([
      'one',
      'fish',
      'two',
      'fish',
      'red',
      'fish',
      'blue',
      'fish',
    ])
  );
});
