import React from 'react';
import PropTypes from 'prop-types';

function Card({ children }) {
  const style = {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '2rem auto',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

