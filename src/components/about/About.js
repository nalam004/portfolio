import React from 'react'
import './About.css';
import profile from '../../images/profile.png'
import infp from '../../images/infp.png'
import pisces from '../../images/pisces.png'
import slytherin from '../../images/slytherin.png'

function About() {  
    return (
    <>
      <section className='about-section'>
        <div className='about-container'>
          <img
            width={80}
            height={80}
            className='profile-pic'
            src={profile}
            alt='profile'
          />
          <h1>About Me</h1>
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
          <div className='personality-types'>
            <img className='icon' src={pisces} alt='pisces' />
            <img className='icon' src={infp} alt='infp' />
            <img className='icon' src={slytherin} alt='ravenclaw' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About