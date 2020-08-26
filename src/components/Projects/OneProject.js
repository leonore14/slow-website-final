import React from "react";
import "./ProjectsCss.css";

const OneProject = ({ image1, name, shortDescription }) => {
  return (
    <div className="oneProjectContainer">

      <div className="oneProject">
        <img src={image1} alt={name} />
        <ul>
          <li>
            <strong>{name} </strong>
          </li>
          <li>
            <p>{shortDescription} </p>
          </li>
        </ul>
      </div>

      <div className="oneProject">
        <img src={image1} alt={name} />
        <ul>
          <li>
            <strong>{name} </strong>
          </li>
          <li>
            <p>{shortDescription} </p>
          </li>
        </ul>
      </div>

      <div className="oneProject">
        <img src={image1} alt={name} />
        <ul>
          <li>
            <strong>{name} </strong>
          </li>
          <li>
            <p>{shortDescription} </p>
          </li>
        </ul>
      </div>

      <div className="oneProject">
        <img src={image1} alt={name} />
        <ul>
          <li>
            <strong>{name} </strong>
          </li>
          <li>
            <p>{shortDescription} </p>
          </li>
        </ul>
      </div>

      <div className="oneProject">
        <img src={image1} alt={name} />
        <ul>
          <li>
            <strong>{name} </strong>
          </li>
          <li>
            <p>{shortDescription} </p>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default OneProject;
