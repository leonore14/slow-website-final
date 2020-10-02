import React from "react";
import "./ProjectsCss.css";


const OneProject = ({ projectInfo }) => {
  return (
    <>
    

        <div className="oneProject" >
            <div className="oneProjectImage">
              <img className="oneProjImgHover" src={projectInfo.ProjectImage1.url} alt={projectInfo.ProjectName} />
              
                <div className="content">
                { projectInfo.ProjectImage4 && 
                  <img className="oneProjImgHover2" src={projectInfo.ProjectImage4.url} alt={projectInfo.ProjectName} />
                }
                </div>
              
            </div>
            <div className="oneProjectText">
              <p><strong>{projectInfo.ProjectName} </strong></p>
              <p>{projectInfo.ProjectShortDescription} </p>
            </div>
            
        </div>
    
    </>
  );
};

export default OneProject;
