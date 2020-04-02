import React, { PureComponent } from 'react'
import styled from "styled-components"
import NavLinks from "./NavLinks"
import { violetRed } from '../../utils/colors';

//overall wrappper
const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  display: flex;
  top: 0;
  //make the startwrapper at the front and endwrapper at the end
  justify-content: space-between;
  transition: background 300ms ease-out;
  height: 3rem;
  font-size: 1rem;
  font-weight: 50;
  background: ${props => (props.transparent ? 'transparent' : violetRed)};
  color: white;
  
  
`;
//font-family: ${headerFont};
//  box-sizing: border-box;

//style for the first part with my name
const Name = styled.div`
  display: flex;
  align-items: Center;
  justify-content: flex-end;
  padding: 0.7em;
  padding-right: 3em;
  `;

//style for the section with links ie /home
const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

//style for the rhs with links to social media/github
const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  //flex-end defines what happens to elements withing endwrapper, not endrwapper itself
  justify-content: flex-end;
  padding-right: 1em;
`;


class Navbar extends PureComponent {

  render() {
  return(
      <Wrapper>

              <StartWrapper>

                <Name>Chris Barry</Name>
                
                {/* insert NavLinks */}
                
                <NavLinks/>
            
              </StartWrapper>

              <EndWrapper>
                Social media tags
              </EndWrapper>

      </Wrapper>
  )
  }
};

export default Navbar