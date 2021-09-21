import React from 'react'
import './Experience.css'

function Experience() {  
    return (
    <>
    <section id="experience">
		<div className='container'> 
			<div className="section-heading"> <h1>Experience</h1> </div>
			<div id="timeline">
	
				<div class="timeline-block">
					<div class="timeline-img"></div>
					<div class="timeline-content">
						<h2>Tech Support Intern</h2>
        				<div class="timeline-content-info">
          					<span class="timeline-title">RF CUNY</span>
							<span class="timeline-date">Sep 2020 - Present</span>
        				</div>
						<p>Troubleshoot hardware and software problems.</p>
					</div>
				</div>
				
				<div class="timeline-block">
					<div class="timeline-img"></div>
					<div class="timeline-content">
						<h2>Lead Web Developer</h2>
        				<div class="timeline-content-info">
          					<span class="timeline-title">Mott Haven Fridge</span>
							<span class="timeline-date">June 2021 - Aug 2021</span>
   			     		</div>
						<p>Oversee junior web developers and evaluate their performance.</p>
					</div>
				</div>

				<div class="timeline-block">
					<div class="timeline-img"></div>
					<div class="timeline-content">
						<h2>Software Engineering Intern</h2>
        				<div class="timeline-content-info">
          					<span class="timeline-title">Simons Foundation</span>
 							<span class="timeline-date">Jan 2018 - Feb 2018</span>
        				</div>
						<p>Implement changes to fix bugs on the company website using Eclipse, C++, and GitHub.</p>
					</div>
				</div> 
			</div>
		</div>
    </section>
    </>
  )
}

export default Experience
