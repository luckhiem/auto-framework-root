import Calculator from '../../pageObjects/mobile/Calculator';
import { expect } from 'chai'

describe('Verify that the clear button clears the display', () => {
    it('Verify that the clear button clears the display', function () {
        Calculator.press('5');
        Calculator.press('add');
        Calculator.press('4');
        Calculator.press('subtract');
        Calculator.press('7');
        Calculator.press('add');
        Calculator.press('3');
        Calculator.press('clear');
        const resultAfterClear = Calculator.result();
        Calculator.press('equals');
        const resultFinal = Calculator.result();
        expect(resultAfterClear).to.equal(0);
        expect(resultFinal).to.equal(2)
    });
    it('Verify that the all clear button clears the display', function () {
        Calculator.press('5');
        Calculator.press('multiply');
        Calculator.press('4');
        Calculator.press('divide');
        Calculator.press('2');
        Calculator.press('add');
        Calculator.press('3');
        Calculator.press('clear');
        const resultAfterClear = Calculator.result();
        Calculator.press('all clear');
        const resultFinal = Calculator.result();
        expect(resultAfterClear).to.equal(0);
        expect(resultFinal).to.equal(0)
    });
});