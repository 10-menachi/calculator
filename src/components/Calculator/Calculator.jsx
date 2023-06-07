import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import Calculations from '../Calculations/Calculations';
import Keys from '../Keys/Keys';
import './Calculator.css';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(data, buttonName);
    setData({ ...data, ...result });
  };
  const res = data.next || data.total || '0';
  return (
    <div className="calculator">
      <Calculations res={res} />
      <div className="keys">
        <Keys handleButtonClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
