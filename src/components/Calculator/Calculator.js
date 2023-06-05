import React from 'react';
import Calculations from '../Calculations/Calculations';
import Keys from '../Keys/Keys';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <Calculations />
    <div className="keys">
      <Keys />
    </div>
  </div>
);

export default Calculator;
