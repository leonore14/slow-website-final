import React from 'react';
import { NavLink } from 'react-router-dom';
import slowCreativeTypo from '../images/slow-creative-typo-blk.svg';
import './NavbarCss.css';


const Navbar = () => {
    return(
        <div className='navbar'>
            <ul>
                <div className="navbarLogo">
                    <li>
                        <NavLink exact to='/' activeclassname='active' ><img className="navbarLogoImg" src={slowCreativeTypo} alt='slowLogo'></img></NavLink>
                    </li>
                </div>
                    <div className="navbarList">
                    <li>
                        <NavLink to='/projectsPage' activeclassname='active' className="navbarProjectsPage" >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeclassname='active' className="navbarAbout" >About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeclassname='active' className="navbarContact" >Contact</NavLink>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar ;