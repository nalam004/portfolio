import React from 'react'
import './Experience.css'

function Experience() {  
    return (
    <>
    <section id="experience">
		<div className='container'> 
			<div className="section-heading"> <h1>Experience</h1> </div>
			<div id="timeline">

				<div className="timeline-block">
					<div className="timeline-img"></div>
					<div className="timeline-content">
						<h2>Front-end Developer</h2>
        				<div className="timeline-content-info">
          					<span className="timeline-title">Savas Labs</span>
							<span className="timeline-date">Feb 2022 - Present</span>
        				</div>
						<p>Build functional and appealing interfaces for web and mobile-based applications
							using popular CMS frameworks like Drupal or Wordpress. Translating design comps 
							and wireframes into semantic HTML + CSS code that is consistent across all browsers 
							and platforms.</p>
					</div>
				</div>
	
				<div className="timeline-block">
					<div className="timeline-img"></div>
					<div className="timeline-content">
						<h2>Tech Support Intern</h2>
        				<div className="timeline-content-info">
          					<span className="timeline-title">RF CUNY</span>
							<span className="timeline-date">Sep 2020 - Feb 2022</span>
        				</div>
						<p>Assist in the setup of new computer equipment and installing software,
							configure wireless devices to access the DOE network onsite, and
							troubleshoot hardware and software problems.</p>
					</div>
				</div>
				
				<div className="timeline-block">
					<div className="timeline-img"></div>
					<div className="timeline-content">
						<h2>Lead Web Developer</h2>
        				<div className="timeline-content-info">
          					<span className="timeline-title">Mott Haven Fridge</span>
							<span className="timeline-date">June 2021 - Aug 2021</span>
   			     		</div>
						<p>Oversaw and set timelines and tasks to a team of 4 web developers,
							identified user and system requirements for company website, and
							refined website specifications and resolved technical issues.
						</p>
					</div>
				</div>

				<div className="timeline-block">
					<div className="timeline-img"></div>
					<div className="timeline-content">
						<h2>Software Engineering Intern</h2>
        				<div className="timeline-content-info">
          					<span className="timeline-title">Simons Foundation</span>
 							<span className="timeline-date">Jan 2018 - Feb 2018</span>
        				</div>
						<p>Participated in 10+ agile workflow meetings with 6 software engineers, 
							worked alongside 3 specialists in IT to learn how to maintain MAC operating systems,
							and implemented changes to company website using Eclipse C++ and git.</p>
					</div>
				</div> 
			</div>
		</div>
    </section>
    </>
  )
}

export default Experience
