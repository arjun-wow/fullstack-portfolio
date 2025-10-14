import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, type }) {
  const baseStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const primaryStyle = {
    backgroundColor: '#3182ce',
    color: 'white',
  };

  const secondaryStyle = {
    backgroundColor: '#e2e8f0',
    color: '#2d3748',
  };

  const style = {
    ...baseStyle,
    ...(type === 'primary' ? primaryStyle : secondaryStyle),
  };

  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;

