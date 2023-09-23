import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Stats from './components/Stats';
import Setup from './components/Setup';

function App() {
  return (
    <>
      <Home />
      <Stats />
      <Setup />
    </>
  );
}

export default App;
