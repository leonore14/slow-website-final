import React from "react";
import "./ProjectsCss.css";


const OneFullProject = ({ routeProps, projects }) => {
  
  const matchProject = projects.find(project => (
    +routeProps.match.params.id === project.id
  ))


  return (
    
    <div className="oneFullProjectContainer">

    {
      !matchProject ?
          <p>loading..........</p>
          :
          <>

    
        <img className="oneFullProjectImage1" src={matchProject.ProjectImage1.formats.large.url} alt={matchProject.ProjectName} />

        <div className="oneFullProjectLongDescription">
            <div className="oneFullProjectText">
              <p>{matchProject.ProjectLongDescription}</p>
              <div className='oneFullProjectDash'></div>
            </div>
        </div>

        <img className="oneFullProjectImage2" src={matchProject.ProjectImage2.formats.large.url} alt={matchProject.ProjectName} />

        <img className="oneFullProjectImage3" src={matchProject.ProjectImage3.formats.large.url} alt={matchProject.ProjectName} />
      
        <img className="oneFullProjectImage4" src={matchProject.ProjectImage4.formats.large.url} alt={matchProject.ProjectName} />

        <img className="oneFullProjectImage5" src={matchProject.ProjectImage5.formats.large.url} alt={matchProject.ProjectName} />
        
        </>

    }
      
    </div>

  )
};

export default OneFullProject;