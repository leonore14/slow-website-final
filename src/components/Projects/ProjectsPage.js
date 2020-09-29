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

            <div className="ProjectTitle">
                    <h2>DiscoverOurProjects.</h2>
            </div>

            <div className="projects">
                {projects.map(project => 
                    <Link to={`/project/${project.id}`}>
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