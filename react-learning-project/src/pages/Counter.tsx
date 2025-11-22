import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import './Counter.css';

/**
 * Counter Page
 * Learn: useState, useLocalStorage custom hook, form handling
 */
const Counter: React.FC = () => {
  const [count, setCount] = useLocalStorage<number>('counter', 0);
  const [inputValue, setInputValue] = useState<string>('');

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const add = (value: number) => setCount((prev) => prev + value);

  const handleAddClick = () => {
    const num = parseInt(inputValue, 10);
    if (!isNaN(num)) {
      add(num);
      setInputValue('');
    }
  };

  return (
    <div className="counter-page">
      <div className="counter-container card">
        <h1>Counter App</h1>
        <p className="counter-description">
          This demonstrates useState and useLocalStorage hook. The value persists
          in localStorage!
        </p>

        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>

        <div className="counter-controls">
          <button className="btn btn-danger" onClick={decrement}>
            -1
          </button>
          <button className="btn btn-primary" onClick={increment}>
            +1
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
        </div>

        <div className="counter-advanced">
          <h3>Advanced Controls</h3>
          <div className="input-group">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a number"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddClick();
                }
              }}
            />
            <button className="btn btn-primary" onClick={handleAddClick}>
              Add
            </button>
          </div>
        </div>

        <div className="counter-info">
          <p>
            <strong>Tip:</strong> Reload the page and see the counter value
            persists!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
