// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Calculations.css';

const Calculations = ({ res }) => (
  <div className="pallete">
    <h2>{res}</h2>
  </div>
);

Calculations.propTypes = {
  res: PropTypes.string.isRequired,
};

export default Calculations;
