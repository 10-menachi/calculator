// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';
import './Keys.css';

const Keys = ({ handleButtonClick }) => {
  const rows = {
    row1: ['AC', '+/-', '%', '÷'],
    row2: ['7', '8', '9', 'x'],
    row3: ['4', '5', '6', '-'],
    row4: ['1', '2', '3', '+'],
    row5: ['0', '.', '='],
  };
  return (
    <div>
      <div className="row">
        {rows.row1.map((item, index) => (
          <button
            type="button"
            key={item}
            onClick={(e) => {
              handleButtonClick(e.target.textContent);
            }}
            className={index === rows.row1.length - 1 ? 'far-right' : null}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="row">
        {rows.row2.map((item, index) => (
          <button
            type="button"
            key={item}
            onClick={(e) => {
              handleButtonClick(e.target.textContent);
            }}
            className={index === rows.row2.length - 1 ? 'far-right' : null}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="row">
        {rows.row3.map((item, index) => (
          <button
            type="button"
            key={item}
            onClick={(e) => {
              handleButtonClick(e.target.textContent);
            }}
            className={index === rows.row3.length - 1 ? 'far-right' : null}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="row">
        {rows.row4.map((item, index) => (
          <button
            type="button"
            key={item}
            onClick={(e) => {
              handleButtonClick(e.target.textContent);
            }}
            className={index === rows.row4.length - 1 ? 'far-right' : null}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="row">
        {rows.row5.map((item, index) => {
          let classNames = '';
          if (index === rows.row5.length - 1) {
            classNames = 'far-right';
          }
          if (item === '0') {
            classNames += ' double-span';
          }
          return (
            <button
              type="button"
              key={item}
              onClick={(e) => {
                handleButtonClick(e.target.textContent);
              }}
              className={classNames}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Keys.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Keys;
