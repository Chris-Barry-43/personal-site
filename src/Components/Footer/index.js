import React, { PureComponent } from "react"
import styled, { css } from "styled-components"
//import rem from '../../utils/rem'
import { grey, paleGrey, red } from '../../utils/colors'

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  height: 2.5rem;
  width:100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${grey};
  background: ${paleGrey};
  box-sizing: border-box;


  display: flex;
  //make the startwrapper at the front and endwrapper at the end
  justify-content: space-between;
  transition: background 300ms ease-out;
  font-size: 1rem;
  font-weight: 50;
`;
//display: flex;

const FooterLink = styled.div`

`;

const FooterContent = styled.div`
`;

class Footer extends PureComponent {
    render() {
    return (
    <Wrapper>
        <FooterContent>
            Hi there I'm a footer that will always be down here
            <FooterLink>
                Here's a link to something?
            </FooterLink>
        </FooterContent>

    </Wrapper>

    )
    }
};

export default Footer