import React from 'react';
import './Keys.css';

// eslint-disable-next-line react/prop-types
const Keys = ({ handleButtonClick }) => (
  <div>
    <div className="row">
      <button type="button" onClick={() => handleButtonClick('AC')}>
        AC
      </button>
      <button type="button" onClick={() => handleButtonClick('+/-')}>
        +/-
      </button>
      <button type="button" onClick={() => handleButtonClick('%')}>
        %
      </button>
      <button
        type="button"
        className="far-right"
        onClick={() => handleButtonClick('÷')}
      >
        ÷
      </button>
    </div>
    <div className="row">
      <button type="button" onClick={() => handleButtonClick('7')}>
        7
      </button>
      <button type="button" onClick={() => handleButtonClick('8')}>
        8
      </button>
      <button type="button" onClick={() => handleButtonClick('9')}>
        9
      </button>
      <button
        type="button"
        className="far-right"
        onClick={() => handleButtonClick('x')}
      >
        X
      </button>
    </div>
    <div className="row">
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button
        type="button"
        className="far-right"
        onClick={() => handleButtonClick('-')}
      >
        -
      </button>
    </div>
    <div className="row">
      <button type="button" onClick={() => handleButtonClick('1')}>
        1
      </button>
      <button type="button" onClick={() => handleButtonClick('2')}>
        2
      </button>
      <button type="button" onClick={() => handleButtonClick('3')}>
        3
      </button>
      <button
        type="button"
        className="far-right"
        onClick={() => handleButtonClick('+')}
      >
        +
      </button>
    </div>
    <div className="row">
      <button
        type="button"
        className="double-span"
        onClick={() => handleButtonClick('0')}
      >
        0
      </button>
      <button type="button" onClick={() => handleButtonClick('.')}>
        .
      </button>
      <button
        type="button"
        className="far-right"
        onClick={() => handleButtonClick('=')}
      >
        =
      </button>
    </div>
  </div>
);

export default Keys;
