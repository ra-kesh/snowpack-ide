import React, { useState, useEffect } from 'react';
import './App.css';
import CodeSandbox from './components';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <div
        style={{
          height: '3rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <h1>Run React ..</h1>
      </div>

      <CodeSandbox />
      <div
        style={{
          fontSize: 'medium',
          fontWeight: 700,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '.3rem 1rem 0',
        }}
      >
        v0.001 - for desktops
      </div>
    </div>
  );
}

export default App;
