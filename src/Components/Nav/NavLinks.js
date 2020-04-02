import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"



const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-right: 5em;
`;

//style for each nav link inside the StartWrapper
const NavLink = styled(Link).attrs((/* props */) => ({
    unstyled: true,
  }))`
    flex: 0 0 auto;
    text-decoration: none;
    display: inline-block;
    letter-spacing: 1;
    transition: opacity 0.2s, transform 0.2s;
    cursor: pointer;
    line-height: 1;
    color: currentColor;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
    //if the /page is currently open
    &:active {
      transform: scale(0.95);
      opacity: 0.6;
    }
  `;
  //took out of NavLink because it uses rem
  // letter-spacing: ${rem(0.4)};
  // line-height: ${rem(navbarHeight)};

  //style for the spaces (dots) between the nav items
  const NavSeparator = styled.span`
  flex: 0 0 auto;
  width: .5rem;
  height: .5rem;
  margin: .5rem;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.35;
`;

// Set up the Links by adding an extension to the url
const NavLinks = () => (
    <Wrapper>
        <NavLink to="/home" className="nav-item">Home</NavLink>
        <NavSeparator/>
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavSeparator/>
        <NavLink to="/resume" className="nav-item">Resume</NavLink>
        <NavSeparator/>
        <NavLink to="/interests" className="nav-item">Interests</NavLink>
        <NavSeparator/>
        <NavLink to="/contact" className="nav-item">Contact</NavLink>
    </Wrapper>
)


export default NavLinks