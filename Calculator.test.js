const { Calculator } = require('./Calculator.js');

describe('Calculator Class', () => {

    it('add', () => {
    result = Calculator.add(10,20);

    expect(result).toBe(30);
    });

    it('subtract', () => {
    result = Calculator.subtract(10,20);

    expect(result).toBe(-10);
    });

    it('multiplication', () => {
    result = Calculator.multiplication(10,20);

    expect(result).toBe(200);
    });

    it('Modulo', () => {
    result = Calculator.modulo(10,20);

    expect(result).toBe(10);
    });

    it('divided', () => {
    result = Calculator.divided(10,20);

    expect(result).toBe(0.5);
    });

    it('bmi', () => {
    result = Calculator.bmi(10,20);

    expect(result).toBe(0.2);
    });
});