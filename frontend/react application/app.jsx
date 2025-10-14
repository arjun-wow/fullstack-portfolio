import React from 'react';
import AboutMe from './components/aboutme.jsx';

function App() {
  return (
    <div>
      <AboutMe 
        name="Alex" 
        age={25} 
        hobby="playing guitar" 
      />
    </div>
  );
}

export default App;
