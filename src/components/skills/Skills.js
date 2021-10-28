import React from 'react'
import './Skills.css';

function Skills() {  
    return (
    <>
        <section id='skills' className='green'>

            <div className="skills-container">
                
                <div className="skills-box">
                    <div className="skills-title">
                        <div className="skills-img">
                            <img src="https://img.icons8.com/wired/512/F7F4E6/html-5.png" alt="" className="skills-icons" />
                        </div>
                        <h4>HTML5/CSS3</h4>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-title">
                        <div className="skills-img">
                            <img src="https://img.icons8.com/wired/512/F7F4E6/javascript-logo.png" alt="" className="skills-icons" />
                        </div>
                        <h4>JavaScript</h4>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-title">
                        <div className="skills-img">
                            <img src="https://img.icons8.com/wired/512/F7F4E6/python.png" alt="" className="skills-icons" />
                        </div>
                        <h4>Python</h4>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-title">
                        <div className="skills-img">
                            <img src="https://img.icons8.com/wired/512/F7F4E6/react.png" alt="" className="skills-icons" />
                        </div>
                        <h4>ReactJS</h4>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-title">
                        <div className="skills-img">
                            <img src="https://img.icons8.com/wired/512/F7F4E6/adobe-photoshop.png" alt="" className="skills-icons" />
                        </div>
                        <h4>Adobe Photoshop</h4>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-title">
                        <div className="skills-img">    
                            <img src="https://img.icons8.com/carbon-copy/512/F7F4E6/figma.png" alt="" className="skills-icons"/>
                        </div>
                        <h4>Figma</h4>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-title">
                        <div className="skills-img">
                            <img src="https://img.icons8.com/wired/512/F7F4E6/github.png" 
                                alt="" 
                                className="skills-icons" /> 
                        </div>
                        <h4>Version Control</h4>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-title">
                        <div className="skills-img">
                            <img src="https://img.icons8.com/wired/512/F7F4E6/visual-studio-code-2019--v2.png" 
                                alt="" 
                                className="skills-icons" /> 
                        </div>
                        <h4>Visual Studio</h4>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Skills