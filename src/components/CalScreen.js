import React, { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorScreen = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const handleButtonClick = (event) => {
    const result = calculate({ total, next, operation }, event.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <main className="container">
      <div className="calculator">
        <section className="display">
          <p className="displayvalue">
            {total}
            {operation}
            {next}
          </p>
        </section>
        <section className="keyboard">
          <button type="button" className="key key-num key-ac" onClick={handleButtonClick}>AC</button>
          <button type="button" className="key key-num key-plus-minus" onClick={handleButtonClick}>+/-</button>
          <button type="button" className="key key-num key-module" onClick={handleButtonClick}>%</button>
          <button type="button" className="key key-divide operand" onClick={handleButtonClick}>÷</button>
          <button type="button" className="key key-num sev" onClick={handleButtonClick}>7</button>
          <button type="button" className="key key-num eight" onClick={handleButtonClick}>8</button>
          <button type="button" className="key key-num nine" onClick={handleButtonClick}>9</button>
          <button type="button" className="key key-times operand" onClick={handleButtonClick}>x</button>
          <button type="button" className="key key-num four" onClick={handleButtonClick}>4</button>
          <button type="button" className="key key-num five" onClick={handleButtonClick}>5</button>
          <button type="button" className="key key-num six" onClick={handleButtonClick}>6</button>
          <button type="button" className="key key-minus operand" onClick={handleButtonClick}>-</button>
          <button type="button" className="key key-num fone" onClick={handleButtonClick}>1</button>
          <button type="button" className="key key-num two" onClick={handleButtonClick}>2</button>
          <button type="button" className="key key-num three" onClick={handleButtonClick}>3</button>
          <button type="button" className="key key-plus operand" onClick={handleButtonClick}>+</button>
          <button type="button" className="key key-num zero" onClick={handleButtonClick}>0</button>
          <button type="button" className="key key-num dot" onClick={handleButtonClick}>.</button>
          <button type="button" className="key key-equal operand" onClick={handleButtonClick}>=</button>
        </section>
      </div>
    </main>
  );
};



export default CalculatorScreen;
