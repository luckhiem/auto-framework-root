import Calculator from '../../pageObjects/mobile/Calculator';
import { expect } from 'chai'

describe('Verify the operation precedence', () => {
    it('Left to right', function () {
        Calculator.press('9');
        Calculator.press('add');
        Calculator.press('4');
        Calculator.press('subtract');
        Calculator.press('6');
        Calculator.press('add');
        Calculator.press('3');
        Calculator.press('equals');
        const result = Calculator.result();
        expect(result).to.equal(10)
    });

    it('Multiplication and division have higher precedence than addition and subtraction', function () {
        Calculator.press('9');
        Calculator.press('add');
        Calculator.press('4');
        Calculator.press('multiply');
        Calculator.press('2');
        Calculator.press('subtract');
        Calculator.press('8');
        Calculator.press('divide');
        Calculator.press('2');
        Calculator.press('equals');
        const result = Calculator.result();
        expect(result).to.equal(13)
    });
});