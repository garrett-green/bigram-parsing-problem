/* eslint-disable no-undef */
const { getFilePath, useDefaultFile } = require('../src/utils');

const USE_DEFAULT_FILE = useDefaultFile();

test(`[getFilePath] Returns default file path when provided [], undefined, or ['an/incomplete/filepath'] as argument`, () => {
  expect(getFilePath([])).toBe(USE_DEFAULT_FILE);
  expect(getFilePath(undefined)).toBe(USE_DEFAULT_FILE);
  expect(getFilePath(['an/incomplete/filepath'])).toBe(USE_DEFAULT_FILE);
});

test(`[getFilePath] Returns provided filepath when valid`, () => {
  const validPathFormat = '/usr/admin/file.txt';
  expect(getFilePath([validPathFormat])).toBe(validPathFormat);

  const existingFile = `${process.cwd()}/textFiles/multi-line.txt`;
  expect(getFilePath([existingFile])).toBe(existingFile);
});
