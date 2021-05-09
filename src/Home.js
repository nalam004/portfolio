import React from 'react';
import './Home.css';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />  
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
