var LCDNumber = require('../text/fixtures.js');
function createLCDString(input) {
    var LcdNumber = LCDNumber.loadLCDNumber();
    var numberArray = splitNumber(input);
    var LCDArray = searchSameNumber(numberArray,LcdNumber);
    print(LCDArray);

}

function splitNumber(input) {
    input = input + '';
    var numberArray = input.split('');
    for(var i = 0; i<numberArray.length;i++){
        numberArray[i] = parseInt(numberArray[i]);
    }
    
    return numberArray;
}

function searchSameNumber(numberArray, LcdNumber) {
    var LCDArray = [];
    for(var j = 0; j<LcdNumber.length;j++) {
        LCDArray[j] = '';
        for (var i = 0; i < numberArray.length; i++) {
            LCDArray[j] += LcdNumber[j][numberArray[i]];
        }
    }
    
    return LCDArray;
}

function print(LCDArray) {
    var printLCD = '';
    for(var i = 0; i<LCDArray.length;i++){
        printLCD += (LCDArray[i]+'\n');
    }
    
    console.log(printLCD);
}

module.exports = {
    createLCDString: createLCDString,
    splitNumber: splitNumber,
    searchSameNumber: searchSameNumber,
    print: print
}