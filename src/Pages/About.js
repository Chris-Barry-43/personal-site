import React from "react"
import styled from "styled-components"

const Wrapper = styled.div `
  display: flex;
  width: 100%;
  
`
const Left = styled.div `
  align-self: flex-start;

  width: 40%;
`

const Right = styled.div `
  align-self: flex-end;

  width: 60%;
`

function About(props) {
    return (
      <Wrapper>
        <Left>
          
        </Left>
        <Right>
          
        </Right>
      </Wrapper>
    )
}
 
export default About;