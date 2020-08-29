import React, { Component } from 'react';
import './ProjectsCss.css';
import OneProject from './OneProject';

class ProjectsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data : []
        };
      }

    componentDidMount() {
        this.getProject();
    }

    getProject = () => {
        fetch (`https://enigmatic-forest-39099.herokuapp.com/projects`)
        .then(response => response.json())
        .then(data => {
            this.setState({data})
        })
    }
    

    render() {

        return(
            <>
            <div className='oneProjectTopPage'>   
            </div>

            <div className="projects">
                {this.state.data.map(project => 
                    <OneProject
                        image1={project.ProjectImage1.url} 
                        name={project.ProjectName} 
                        shortDescription={project.ProjectShortDescription} 
                    />
                )}
            </div>

            <div className='oneProjectBottomPage'>
            </div>
            </>
            
        )
    
    }

}


export default ProjectsPage ;