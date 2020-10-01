import React, { useState } from 'react';
import styled from 'styled-components';
import FullPageRightNav from './FullPageRightNav';
import slowCreativeTypo from '../images/slow-creative-typo-blk.svg';
import { Link } from "react-router-dom";
import './FullPageBurger.css';


const FullStyledBurger = styled.div`
  
    div {
      background-color: ${({ open }) => open ? 'black' : 'black'};
    
      &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
    
      &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
      }
    
      &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }

    }
`; 


const FullPageBurger = () => {

    const [open, setOpen] = useState(false)

    const handleClose  = () => {
      setOpen(false)
    }

    return(
        <>
        
        <span className="fullPageBurgerNav">
        <ul>
              <li className="navbarLogo">
                        <Link to='/' className='active' ><img className="navbarLogoImg" src={slowCreativeTypo} alt='slowLogo' ></img></Link>
              </li>
           
              <li className="burgerFullPageDashesContainer">
                <FullStyledBurger  className="burgerFullPageDashes" open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </FullStyledBurger>
              </li>
          
        </ul>
        </span>
        
        <FullPageRightNav open={open} handleClose={handleClose} />
        
        </>
    )
}

export default FullPageBurger ; 