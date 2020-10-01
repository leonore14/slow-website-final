import React from 'react';
import { Link } from "react-router-dom";
import slowCreativeTypo from '../images/slow-creative-typo-blk.svg';
import './NavProjectsCss.css';


const LogoProjects = () => {

    return(
       
                <div className="navbarLogo">
                        <Link to='/' className='active' ><img className="navbarLogoImg" src={slowCreativeTypo} alt='slowLogo' ></img></Link>
                </div>
                
    )
}

export default LogoProjects ;