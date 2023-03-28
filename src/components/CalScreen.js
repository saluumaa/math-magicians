import React from 'react';

const CalculatorScreen = () => (
  <main className="container">
    <div className="calculator">
      <section className="display">
        <input type="text" placeholder="0" />
      </section>
      <section className="keyboard">
        <div className="key key-num key-ac">AC</div>
        <div className="key key-num key-plus-minus">+/-</div>
        <div className="key key-num key-module">%</div>
        <div className="key key-divide operand">÷</div>
        <div className="key key-num sev">7</div>
        <div className="key key-num eight">8</div>
        <div className="key key-num nine">9</div>
        <div className="key key-times operand">x</div>
        <div className="key key-num four">4</div>
        <div className="key key-num five">5</div>
        <div className="key key-num six">6</div>
        <div className="key key-minus operand">-</div>
        <div className="key key-num fone">1</div>
        <div className="key key-num two">2</div>
        <div className="key key-num three">3</div>
        <div className="key key-plus operand">+</div>
        <div className="key key-num zero">0</div>
        <div className="key key-num dot">.</div>
        <div className="key key-equal operand">=</div>
      </section>
    </div>
  </main>
);

export default CalculatorScreen;
