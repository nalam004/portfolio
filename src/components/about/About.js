import React from 'react'
import Resume from './Niharika Alam Resume.pdf'

function About() {  
    return (
    <>
      <section id='about'>
        <div className='container'>
          <div className="section-heading">
            <h1>About Me</h1>
          </div>
        
          
            <p className='text'>
              👋 Hi, my name is Niharika and I like coding and cats! 👩🏻‍🎓 Currently a senior at CCNY 
              pursuing a Bachelor's in Computer Science and Chief Marketing Officer of the Women 
              in Computer Science club.
            </p>
            <p className='text'>
              👩‍💻 Bangladeshi-American and New Yorker passionate about front-end development,
              responsive web design, and UX/UI design. 
            </p>
            <p className='text'>
              💖 I had the privilege of interning as a software engineer, tech support, and 
              web developer and have decided that web development, specifically front-end, is where 
              my heart lies. I enjoy creating user interfaces and designs that captivate!
            </p>
            <p className='text'> 
              &#128060; When I am not coding or creating graphics on my free time, 
              I like to take nature walks and watch videos of animals. Pandas are my favorite!
              📚 I also enjoy reading and writing short stories. 
            </p>
            <a href={Resume} className='btn' download>Resume</a>
          
        </div>
      </section>
    </>
  )
}

export default About