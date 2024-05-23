import React, { useState } from 'react';
import './App.css';
import level1Image from './images/level_1.jpg'; // Import the "level_1.jpg" image

function Level1() {
  return (
    <div className="App" style={{ backgroundImage: `url(${level1Image})` }}>
      <header className="App-header">
        {/* Add any additional content or functionality specific to Level 1 */}
      </header>
    </div>
  );
}

export default Level1;
