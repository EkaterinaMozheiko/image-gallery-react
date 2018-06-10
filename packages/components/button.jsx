import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

const Button = ({ className, type, onClick, value }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >{value}
    </button>
  );
};

Button.propTypes = propTypes;
export default Button;
