import React, { Suspense, lazy } from 'react';
import './App.css';
import SmoothScroll from './components/SmoothScroll';
const ScrollObject3D = lazy(() => import('./components/ScrollObject3D'));
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <SmoothScroll>
      <div className="App">
        <Suspense fallback={null}>
          <ScrollObject3D />
        </Suspense>
        <Header />
        <Hero />
        <About />
        <Journey />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;