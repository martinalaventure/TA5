import React, { useState } from 'react';
import './App.css';

function App() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  }

  return (    
    <div className="App">
      <button onClick={toggleText}>{showText ? "Ocultar texto":"Mostrar texto"}</button>
      <div class="buttondiv">
        {showText && <p>Este es el texto que se muestra y se oculta</p>}
      </div>
    </div>
  );
}

export default App;
