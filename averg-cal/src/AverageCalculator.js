import React, { useState } from 'react';

function AverageCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState('');
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newNumber = parseFloat(input);
    if (!isNaN(newNumber)) { // Check if the input is a valid number
      setNumbers([...numbers, newNumber]);
      setInput('');
    } else {
      alert('Please enter a valid number!');
    }
  };
  
  const average = numbers.length > 0 ? numbers.reduce((a, b) => a + b) / numbers.length : 0;
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button type="submit">Add Number</button>
      </form>
      {numbers.length > 0 && (
        <p>Average: {average.toFixed(2)}</p> // Display average with 2 decimal places
      )}
    </div>
  );
}
export default AverageCalculator;
