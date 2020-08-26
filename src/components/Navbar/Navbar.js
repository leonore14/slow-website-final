import React from 'react';
import { NavLink } from 'react-router-dom';
import slowCreativeLogo from '../images/slow-creative-logo.svg';
import './NavbarCss.css';


const Navbar = () => {
    return(
        <div className='navbar'>
            <ul>
                <div className="navbarLogo">
                    <li>
                        <NavLink exact to='/' activeclassName='active' ><img className="navbarLogoImg" src={slowCreativeLogo} alt='slowLogo'></img></NavLink>
                    </li>
                </div>
                    <div className="navbarList">
                    <li>
                        <NavLink to='/projectsPage' activeClassName='active' className="navbarProjectsPage" >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='active' className="navbarAbout" >About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName='active' className="navbarContact" >Contact</NavLink>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar ;