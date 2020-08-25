import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Ul = styled.ul`

  z-index: 3;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    list-style: none;
    text-decoration: none;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 28%;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }

    li{
      padding: 10px 10px;
      text-align: right;
      margin-right : 11%;
    }
  
    li a{
      text-decoration: none;
      color: black;

    }
  
    li .active{
      font-weight: 450;
    }

  }
  
`;





const RightNav = ({ open, handleClose }) => {

    return(
            <Ul open={open}>    
                    <li>
                        <NavLink exact to='/' activeClassName='active' className="rightNavHome" onClick={() => handleClose()}>Home</NavLink>
                    </li>        
                    <li>
                        <NavLink to='/projects' activeClassName='active' className="rightNavProjects" onClick={() => handleClose()}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='active' className="rightNavAbout" onClick={() => handleClose()}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName='active' className="rightNavContact" onClick={() => handleClose()}>Contact</NavLink>
                    </li>
            </Ul>
    )
}

export default RightNav ;