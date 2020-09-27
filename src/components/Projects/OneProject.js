import React from "react";
import "./ProjectsCss.css";


const OneProject = ({ projectInfo }) => {
  return (
    <>
    
    <div className="oneProjectContainer">

        <div className="oneProject" >
           <img src={projectInfo.ProjectImage1.url} alt={projectInfo.ProjectName} />
          <ul>
           <li>
              <p><strong>{projectInfo.ProjectName} </strong></p>
            </li>
            <li>
              <p>{projectInfo.ProjectShortDescription} </p>
            </li>
          </ul>
        </div>
      
    </div>

    </>
  );
};

export default OneProject;
