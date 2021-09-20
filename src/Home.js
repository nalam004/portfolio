import React from 'react';
import './Home.css';
import hero from './images/hero.svg'
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
      
      <main class="hero">
        <div class="hero-container">
            <div> <img src={hero} alt="" class="hero-img" /> </div>
        </div>
      </main>
          
      <About />  
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
