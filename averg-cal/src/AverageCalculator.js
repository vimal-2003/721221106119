import React, { useState } from 'react';
   function AverageCalculator() {
      const [numbers, setNumbers] = useState([]);
       const [input, setInput] = useState('');
       const handleInputChange = (event) => {
       setInput(event.target.value);
     };
     const handleSubmit = (event) => {
       event.preventDefault();
       setNumbers([...numbers, parseFloat(input)]);
       setInput('');
     };
     const average = numbers.reduce((a, b) => a + b, 0) / numbers.length || 0;
     return (
       <div>
         <form onSubmit={handleSubmit}>
        <input type="number" value={input} onChange={handleInputChange} />
         <button type="submit">Add Number</button>
         </form>
         <p>Average: {average}</p>
       </div>
     );
   }
export default AverageCalculator;