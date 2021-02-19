const getFilePath = (parameters = []) => {
  try {
    const filePathIsValid =
      validateStringAsFilepath(parameters[0]) &&
      validateFileType(parameters[0]);

    if (filePathIsValid) {
      console.log(`Using provided text file (${parameters[0]})`);
      return parameters[0];
    }
    return useDefaultFile();
  } catch (err) {
    console.error(err);
    return useDefaultFile();
  }
};
module.exports.getFilePath = getFilePath;

const getArrayOfFormattedText = (text) => {
  /*
    Formatting Info:
      .replace() -> Remove line breaks and non-character values (ie, punctuation)
      .split() -> Split clean text string into array
      .reduce() -> Iterate array a single time, transforming text to all lowercase format and removing empty string values
  */
  return text
    .replace(/\n|[^\w\s|-]/gi, ' ')
    .split(' ')
    .reduce((filteredAndFormattedValues, currentValue) => {
      if (currentValue.length > 0) {
        filteredAndFormattedValues.push(currentValue.toLowerCase());
      }
      return filteredAndFormattedValues;
    }, []);
};
module.exports.getArrayOfFormattedText = getArrayOfFormattedText;

const useDefaultFile = () => {
  console.warn('Valid path to text file not provided, using default file');
  return `${process.cwd()}/textFiles/default.txt`;
};
module.exports.useDefaultFile = useDefaultFile;

const validateFileType = (validatedPath) => {
  if (!validatedPath.endsWith('.txt')) {
    const errorMessage = `Text file must be '.txt' file type. Provided file type: ${validatedPath.slice(
      validatedPath.lastIndexOf('.')
    )}`;
    throw new Error(errorMessage);
  }
  return true;
};
module.exports.validateFileType = validateFileType;

const validateStringAsFilepath = (path = '') => {
  if (!path) return false;
  const forwardSlashesAndDots = /\/|\./g;
  const matchResults = path.match(forwardSlashesAndDots) || [];
  return matchResults.includes('/') && matchResults.includes('.');
};
module.exports.validateStringAsFilepath = validateStringAsFilepath;
