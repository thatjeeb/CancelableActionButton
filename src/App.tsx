import React, { useState } from 'react';
import './App.scss';
import CancellableActionButton from './components/cancellableActionButton.component';

function App() {
  const [count, setCount] = useState(0);

  function clickDemo(): void {
    setCount((c) => c + 1);
  }

  return (
    <div className="App">
      <CancellableActionButton onClick={clickDemo} />

      <p className='App-text'>
        The important file has been sent {count} times.
      </p>
    </div>
  );
}

export default App;
