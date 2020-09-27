import React, { Component } from 'react';
import './ProjectsCss.css';
import OneFullProject from '../OneFullProject';



class FullProjectPage extends Component {

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
            <div className='oneFullProjectTopPage'>   
            </div>

            <div className="projects">
                {this.state.data.map(project => 
                    <OneFullProject
                        image1={project.ProjectImage1.url} 
                        name={project.ProjectName} 
                        longDescription={project.ProjectLongDescription} 
                        image2={project.ProjectImage2.url} 
                        image3={project.ProjectImage3.url}
                        image4={project.ProjectImage4.url} 
                        image5={project.ProjectImage5.url} 
                    />
                )}
            </div>

            <div className='oneFullProjectBottomPage'>
            </div>
            </>
            
        )
    
    }

}


export default FullProjectPage ;