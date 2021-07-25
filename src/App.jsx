import React, { useRef } from 'react'

import AppBar from './components/AppBar';
import Cover from './components/Cover';
import './App.scss';
import AboutSection from './components/About';
import SkillSection from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(props) {
  const contactRef = useRef(null)
  const experienceRef = useRef(null)
  const skillRef = useRef(null)
  const aboutRef = useRef(null)
  const scroll = (currentSection) => {
    switch (currentSection) {
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'skill':
        skillRef.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'experience':
        experienceRef.current.scrollIntoView({ behavior: 'smooth' })
        break;
      default:
        return;
    }
  }
  return (
    <div className="App">
      <AppBar callback={scroll} ref={contactRef}/>
      {/*<button onClick={() => executeScroll()}>a</button>*/}
      <div className="page-content">
        <Cover/>
        <AboutSection ref={aboutRef}/>
        <SkillSection ref={skillRef}/>
        <Experience ref={experienceRef}/>
        <Contact ref={contactRef}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
