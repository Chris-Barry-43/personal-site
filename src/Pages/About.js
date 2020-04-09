import React from "react"
import styled from "styled-components"
import deskphoto from "../desk_photo.jpg"

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
const Image = styled.img`
  width: 100%;
`

function About(props) {
    return (
      <Wrapper>
        <Image src= {deskphoto} alt="photo of me"/>
        {/* <Left>
          
        </Left>
        <Right>
          
        </Right> */}
      </Wrapper>
    )
}
 
export default About;