import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Stats from './components/Stats';

function App() {
  return (
    <>
      <Home />
      <Stats />
    </>
  );
}

export default App;
