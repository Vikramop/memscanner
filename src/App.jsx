import { useState } from 'react';

import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Stats from './components/Stats';
import Setup from './components/Setup';
import Helper from './components/Helper';
import Protocol from './components/Protocol';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Home />
      <Stats />
      <Setup />
      {/* <Helper />
      <Protocol /> */}
      <Socials />
      <Footer />
    </>
  );
}

export default App;
