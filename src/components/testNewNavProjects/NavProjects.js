import React from 'react';
import LogoProjects from './LogoProjects';
import BurgerProjects from './BurgerProjects';
import './NavProjectsCss.css';


const NavProjects = () => {

    return(
        <div className='navbarProjects'>
            <ul>
                <div className="navbarProjectsLogo">
                    <li>
                        <LogoProjects />
                    </li>
                </div>
                <div className="navbarProjectsList">
                    <li>
                        <BurgerProjects />
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default NavProjects ;