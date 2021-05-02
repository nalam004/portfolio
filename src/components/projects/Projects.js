import React from 'react'


function Projects() {  
    return (
    <>
        <section className='project-section'>
            <div class="project-header">
                <h1>Projects</h1>  
            </div>
            
            <div class="project-container">
                <div class="row feature-item">
                    <div class="col-lg-6 wow fadeInUp">
                        <img src="img/hive.png" class="img-fluid" alt="" />
                    </div>
                <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                    <h4>The Hive</h4>
                    <p>
                    The Hive is a multi-user system built for anyone in search of joining or
                    creating groups to collaborate on a project together. This is achieved
                    by a web interface that connects users from across the world that share
                    similar interests and inspire others with the projects already created.
                    <a href="https://github.com/nalam004/The-Hive" 
                    class="button">Learn more</a>
                    </p>
                    
                </div>
                </div>

                <div class="row feature-item mt-5 pt-5">
                    <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
                        <img src="img/vestigia.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                        <h4>Vestigia</h4>
                        <p>
                        Vestigia is a social media platform that helps keep track of a user's application
                        status during the hiring process as well as enables them to share the details
                        of these jobs with other users. This simultaneously helps users discover new
                        job opportunities that their friends share.
                        <a href="https://github.com/nalam004/Vestigia" 
                            class="button">Learn more</a>
                        </p>
                    </div> 
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Projects