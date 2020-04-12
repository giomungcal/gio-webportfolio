import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HoveringImg from './components/HoveringImg';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Message from './components/Message';
import About from './components/About';


function App() {
  return (
    <div className="container" id="home">
      <Navbar />
      <Hero />
      <HoveringImg />
      <Skills />
      <Projects />
      <Message />
      <About />
    </div>
  );
}

export default App;
