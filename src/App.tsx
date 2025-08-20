import React from 'react';
import './App.css';
import { Button } from './stories/Button';

import InputField from './components/InputField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-col gap-4">
        <Button label="Click me" />
        <InputField placeholder="Enter text" />
        </div>
      </header>
    </div>
  );
}

export default App;