import PropTypes from 'prop-types';
import React from 'react';

const Row = ({ row, handleButtonClick }) => (
  <div className="row">
    {row.map((item, index) => {
      let classNames = '';
      if (index === row.length - 1) {
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
);

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default Row;
