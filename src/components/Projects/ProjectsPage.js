import React, { Component } from 'react';
import './ProjectsCss.css';
import OneProject from './OneProject';

class ProjectsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data : null
        };
        this.getProject = this.getProject.bind(this);
      }

    componentDidMount() {
        this.getProject();
    }

    getProject = () => {
        fetch (`https://guarded-peak-00357.herokuapp.com/projects`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                image1 : data[0].ProjectImage1,
                name : data[0].ProjectName,
                shortDescription : data[0].ProjectShortDescription,  
        }
        )}
        )
    }
    

    render() {

        return(
            <div className="projects">
                <OneProject image1={this.state.image1} name={this.state.name} shortDescription={this.state.shortDescription} />
            </div>
        )
    
    }

}


export default ProjectsPage ;