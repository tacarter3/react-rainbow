import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState(['violet', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  const addColor = (newColor) => {
    // checks to validate color entered is a recognized CSS color
        if(CSS.supports("color", newColor)) {
         setColors([...colors, newColor])

      } else {
        return colors
      }
  }

  return (
    <div className="App">
      <div className="container">
        {colors.map((color, i) =>
          <ColorBlock key={i} color={color} />
        )}
      </div>
      <ColorForm addColor={addColor} />
    </div>
  );
  
}

export default App;
