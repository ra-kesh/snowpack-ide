import React, { useState, useEffect } from 'react';
import './App.css';
import CodeSandbox from './components';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <div style={{ paddingLeft: '1rem', height: '3.5rem' }}>
        <h1>Run React ..</h1>
      </div>

      <CodeSandbox />
      <div
        style={{
          paddingLeft: '1rem',
          fontSize: 'medium',
          fontWeight: 700,
          marginTop: '.5rem',
        }}
      >
        v0.001 - for desktops
      </div>
    </div>
  );
}

export default App;
