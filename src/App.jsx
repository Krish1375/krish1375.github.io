import React, { Suspense, lazy, useEffect } from 'react';
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
  useEffect(() => {
    const trackVisit = async () => {
      if (!sessionStorage.getItem('portfolio_visited')) {
        sessionStorage.setItem('portfolio_visited', 'true');
        try {
          // Fetch location data (free, no API key needed)
          const geoResponse = await fetch('https://ipapi.co/json/');
          const geoData = await geoResponse.json();
          
          const message = `
New Visit on Portfolio!

Location: ${geoData.city || 'Unknown'}, ${geoData.region || 'Unknown'}, ${geoData.country_name || 'Unknown'}
IP: ${geoData.ip || 'Unknown'}
Network: ${geoData.org || 'Unknown'}

Device Info:
Platform: ${navigator.platform || 'Unknown'}
User Agent: ${navigator.userAgent || 'Unknown'}
Time: ${new Date().toLocaleString()}
          `;

          // Send email via FormSubmit
          await fetch('https://formsubmit.co/ajax/krishjobs1375@gmail.com', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: "New Portfolio Visitor from " + (geoData.city || 'Unknown'),
              message: message
            })
          });
        } catch (error) {
          console.error("Tracking error:", error);
        }
      }
    };

    trackVisit();
  }, []);

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