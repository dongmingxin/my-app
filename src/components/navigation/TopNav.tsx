import React from 'react';
import styled from "styled-components";
import NavLink from './NavLink';
import SideNav from './SideNav';
import useCheckMobileScreen from '../../utils/useCheckMobileScreen';


const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0px 50px 0px;
`;

const NavLogo = styled.div`
    font-size: 18px;
    color: #000;
    font-weight: 500;
`;

const NavlogoSpan = styled.span`
    color: #2eca7f;
`

const NavLinks = styled.div`
    display: flex;
    .navlink {
        text-decoration: none;
        padding: 0px 40px 0px 40px;
        color: #49515D;
        font-weight: bold;
        opacity: 0.6;
        position: relative;
        cursor: pointer;
        &:hover {
            opacity: 1;
            &::before{
                content:'';
                position: absolute;
                width: 30px;
                height: 3px;
                background-color: #2eca7f;
                top: 22px;
                right: 38%;
                }
            }
    }
    .active {
        opacity: 1;
    }

`

const Navbar = ():JSX.Element => {

  return (
    <>
        {useCheckMobileScreen() ? (
            <SideNav />
        ) : (
            <NavbarContainer>
                <NavLogo>Mingxin <NavlogoSpan>Dong</NavlogoSpan></NavLogo>
                <NavLinks>
                    <NavLink
                        to="/"
                        className="navlink"
                        activeStyle='active'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className="navlink"
                        activeStyle='active'
                    >
                        Resume
                    </NavLink>
                    <NavLink 
                        to="/blog"
                        className="navlink"
                        activeStyle='active'
                    >
                        Blog
                    </NavLink>
                </NavLinks>
            </NavbarContainer>

        )}
    </>
  )
}

export default Navbar