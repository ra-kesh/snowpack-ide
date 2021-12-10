import React, { useState, useEffect } from 'react';
import './App.css';
import CodeSandbox from './components/code-sandbox';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <h1>Run React</h1>
      <CodeSandbox />
    </div>
  );
}

export default App;
