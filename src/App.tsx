import React, { useState } from 'react';
import './App.css';

/**
 * Import des composants
 */
import Header from './Header';

function App() {
  // const counter = useState(0);
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    // On attribue une nouvelle valeur à counter
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Hello World"/>

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Plus 1</button>
    </div>
  );
}

export default App;
