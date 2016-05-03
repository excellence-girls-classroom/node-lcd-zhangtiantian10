var main = require('../main/main.js');
var fixtures = require('./fixtures.js');
describe('LCD',function () {

    var lcdNumber;
    beforeEach(function () {
       lcdNumber = fixtures.loadLcdNumberDict();
    });
    describe('unit test',function () {
        describe('splitInput',function () {

            it('correct',function () {
                var number = main.splitInput(910);
                expect(number).toEqual([9,1,0]);
            });
        });

        describe('generateLCDLines',function () {

            it('correct',function () {
                expect(main.generateLCDLines([9,1,0],lcdNumber)).toEqual(['._. ... ._. ','|_| ..| |.| ','..| ..| |_| ']);
            });
        });

        describe('print',function () {
            var lcdLines;
            beforeEach(function () {
                lcdLines = ['._. ... ._. ','|_| ..| |.| ','..| ..| |_| '];
            });

            it('correct',function () {
                var printLCD = '._. ... ._. \n'+
                    '|_| ..| |.| \n'+
                    '..| ..| |_| \n';
                expect(main.generateLCDText(lcdLines)).toEqual(printLCD);
            });
        });
    });

    describe('integration testing',function () {
        it('correct',function () {
            spyOn(console, 'log');
            main.createLCDString(51340);
            var printLCD = '._. ... ._. ... ._. \n'+
                '|_. ..| ._| |_| |.| \n'+
                '._| ..| ._| ..| |_| \n';
            expect(console.log).toHaveBeenCalledWith(printLCD);
        })
    })
});