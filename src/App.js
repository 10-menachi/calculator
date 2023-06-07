import React, { useEffect } from 'react';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/Quote';

const App = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Calculator />
      <Quote />
    </div>
  );
};

export default App;
