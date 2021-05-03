import React from 'react';
import './Home.css';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />  
      <Skills />
      <Projects />
      <Experience />
      <section id="contact-me">
      <dl class="alt">
        <dt>Email</dt>
        <dd><a href="mailto:nalam003@citymail.cuny.edu">Email Me</a></dd>
        <dt>LinkedIn</dt>
        <dd><a href="https://www.linkedin.com/in/niharika-alam-7ab76b1bb/">Add me on Linkedin</a></dd>
      </dl>
    </section>
    <p class="copyright">&copy; 2020 Niharika Alam. All Rights Reserved</p>
    </>
  );
}

export default Home;
