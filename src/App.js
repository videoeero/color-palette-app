import React from 'react';
import './App.css';
import Palette from './component/Palette';
import seedColors from './seedColors.js';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <div className='App'>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
