const { readFileSync } = require('fs');
const { getFilePath, getArrayOfFormattedText } = require('./utils');

const filePath = getFilePath(process.argv.slice(2));

const textFromFile = readFileSync(filePath, 'utf-8');

const text = getArrayOfFormattedText(textFromFile);

const getHistogram = (arrayOfTextValues) => {
  const histograms = new Map();

  for (let i = 0; i < arrayOfTextValues.length - 1; i++) {
    const currentBigramKey = `${arrayOfTextValues[i]} ${
      arrayOfTextValues[i + 1]
    }`;

    const histogram = histograms.get(currentBigramKey);

    if (!histogram) {
      histograms.set(currentBigramKey, 1);
    } else {
      histograms.set(currentBigramKey, histogram + 1);
    }
  }

  return histograms;
};
console.log('Resulting Histogram:');
console.table(getHistogram(text));

module.exports.getHistogram = getHistogram;
