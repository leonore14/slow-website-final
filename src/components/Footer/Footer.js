import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return(
        <>
        <div className='footer'>
            <ul>
                <li>
                    <a activeClassName='active' target="blank" href='https://www.instagram.com/slow.creative/'>Instagram</a>
                </li>
                <li>
                    <NavLink activeClassName='active' to='copyright'>Copyright ©</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='generalTerms'>General Terms Of Use</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='personalData'>Personal Data Policy</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Footer ;