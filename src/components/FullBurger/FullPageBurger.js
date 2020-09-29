import React, { useState } from 'react';
import styled from 'styled-components';
import FullPageRightNav from './FullPageRightNav';
import slowCreativeTypo from '../images/slow-creative-typo-blk.svg';
import { Link } from "react-router-dom";
import './FullPageBurger.css';


const FullStyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 5%;
    right: 4%;
    z-index: 4;
    display: none;
    
    @media (min-width: 769px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    }
  
    div {
      width: 2rem;
      height: 0.15rem;
      background-color: ${({ open }) => open ? 'black' : 'black'};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;
    
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
            <span className="navbarLogo">
                    <li>
                        <Link exact to='/' activeClassName='active' ><img className="navbarLogoImg" src={slowCreativeTypo} alt='slowLogo' ></img></Link>
                    </li>
            </span>

            <span className="burgerFullPageDashes">
              <li>
                <FullStyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </FullStyledBurger>
              </li>
            </span>
        </ul>
        </span>
            <FullPageRightNav open={open} handleClose={handleClose} />
        </>
    )
}

export default FullPageBurger ; 