// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';
import Row from '../Rows/Row';
import './Keys.css';

const Keys = ({ handleButtonClick }) => {
  const rows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  return (
    <div>
      {rows.map((row) => (
        <Row row={row} key={row} handleButtonClick={handleButtonClick} />
      ))}
    </div>
  );
};

Keys.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Keys;
