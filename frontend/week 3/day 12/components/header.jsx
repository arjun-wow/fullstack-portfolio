import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, level }) {
  const Tag = `h${level}`;
  const style = {
    color: '#1a202c',
    borderBottom: level < 3 ? '2px solid #e2e8f0' : 'none',
    paddingBottom: '0.5rem',
    marginBottom: '1rem'
  };
  return <Tag style={style}>{title}</Tag>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Header.defaultProps = {
  level: 1,
};

export default Header;

