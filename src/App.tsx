import './app.scss';
import React, { useState, ChangeEvent } from 'react';
import CancelableActionButton from './components/cancelableActionButton.component';

function App() {
  const [count, setCount] = useState(0);
  const [cancelDuration, setCancelDuration] = useState(5000);
  const [actionText, setActionText] = useState('Send Important File');
  const [cancelText, setCancelText] = useState('Cancel Sending');

  function clickDemo(): void {
    setCount((c) => c + 1);
  }

  function onDurationChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value || '100';
    const newDuration = parseInt(val, 10);
    setCancelDuration(newDuration);
  }

  function onActionTextChange(e: ChangeEvent<HTMLInputElement>) {
    setActionText(e.target.value ?? '');
  }

  function onCancelTextChange(e: ChangeEvent<HTMLInputElement>) {
    setCancelText(e.target.value ?? '');
  }

  return (
    <div className='app'>
      <h1 className='app-header'>
        Cancelable Action Button Demo
      </h1>
      <div className='app-body'>
        <p className='app-text'>
          Welome to the demo for the Cancelable Action Button. Hit the button below to try it out, or change one of the fields below to explore the props of the button.
        </p>

        <CancelableActionButton onClick={clickDemo} cancelDuration={cancelDuration} actionText={actionText} cancelText={cancelText} />
        <p className='app-text'>
          The important file has been sent {count} time(s).
        </p>

        <h2 className='app-subheader'>Props</h2>

        <h3>Cancel Duration</h3>
        <p>The amount of time in ms the user can cancel the initiated action.</p>
        <code className='app-prop-block app-code'>(prop) cancelDuration: number</code>
        <input className='app-prop-block' type='number' step='100' min='100' onChange={onDurationChange} value={cancelDuration} />

        <h3>Action Text</h3>
        <p>The label of the button when the user can initiate the action.</p>
        <code className='app-prop-block app-code'>(prop) actionText: string</code>
        <input className='app-prop-block' type='text' onChange={onActionTextChange} value={actionText} />

        <h3>Cancel Text</h3>
        <p>The label of the button when the user can cancel the initiated action.</p>
        <code className='app-prop-block app-code'>(prop) cancelText: string</code>
        <input className='app-prop-block' type='text' onChange={onCancelTextChange} value={cancelText} />

        <h3>onClick</h3>
        <p>The action of the button.</p>
        <code className='app-prop-block app-code'>(prop) onClick: function: (e: React.MouseEvent) =&gt; void;</code>
      </div>
    </div>
  );
}

export default App;
