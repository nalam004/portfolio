import React from 'react';
import './Home.css';
import logo from './images/logo.svg'
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';

function Home() {
  return (
    <>
      <Nav />
      
      <div className='hero-container'>
            <img className='logo' src={logo} alt='logo'/>
      </div>
      
      <About />  
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
