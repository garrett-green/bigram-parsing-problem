/* eslint-disable no-undef */
const { validateFileType } = require('../src/utils');

test(`[validateFileType] Returns true if provided filepath ends with '.txt'`, () => {
  const testInput = '/path/to/text/file.txt';
  expect(validateFileType(testInput)).toBeTruthy();
});

test(`[validateFileType] Throws Error when provided filepath is not to .txt file`, () => {
  const testInput = '/path/to/word/file.doc';
  function failValidation() {
    validateFileType(testInput);
  }
  expect(failValidation).toThrowError(
    `Text file must be '.txt' file type. Provided file type: .doc`
  );
});
