import React from "react";
import "./ProjectsCss.css";


const OneFullProject = ({ image1, name, longDescription, image2, image3, image4, image5 }) => {
  return (
    <>

    <div className="oneFullProjectContainer">
    
        <div className="oneFullProjectImage1" styles={{ backgroundImage: `url(${image1})` }} alt={name}>
        </div>

        <div className="oneFullProjectLongDescription">
            <p>{longDescription} </p>
        </div>

        <div className="oneFullProjectImage2" styles={{ backgroundImage: `url(${image2})` }} alt={name}>
        </div>

        <div className="oneFullProjectImage3" styles={{ backgroundImage: `url(${image3})` }} alt={name}>
        </div>

        <div className="oneFullProjectImage4" styles={{ backgroundImage: `url(${image4})` }} alt={name}>
        </div>

        <div className="oneFullProjectImage5"styles={{ backgroundImage: `url(${image5})` }} alt={name}>
        </div>
      
    </div>

    </>
  );
};

export default OneFullProject;