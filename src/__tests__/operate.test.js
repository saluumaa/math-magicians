import operate from '../logic/operate';

describe('operate test', () => {
  test('It should correct Add two numbers', () => {
    const numberOne = '1';
    const numberTwo = '5';
    const operation = '+';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual('6');
  });
  test('It should correct Substract two numbers', () => {
    const numberOne = '9';
    const numberTwo = '5';
    const operation = '-';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual('4');
  });
  test('It should correct Multiply two numbers', () => {
    const numberOne = '9';
    const numberTwo = '5';
    const operation = 'x';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual('45');
  });
  test('It should correct Divide two numbers', () => {
    const numberOne = '45';
    const numberTwo = '5';
    const operation = '÷';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual('9');
  });
});
