import React from 'react';
import './ProjectsCss.css';
import OneProject from './OneProject';
import Footer from '../Footer/Footer';
import '../Footer/FooterCss.css';
import { Link } from 'react-router-dom';
import FullPageBurger from '../FullBurger/FullPageBurger';


const ProjectsPage = ({ projects }) => {


        return(
            <>

            <FullPageBurger />

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
                {projects.map(project => 
                    <Link className="oneProjectLink" to={`/project/${project.id}`}>
                        <OneProject 
                        projectInfo={project}
                        key={project.id}
                    />
                    </Link>
                )}
            </div>

            <div className='oneProjectBottomPage'>
            </div>

            </div>

            <Footer />

            </>
            
        )
    
}


export default ProjectsPage ;