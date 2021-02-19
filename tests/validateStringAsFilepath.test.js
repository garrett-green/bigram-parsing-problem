/* eslint-disable no-undef */
const { validateStringAsFilepath } = require('../src/utils');

test(`[validateStringAsFilepath] Returns true if provided a string containing 1+ '/' and 1+ '.'`, () => {
  const testInput = '/path/to/text/file.txt';
  expect(validateStringAsFilepath(testInput)).toBeTruthy();
});

test(`[validateStringAsFilepath] Returns false is provided string is missing '/' or '.'`, () => {
  const missingDot = '/path/to/text/file';
  expect(validateStringAsFilepath(missingDot)).toBeFalsy();

  const missingForwardSlash = 'file.txt';
  expect(validateStringAsFilepath(missingForwardSlash)).toBeFalsy();

  const missingBoth = 'file';
  expect(validateStringAsFilepath(missingBoth)).toBeFalsy();
});
