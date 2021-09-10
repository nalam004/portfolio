import React from 'react'
import './About.css';
import profile from '../../images/profile.png'

function About() {  
    return (
    <>
      <section id='about'>
        <div className='container'>
          <div className="section-heading">
            <h1>About Me</h1>
          </div>
          
          <img
            width={80}
            height={80}
            className='profile-pic'
            src={profile}
            alt='profile'
          />
          <p className='text'>
            Hello, my name is Niharika Alam and I like coding and cats! 
            When I am not writing code or creating graphics on my free time, 
            I like to take nature walks and watch videos of animals on YouTube. 
            Pandas are my favorite &#128060; Being a woman in computer science 
            has bought my attention to the gap between technology and the natural world. 
            This has inspired me to one day bridge this gap by creating technologies 
            that will contribute to helping the environment. I also enjoy reading and 
            writing short stories often.
          </p>
          <button className='btn'>Resume</button>
        </div>
      </section>
    </>
  )
}

export default About