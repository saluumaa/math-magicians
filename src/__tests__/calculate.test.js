import calculate from "../logic/calculate";
// import operate from './operate';

describe('calculate test', ()=> {
    test('It should clear value when click on AC', ()=> {
       const obj = {
        total: '5',
        next: '1',
        operation: '+',
      };
      const buttonName = 'AC';
      const expected = {
        total: null,
        next: null,
        operation: null,
      };
      const result = calculate(obj, buttonName);
      expect(result).toEqual(expected)
    })

    it('It should append a number after the operation', () => {
        const obj = {
            total: '5',
            next: '1',
            operation: '+'
        };
        const buttonName = '1'
        const expected = {
            total: '5',
            next:'11',
            operation: '+'
        };
        const result = calculate(obj, buttonName);
        expect(result).toEqual(expected)
    })

    it('It should calculate when clicking the equal sign', () => {
        const obj = {
            total: '5',
            next: '1',
            operation: '+'
        };
        const buttonName = '='
        const expected = {
            total: '6',
            next: null,
            operation: null
        };
        const result = calculate(obj, buttonName);
        expect(result).toEqual(expected)
    })

})