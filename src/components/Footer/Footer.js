import React from 'react';
import { NavLink } from 'react-router-dom';
import './FooterCss.css';


const Footer = () => {
    return(
        <>
        <div className='footer'>
            <ul>
                <li>
                    <a activeclassname='active' target="blank" href='https://www.instagram.com/slow.creative/'>Instagram</a>
                </li>
                <li>
                    Copyright © 2020 Slōw Creative. All rights reserved
                </li>
                <li>
                    <NavLink activeclassname='active' to='generalTerms'>General Terms Of Use</NavLink>
                </li>
                <li>
                    <NavLink activeclassname='active' to='personalData'>Personal Data Policy</NavLink>
                </li>
                <li>
                    <NavLink activeclassname='active' to='contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Footer ;