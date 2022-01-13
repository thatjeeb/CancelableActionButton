import './app.scss';
import React, { useState } from 'react';
import CancelableActionButton from './components/cancelableActionButton.component';

function App() {
  const [count, setCount] = useState(0);

  function clickDemo(): void {
    setCount((c) => c + 1);
  }

  return (
    <div className="app">
      <CancelableActionButton onClick={clickDemo} />

      <p className='app-text'>
        The important file has been sent {count} times.
      </p>
    </div>
  );
}

export default App;
