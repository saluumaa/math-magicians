import calculate from "../logic/calculate";
// import operate from './operate';

describe('calculate test', ()=> {
    test('It should clear value when click on AC', ()=> {
        if(butttonName === 'AC'){
            expect(total).toBe(null)
        }
    })
})