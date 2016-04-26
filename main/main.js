exports.createLCDString = function (input) {
    var LCDNumber = require('../text/fixtures.js');
    var LcdNumber = LCDNumber.loadLCDNumber();
    var main = require('./main.js')
    var numberArray = main.splitNumber(input);
    var LCDArray = main.searchSameNumber(numberArray,LcdNumber);
    main.print(LCDArray);

}

exports.splitNumber = function (input) {
    input = input + '';
    var numberArray = input.split('');
    for(var i = 0; i<numberArray.length;i++){
        numberArray[i] = parseInt(numberArray[i]);
    }
    return numberArray;
}

exports.searchSameNumber = function (numberArray, LcdNumber) {
    var LCDArray = [];
    for(var j = 0; j<LcdNumber.length;j++) {
        LCDArray[j] = '';
        for (var i = 0; i < numberArray.length; i++) {
            LCDArray[j] += LcdNumber[j][numberArray[i]];
        }
    }
    return LCDArray;
}

exports.print = function (LCDArray) {
    var printLCD = '';
    for(var i = 0; i<LCDArray.length;i++){
        printLCD += (LCDArray[i]+'\n');
    }
    console.log(printLCD);
}