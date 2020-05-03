import React from "react"
import styled from "styled-components"

const Wrapper = styled.div `
  display: flex;
  width: 100%;
  background: lightgrey;
  padding-top: 3rem;
  height: 100%;
`

const Left = styled.div `
  width: 40%;
  justify-content: center;
  align-self: flex-start;
  padding-left: 1rem;
  height: 100%;
`

const Right = styled.div`
  width: 60%;
  justify-content: center;
  align-self: flex-end;
  background: grey;
  padding: 2rem;
  height: 100%;
`

 
function Resume(props) {
  return (
      //Render a Thumbnail component
    <Wrapper>
      <Left>
        <h1>
          Chris Barry
        </h1>
      </Left>
      <Right>
        <h1>
          Resume
        </h1>
        {/* education */}
        <h2>
          Education
        </h2>
        <p>
          B.S. Mechanical Engineering 
          <br/>University of Vermont 2015
        </p>
        {/* experience */}
        <h2>
          Experience
        </h2>
        <p>
          Software Test Developer
          <br/>
        </p>
        <ul>
          <li>
            Write end of line test prodedures 
          </li>
          <li>
            C++
          </li>
          <li>
            Qt
          </li>
          <li>
            MySQL, MariaDB
          </li>
        </ul>

      </Right>
    </Wrapper>
  )
}
 
export default Resume;