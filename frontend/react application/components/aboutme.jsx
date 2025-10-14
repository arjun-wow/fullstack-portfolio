import React from 'react';

function AboutMe({ name, age, hobby }) {
  const style = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: '2rem auto',
    textAlign: 'center'
  };

  return (
    <div style={style}>
      <h2>About {name}</h2>
      <p>Age: {age}</p>
      <p>Favorite Hobby: {hobby}</p>
    </div>
  );
}

export default AboutMe;
