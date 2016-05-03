var LcdNumber = require('../text/fixtures.js');
function createLCDString(input) {
    var lcdLines = generateLCDLines(splitInput(input),LcdNumber.loadLcdNumberDict());
    var lcdText = generateLCDText(lcdLines);
    console.log(lcdText);
}

function splitInput(input) {
    var numberArray = input.toString().split('');
    for(var i = 0; i<numberArray.length;i++){
        numberArray[i] = parseInt(numberArray[i]);
    }
    
    return numberArray;
}

function generateLCDLine(numberArray, LCDNumber) {
    var lcdLine = '';
    for (var i = 0; i < numberArray.length; i++) {
        lcdLine += LCDNumber[numberArray[i]];
    }
    return lcdLine;
};

function generateLCDLines(numberArray, lcdNumberDict) {
    var lcdLines = [];
    for (var i = 0; i < lcdNumberDict.length; i++) {
        lcdLines.push(generateLCDLine(numberArray, lcdNumberDict[i]));
    }
    return lcdLines;
}

function generateLCDText(lcdLines) {
    var lcdText = '';
    for(var i = 0; i<lcdLines.length;i++){
        lcdText += (lcdLines[i]+'\n');
    }
    return lcdText;
}

module.exports = {
    createLCDString: createLCDString,
    splitInput: splitInput,
    generateLCDLines: generateLCDLines,
    generateLCDText: generateLCDText
}