// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';
import './Keys.css';

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
      <button type="button" onClick={() => handleButtonClick('4')}>
        4
      </button>
      <button type="button" onClick={() => handleButtonClick('5')}>
        5
      </button>
      <button type="button" onClick={() => handleButtonClick('6')}>
        6
      </button>
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

Keys.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Keys;
