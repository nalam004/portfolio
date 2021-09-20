import React from 'react'
import './Experience.css'

function Experience() {  
    return (
    <>

    <section className='green'>
      <div class="wrapper">
        <div class="center-line"></div>
        <div class="row row-1">
          <section>
            <i class="icon fas"></i>
            <div class="details">
              <h2 class="title">Tech Support Intern</h2>
              <h5 class="company">RF CUNY</h5>
              <span>Sep 2020 - Present</span>
            </div>
            <p>Troubleshoot hardware and software problems.</p>
          </section>  
        </div>
        
        <div class="row row-2">
          <section>
            <i class="icon fas"></i>
            <div class="details">
              <h2 class="title">Lead Web Developer</h2>
              <h5 class="company">Mott Haven Fridge Network</h5>
              <span>Jun 2021 - Aug 2021</span>
            </div>
            <p>Oversee junior web developers and evaluate their performance.</p>
          </section>
        </div>
        
        <div class="row row-1">
          <section>
            <i class="icon fas"></i>
            <div class="details">
              <h2 class="title">Software Engineering Intern</h2>
              <h5 class="company">Simons Foundation</h5>
              <span>Jan 2018 - Feb 2018</span>
            </div>
            <p>Implement changes to fix bugs on the company website using Eclipse, C++, and GitHub.</p>
          </section>
        </div>
      </div>
    </section>
    </>
  )
}

export default Experience
