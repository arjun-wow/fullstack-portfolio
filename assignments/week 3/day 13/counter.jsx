import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSetCount = () => {
    const newCount = parseInt(inputValue, 10);
    if (!isNaN(newCount)) {
      setCount(newCount);
    }
    setInputValue("");
  };

  return (
    <div className="counter-card">
      <h1>Counter</h1>
      <div className="count-display">{count}</div>
      <div className="button-group">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="input-group">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Set custom value"
        />
        <button onClick={handleSetCount}>Set</button>
      </div>
    </div>
  );
}

export default Counter;
