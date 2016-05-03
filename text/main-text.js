var main = require('../main/main.js');
var fixtures = require('./fixtures.js');
describe('unit text',function () {

    var LCDNumber;
    beforeEach(function () {
       LCDNumber = fixtures.loadLCDNumber();
    });
    
    describe('splitNumber',function () {
        
        it('correct',function () {
            var number = main.splitNumber(910);
            expect(number).toEqual([9,1,0]);
        });
    });

    describe('searchSameNumber',function () {

        it('correct',function () {
           expect(main.searchSameNumber([9,1,0],LCDNumber)).toEqual(['._. ... ._. ','|_| ..| |.| ','..| ..| |_| ']);
        });
    });

    describe('print',function () {

        it('correct',function () {

            spyOn(console, 'log');
            main.createLCDString(910);
            var printLCD = '._. ... ._. \n'+
                '|_| ..| |.| \n'+
                '..| ..| |_| \n';
            expect(console.log).toHaveBeenCalledWith(printLCD);
        });
    })
});