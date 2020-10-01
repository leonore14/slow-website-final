import React from 'react';
import './ProjectsCss.css';
import OneProject from './OneProject';
import Footer from '../Footer/Footer';
import '../Footer/FooterCss.css';
import { Link } from 'react-router-dom';
import NavProjects from '../testNewNavProjects/NavProjects';


const ProjectsPage = ({ projects }) => {

    const sortedProjects = projects.sort((a, b) => {
        return a.id - b.id
    })

        return(
            <>

            <div className="projectsFadeIn">

            <NavProjects />

            <div>

            <div className='oneProjectTopPage'>   
            </div>

            <div className="projectTitle">
                    <h5>LIFESTYLE</h5>
                    <h5>FASHION</h5>
                    <h5>DESIGN</h5>
                    <h5>EDITORIAL</h5>
                    <h5>MUSIC</h5>
            </div>

            <div className="projects">
                {sortedProjects.map(project => 
                    <Link className="oneProjectLink" to={`/project/${project.id}`} key={project.id} >
                        <OneProject 
                        projectInfo={project}
                    />
                    </Link>
                )}
            </div>

            <div className='oneProjectBottomPage'>
            </div>

            </div>

            <Footer />

            </div>
            </>
            
        )
    
}


export default ProjectsPage ;